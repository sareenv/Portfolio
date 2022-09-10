
const downloadProject = () => {
    const url = "http://localhost:8080/api/v1/projects"
    const data = fetch(url).then(data => data.json())
    return data
}

export {downloadProject}