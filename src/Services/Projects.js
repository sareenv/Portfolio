
const baseUrl = "http://api.sareenv.com/api/v1"

var projectCache = []
const projectMap = new Map();

const downloadProject = () => {
    if (projectCache.length >= 1) { 
        console.log("returning from cache")
        return projectCache 
    }
    const url = `${baseUrl}/projects`
    const data = fetch(url).then(data => data.json())
    projectCache = data
    return data
}

const downloadProjectByID = (id) => {
    // return from the memory cache.
    if(projectMap.has(id)) { 
        console.log("returning from cache")
        return projectMap.get(id) 
    }
    const url = `${baseUrl}/project/${id}`
    const data = fetch(url).then(data => data.json())
    projectMap.set(id, data)
    return data
}

export {downloadProject, downloadProjectByID}