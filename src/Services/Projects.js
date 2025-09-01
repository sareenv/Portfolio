

const baseUrl = "https://api.sareenv.com/api/v1"

// Simple in-memory cache
const cache = {
    projects: { value: null, expiry: 0 },
    projectById: {}, // { [id]: { value, expiry } }
}
const TTL = 20 * 60 * 1000; // 20 minutes

const downloadProject = () => {
    const now = Date.now();
    if (cache.projects.value && cache.projects.expiry > now) {
        return Promise.resolve(cache.projects.value);
    }
    const url = `${baseUrl}/projects`;
    return fetch(url)
        .then(data => data.json())
        .then(json => {
            cache.projects = { value: json, expiry: now + TTL };
            return json;
        });
};

const downloadProjectByID = (id) => {
    const now = Date.now();
    if (
        cache.projectById[id] &&
        cache.projectById[id].value &&
        cache.projectById[id].expiry > now
    ) {
        return Promise.resolve(cache.projectById[id].value);
    }
    const url = `${baseUrl}/project/${id}`;
    return fetch(url)
        .then(data => data.json())
        .then(json => {
            cache.projectById[id] = { value: json, expiry: now + TTL };
            return json;
        });
};

export { downloadProject, downloadProjectByID };
