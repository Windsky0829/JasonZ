import { Accordion } from "react-bootstrap";

export const Details = () =>{

    return(
        <section className="detail" id="details">
            <div className="detail-content">

            
                <h2>DETAILS</h2>
                <p>SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING </p>
                <Accordion>
                    <Accordion.Item eventKey="0" className="item">
                        <Accordion.Header>QUALIFICATIONS</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li><p>Master of Information Technology, <strong>The University of Melbourne</strong>.(2024)</p></li>
                                <ul>
                                    <li><p>Nature Language Processing</p></li>
                                    <li><p>Computer Vision</p></li>
                                    <li><p>Website Development</p></li>
                                    <li><p>Mobile App Development</p></li>
                                    <li><p>Information Visualisation</p></li>
                                </ul>
                                <li><p>Bachelor of Information Technology, <strong>Monash University</strong>.(2021)</p></li>
                                <ul>
                                    <li><p>Game Development</p></li>
                                    <li><p>Interactive Media</p></li>
                                    <li><p>Software Development</p></li>
                                </ul>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="item">
                        <Accordion.Header>SKILLS & TOOLS</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li><p>Skills</p></li>
                                <ul>
                                    <li><p>Agile Methodologies:Scrum</p></li>
                                    <li><p>Setting Deadlines & Milestones</p></li>
                                    <li><p>Sprint Planning, Reviews & Retrospectives</p></li>
                                    <li><p>UI/UX Design</p></li>
                                    <li><p>Website Design and Eevelopment</p></li>
                                    <li><p>Game Design</p></li>
                                    <li><p>Game Immersive Environment Design</p></li>
                                    <li><p>Photo, Video, Audio Process</p></li>
                                </ul>
                                <li><p>Tools</p></li>
                                <ul>
                                    <li><p>C++</p></li>
                                    <li><p>Java</p></li>
                                    <li><p>Python</p></li>
                                    <li><p>Javascript</p></li>
                                    <li><p>HTML,CSS</p></li>
                                    <li><p>React</p></li>
                                    <li><p>Android Java</p></li>
                                    <li><p>Unreal Engine(UE4)</p></li>
                                    <li><p>PhotoShop</p></li>
                                    <li><p>R</p></li>
                                    <li><p>Confluence</p></li>
                                    <li><p>Trello</p></li>
                                    <li><p>Slack</p></li>
                                    <li><p>Tableau</p></li>
                                    <li><p>Git</p></li>
                                    
                                </ul>
                                
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="item">
                        <Accordion.Header>VOLUNTEERING & EXPERIENCE</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li><p>VOLUNTEERING</p></li>
                                <ul>
                                    <li><p><strong>Research Center for Global Youth (China)(2022-2023)</strong></p></li>
                                    <ul>
                                        <li><p>Volunteer, Social Media Department Mananger</p></li>
                                    </ul>
                                </ul>
                                <li><p>EXPERIENCE</p></li>
                                <ul>
                                    <li><p><strong>Chenma Beijing(China)(2021-2022)</strong></p></li>
                                    <ul>
                                        <li><p>Teenager Python Lessons Developer</p></li>
                                    </ul>
                                    <li><p><strong>Aurora Melbourne Central(2023)</strong></p></li>
                                    <ul>
                                        <li><p>Customer Service</p></li>
                                    </ul>
                                </ul>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </section>
    )
}

