import { api } from '../constants/theme';

const { baseUrl, cacheTTL: TTL } = api;

// Simple in-memory cache
const cache = {
    projects: { value: null, expiry: 0 },
    projectById: {}, // { [id]: { value, expiry } }
}

// Custom error class for API errors
class ApiError extends Error {
    constructor(message, status, type = 'error') {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.type = type;
    }
}

const handleResponse = async (response) => {
    if (!response.ok) {
        if (response.status === 404) {
            throw new ApiError('Resource not found', 404, 'notFound');
        }
        if (response.status >= 500) {
            throw new ApiError('Server error. Please try again later.', response.status, 'error');
        }
        throw new ApiError('Something went wrong', response.status, 'error');
    }
    return response.json();
};

const downloadProject = async () => {
    const now = Date.now();
    if (cache.projects.value && cache.projects.expiry > now) {
        return cache.projects.value;
    }
    
    const url = `${baseUrl}/projects`;
    
    try {
        const response = await fetch(url);
        const json = await handleResponse(response);
        cache.projects = { value: json, expiry: now + TTL };
        return json;
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        // Network error (no internet, DNS failure, etc.)
        throw new ApiError('Unable to connect. Please check your internet connection.', 0, 'network');
    }
};

const downloadProjectByID = async (id) => {
    const now = Date.now();
    if (
        cache.projectById[id] &&
        cache.projectById[id].value &&
        cache.projectById[id].expiry > now
    ) {
        return cache.projectById[id].value;
    }
    
    const url = `${baseUrl}/project/${id}`;
    
    try {
        const response = await fetch(url);
        const json = await handleResponse(response);
        cache.projectById[id] = { value: json, expiry: now + TTL };
        return json;
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        // Network error
        throw new ApiError('Unable to connect. Please check your internet connection.', 0, 'network');
    }
};

// Clear cache (useful for retry functionality)
const clearCache = () => {
    cache.projects = { value: null, expiry: 0 };
    cache.projectById = {};
};

export { downloadProject, downloadProjectByID, clearCache, ApiError };
