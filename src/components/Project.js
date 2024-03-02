import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ProjImg1 from "../images/Hospital-title.png";
import ProjImgBack1 from "../images/hospital-back.png";
import ProjShow1 from "../images/Hospital_Showcase1.png";
import ProjImg2 from "../images/streettitle.png";
import ProjShow2 from"../images/Street_Showcase1.png";
import ProjImgBack2 from "../images/Streetback.png";
import ProjImg3 from "../images/streettitle.png";
import ProjImgBack3 from "../images/Streetback.png";
import ProjImg4 from "../images/insulinCalApp-title.png";
import ProjImgBack4 from "../images/insulinCalApp-back.png";
import ProjShow4 from "../images/Cal-showcase.png"
import ProjImg5 from "../images/mobile-logo.png"
import ProjImgBack5 from "../images/Soout-back.png"
import ProjShow5 from "../images/Soout-login.png"
import ProjImg6 from "../images/Tableau.png"
import ProjImg7 from "../images/numbats_title.jpg"
import ProjImgBack7 from "../images/Numbatback.png"
import ProjShow7 from "../images/Numbats_showcase.png"
import ProjImg8 from "../images/numbats_title.jpg"
import ProjImgBack8 from "../images/Numbatback.png"
import ProjShow8 from "../images/Traffic_show.png"

export const Project = () =>{

    const projects=[
        {
            title:"Hospital",
            description:"An interactive, immersive game environment",
            content:`<div className="Pro-Content">
            <ul>
                <li><p>Product Owner</p></li>
            </ul>
                <p><strong>Hospital</strong> is a first person horror game, player need to searching around the hospital to find information and the keys to escape from the hospital.</p>
                <h3><strong>Key Responsibilities</strong></h3>
                <ul>
                    <li><p>Design the Environment</p></li>
                    <li><p>Design the game story and process</p></li>
                    <li><p>Model the whole environment by Maya</p></li>
                    <li><p>Process the photo to Texture, Normal Map</p></li>
                </ul>
            </div>`,
            imgUrl:ProjImg1,
            imgBack:ProjImgBack1,
            imgShowCase:ProjShow1,
        },
        {
            title:"Street",
            description:"An horror immersive game environment",
            content:`<div className="Pro-Content">
            <ul>
            <li><p>Product Owner</p></li>
        </ul>
        <p><strong>Street</strong> is a first person horror environment.</p>
        <h3><strong>Key Responsibilities</strong></h3>
        <ul>
            <li><p>Design the Environment</p></li>
            <li><p>Design the game audio</p></li>
            <li><p>Model the whole environment by Maya</p></li>
            <li><p>Process the photo to Texture, Normal Map</p></li>
        </ul>
        </div>`,
            imgUrl:ProjImg2,
            imgBack:ProjImgBack2,
            imgShowCase:ProjShow2,
        },
        {
            title:"The Island",
            description:"A cartoon style survival game",
            content:`
            <div className="Pro-Content">
                <ul>
                    <li><p>Product Owner</p></li>
                </ul>
                <p><strong>The Island</strong> is a first-person shooter survival game. Unlike most other FPS and survival games, this game's art style is designed to be more adorable. A unique feature of the game is the design of bullets as paint sprays, which blind enemies, drawing inspiration from 'Splatoon'.</p>
                <h3><strong>Key Responsibilities</strong></h3>
                <ul>
                    <li><p>Design the Game style and story</p></li>
                    <li><p>Designed game story and mechanics</p></li>
                    <li><p>Built Item system, Crafting System, Item spawning, Item interaction and Shooting system as
                        game design document(All finished by C++)</p></li>
                    <li><p>Created UI functions and Draw</p></li>
                    <li><p>Acted as a product owner on projects, assigned work, held meetings, and communicated
                        with tutors</p></li>
                        <li><p>Lead whole team to finish project, for example helping team members solve problems</p></li>
                        <li><p>Coordinate different opinions of members and finally decide on best one</p></li>
                </ul>

            </div>
            `,
            imgUrl:ProjImg1,
            imgBack:ProjImgBack1,
            imgShowCase:ProjShow1,
        },
    ];

    const webProjects=[
        {
            title:"SMART on FHIR Insulin App",
            description:"An SMART on FHIR Insulin App for Royal Melbourne Hospital.",
            content:`<h2>Overview</h2><p>This project is about <strong>innovative technology</strong> that aims to revolutionize the industry. </p>`,
            imgUrl:ProjImg4,
            imgBack:ProjImgBack4,
            imgShowCase:ProjShow4,
        },
    ];

    const mobileProjects=[
        {
            title:"Soout",
            description:"A social fitness mobile application.",
            content:`<h2>Overview</h2><p>This project is about <strong>innovative technology</strong> that aims to revolutionize the industry. </p>`,
            imgUrl:ProjImg5,
            imgBack:ProjImgBack5,
            imgShowCase:ProjShow5,
        },
    ];

    const VisualProjects=[
        {
            title:"VIC Road Crashes",
            description:"A Tableau data visualization about VIC Road Crashes.",
            content:`<h2>Overview</h2><p>This project is about <strong>innovative technology</strong> that aims to revolutionize the industry. </p>`,
            imgUrl:ProjImg6,
            imgBack:ProjImgBack4,
            imgShowCase:ProjImg6,
        },
        {
            title:"Numbats observation",
            description:"A R data visualization about Numbats observation.",
            content:`<h2>Overview</h2><p>This project is about <strong>innovative technology</strong> that aims to revolutionize the industry. </p>`,
            imgUrl:ProjImg7,
            imgBack:ProjImgBack7,
            imgShowCase:ProjShow7,
        },
        {
            title:"Visualization about Traffic",
            description:"A R data visualization about traffic for some state government departments.",
            content:`<h2>Overview</h2><p>This project is about <strong>innovative technology</strong> that aims to revolutionize the industry. </p>`,
            imgUrl:ProjImg8,
            imgBack:ProjImgBack8,
            imgShowCase:ProjShow8,
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
                                <Nav.Item>
                                    <Nav.Link eventKey="forth" >Data Visualisation</Nav.Link>
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
                                <Tab.Pane eventKey="forth">
                                    <Row>
                                        {VisualProjects.map((project,index) => {
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