
const ConcordiaDetails = {
    instition: 'Concordia University',
    qualification: 'MSc Software Engineering',
    address: `1455 Boul. de Maisonneuve Ouest, Montréal, Canada, QC H3G 1M8`,
    id: '1',
    course: [
            "Distributed System Design", 
            "Advanced Software Architecture", 
            "Applied Artificial Intelligence", 
            "Program and Problem Solving", 
            "Software Requirement Specification", 
            "Comp Studies of Programming Languages", 
            "Graduate Seminar Report", 
            "Advanced Programming Practices",
            "Software Comprehension & Maintenance", 
            "Software Development Methodologies"
    ],
    image: 'https://www.concordia.ca/content/dam/common/logos/Concordia-logo.jpeg', 
}

const CoventryDetails = {
    instition: 'Coventry University',
    qualification: 'BSc (Hons) Computer Science',
    address: 'Priory St, Coventry CV1 5FB, United Kingdom',
    id: '2',
    image: 'https://conflictresearchsociety.org/wp-content/uploads/2020/01/coventry-university-logo.png',
    course: [
        "Discrete Mathematics",
        "iOS Application Development with Swift", 
        "Web Application & Backend Development", 
        "Advanced Datastructures and Algorithms", 
        "Data and Information Retrival",
        "Operating Systems & Computer Networks", 
        "Theory of Compution & Automata", 
        "Software Engineering", 
        "Final Dissertation",
    ]
}

const AWSCertification = {
    instition: 'AWS Web Services',
    qualification: 'AWS Certified Cloud Practitioner',
    id: '3',
    image: 'https://images.credly.com/size/220x220/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    issued: "Aug 2022",
    credLink: 'https://www.credly.com/badges/a1241d89-d1e6-4f30-80da-e3f0bdc51e3f/public_url'
}


const DockerCertification = {
    instition: 'Udemy e-Learning',
    qualification: 'Docker',
    id: '4',
    image: 'https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo-2013.png',
    credLink: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-4069f5bf-57db-400e-b3fc-15a69bfcb79a.pdf', 
    issued: "Sep 2022",
    certificateID: "UC-4069f5bf-57db-400e-b3fc-15a69bfcb79a"
}


export {ConcordiaDetails, CoventryDetails, AWSCertification, DockerCertification};