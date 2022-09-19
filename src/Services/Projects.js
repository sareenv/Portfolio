
const baseUrl = "https://d32pt0shyvap5q.cloudfront.net/api/v1"
const downloadProject = () => {
    const url = `${baseUrl}/projects`
    const data = fetch(url).then(data => data.json())
    return data
}

const downloadProjectByID = (id) => {
    const url = `${baseUrl}/project/${id}`
    const data = fetch(url).then(data => data.json())
    return data
}

export {downloadProject, downloadProjectByID}