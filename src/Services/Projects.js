
const baseUrl = "http://api.sareenv.com/api/v1"

var projectCache = []
const projectMap = new Map();

const downloadProject = () => {
    const url = `${baseUrl}/projects`
    const data = fetch(url, {referrerPolicy: "unsafe-url"}).then(data => data.json())
    projectCache = data
    return data
}

const downloadProjectByID = (id) => {
    const url = `${baseUrl}/project/${id}`
    const data = fetch(url, {referrerPolicy: "unsafe-url"}).then(data => data.json())
    projectMap.set(id, data)
    return data
}

export {downloadProject, downloadProjectByID}
