import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ProjImg1 from "../images/Hospital-title.png"
import ProjImgBack1 from "../images/hospital-back.png"
import ProjImg2 from "../images/streettitle.png"
import ProjImgBack2 from "../images/Streetback.png"
import ProjImg3 from "../images/streettitle.png"
import ProjImgBack3 from "../images/Streetback.png"
import ProjImg4 from "../images/insulinCalApp-title.png"
import ProjImgBack4 from "../images/insulinCalApp-back.png"

export const Project = () =>{

    const projects=[
        {
            title:"Hospital",
            description:"An interactive, immersive game environment",
            content:`<h2>Overview</h2><p>This project is about <strong>innovative technology</strong> that aims to revolutionize the industry. </p>`,
            imgUrl:ProjImg1,
            imgBack:ProjImgBack1,
        },
        {
            title:"Street",
            description:"An horror immersive game environment",
            content:"",
            imgUrl:ProjImg2,
            imgBack:ProjImgBack2,
        },
        {
            title:"The Island",
            description:"A cartoon style survival game",
            content:"",
            imgUrl:ProjImg1,
            imgBack:ProjImgBack1,
        },
    ];

    const webProjects=[
        {
            title:"SMART on FHIR Insulin App",
            description:"An SMART on FHIR Insulin App for Royal Melbourne Hospital.",
            content:`<h2>Overview</h2><p>This project is about <strong>innovative technology</strong> that aims to revolutionize the industry. </p>`,
            imgUrl:ProjImg4,
            imgBack:ProjImgBack4,
        },
    ];

    const mobileProjects=[
        {
            title:"Soout",
            description:"A social fitness mobile application.",
            content:`<h2>Overview</h2><p>This project is about <strong>innovative technology</strong> that aims to revolutionize the industry. </p>`,
            imgUrl:ProjImg4,
            imgBack:ProjImgBack4,
        },
    ];
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>PROJECTS</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">GAME</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">WEBSITE</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >MOBILE APP</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project,index) => {
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {webProjects.map((project,index) => {
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {mobileProjects.map((project,index) => {
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
        

    
}