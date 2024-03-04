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
                <li><p>Producer</p></li>
            </ul>
                <p><strong>Hospital</strong> is a first person horror game, player need to searching around the hospital to find information and the keys to escape from the hospital.</p>
                <h3><strong>Key Responsibilities</strong></h3>
                <ul>
                    <li><p>Design the Environment.</p></li>
                    <li><p>Design the game story and process.</p></li>
                    <li><p>Model the whole environment by Maya.</p></li>
                    <li><p>Process the photo to Texture, Normal Map.</p></li>
                </ul>
            </div>`,
            contentType: "img",
            imgUrl:ProjImg1,
            imgBack:ProjImgBack1,
            imgShowCase:ProjShow1,
        },
        {
            title:"Street",
            description:"An horror immersive game environment",
            content:`<div className="Pro-Content">
            <ul>
            <li><p>Producer</p></li>
        </ul>
        <p><strong>Street</strong> is a first person horror environment.</p>
        <h3><strong>Key Responsibilities</strong></h3>
        <ul>
            <li><p>Design the Environment.</p></li>
            <li><p>Design the game audio.</p></li>
            <li><p>Model the whole environment by Maya.</p></li>
            <li><p>Process the photo to Texture, Normal Map.</p></li>
        </ul>
        </div>`,
        contentType: "img",
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
                    <li><p>Product Owner, Lead Programmer UE4 C++ & Blueprints</p></li>
                </ul>
                <p><strong>The Island</strong> is a first-person shooter survival game. Unlike most other FPS and survival games, this game's art style is designed to be more adorable. A unique feature of the game is the design of bullets as paint sprays, which blind enemies, drawing inspiration from 'Splatoon'.</p>
                <h3><strong>Key Responsibilities</strong></h3>
                <ul>
                    <li><p>Designed game story and mechanics, for example how to play the game, where the game can "hook" player</p></li>
                    <li><p>Built Item system, Crafting System, Item spawning, Item interaction and Shooting system as
                        game design document(All finished by C++)</p></li>
                    <li><p>Created UI functions and Draw</p></li>
                    <li><p>Acted as a product owner on projects, assigned work, held meetings, and communicated
                        with tutors</p></li>
                    <li><p>Lead whole team to finish project, for example helping team members solve problems</p></li>
                    <li><p>Coordinate different opinions of members and finally decide on best one</p></li>
                </ul>
                <h3><strong>Achievement</strong></h3>
                <p>Successfully designed and implemented an immersive game environment for 'The Island' . Spearheaded the development of core game functionalities, including item systems, crafting, item spawning, interactions, and shooting mechanisms, all engineered in C++. These innovations significantly enhanced game interactivity and player experience.</p>

            </div>
            `,
            contentType: "img",
            imgUrl:ProjImg1,
            imgBack:ProjImgBack1,
            imgShowCase:ProjShow1,
        },
    ];

    const webProjects=[
        {
            title:"SMART on FHIR Insulin App (Phase 1)",
            description:"An SMART on FHIR Insulin App for Royal Melbourne Hospital.",
            content:`
            <div className="Pro-Content">
                <ul>
                    <li><p>Architecture Lead</p></li>
                </ul>
                <p>The <strong>Desktop SMART Insulin Calculator App</strong> for Doctors represents a cutting-edge solution poised to
                    revolutionize diabetes management for healthcare practitioners. While it does not store patient
                    information, it aims to integrate with the hospital's Electronic Health Record (EHR) system, promising
                    unparalleled efficiency and precision in diabetes care.</p>
                <ul>
                    <li><p>Wrote the User Story and Sprint 3 Test Plan document, contributing to the project's strategic planning and execution.</p></li>
                    <li><p>Program the Feedback function with React and nodejs.</p></li>
                    <li><p>Developed the insulin calculator algorithm and integrated with a valid patient test on frontend.</p></li>
                    <li><p>Responsible for identifying technical risks, developing mitigation strategies, and managing technical debt to ensure system stability and performance.</p></li>
                </ul>
                <h3><strong>Achievement</strong></h3>
                <p>Successfully led the architectural design and collaborative development of the 'Desktop SMART Insulin Calculator App (Phase 1)', surpassing client expectations by flawlessly executing project deliverables. Spearheaded the creation of a critical feedback feature and developed comprehensive test cases based on client-provided insulin calculations, demonstrating technical expertise and client-centric problem solving. Authored the Sprint 3 test plan document, ensuring rigorous quality control and project alignment with client needs.</p>
            </div>
            `,
            contentType: "img",
            imgUrl:ProjImg4,
            imgBack:ProjImgBack4,
            imgShowCase:ProjShow4,
        },
    ];

    const mobileProjects=[
        {
            title:"Soout",
            description:"A social fitness mobile application.",
            content:`
            <div className="Pro-Content">
                <ul>
                    <li><p>Frontend Programmer</p></li>
                </ul>
                <p><strong>Soout</strong> is a Android mobile application bring outdoors to social life.</p>
                <ul>
                    <li><p>Design the UI and UX of the application to provide a user friendly UI</p></li>
                    <li><p>Program the User Profile, Log in, Sign in, Forgot Password, Send Verifications Email activities and functions.</p></li>
                </ul>
            </div>
            `,
            contentType: "video",
            imgUrl:ProjImg5,
            imgBack:ProjImgBack5,
            imgShowCase:ProjShow5,
            videoUrl:"https://www.youtube.com/embed/Sdtkl2tXr5M?si=sASS-NwHpdgLsR_J",
        },
    ];

    const VisualProjects=[
        {
            title:"VIC Road Crashes",
            description:"A Tableau data visualization about VIC Road Crashes.",
            content:`
            <div className="Pro-Content">
                <ul>
                    <li><p>Producer</p></li>
                </ul>
                <p><strong>VIC Road Crashes</strong> is a Tableau Data Visualisation dashboard, present data that supports a clear and valid data story. The dashboard is exploratory or explanatory in nature, but it must have a coherent and clear theme or message about your data to help VicRoads reduce the number (social cost) of crashes.</p>
                <ul>
                    <li><p>Analsing the data to create a coherent and clear theme.</p></li>
                    <li><p>Design the whole dashboard style by the theme.</p></li>
                    <li><p>Design the chart by the information that provide by the data.</p></li>
                    <li><p>Using Tableau create a interactive and creative dashboard.</p></li>
                </ul>
            </div>
            `,
            contentType: "img",
            imgUrl:ProjImg6,
            imgBack:ProjImgBack4,
            imgShowCase:ProjImg6,
        },
        {
            title:"Visualization about Traffic",
            description:"A R data visualization about traffic for some state government departments.",
            content:`
            <div className="Pro-Content">
                <ul>
                    <li><p>Main Developer & Main Designer</p></li>
                </ul>
                <p><strong>Visualization about Traffic</strong> is a data visualization about traffic for some state government departments developed by R shiny and Tableau.</p>
                <ul>
                    <li><p>Analsing the data to create a coherent and clear theme.</p></li>
                    <li><p>Using R shiny developed "Pedestrian Sensor and Interactive Chart", provide a data drilling feature.</p></li>
                    <li><p>Using R shiny developed interactive "Traffic volume map", provide a clear showcase for the traffic volume</p></li>
                    <li><p>Design the Dashboard style and program CSS</p></li>
                </ul>
            </div>
            `,
            contentType: "img",
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