import { Container, Row, Col } from "react-bootstrap";

export const ProjectContent = ({ content, imgShowCase }) =>{
    return(
        <section className="project-content">
            <Container className="project-content-containter">
                <Row>
                    <Col xs={12} md={6} xl={7}>
                    <div className="project-content-text">
                        <div className="project-content-des">
                            <span dangerouslySetInnerHTML={{ __html: content }}></span>
                        </div>
                    </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={imgShowCase} alt="project image"/>
                    </Col>
                </Row>  
            </Container>
            
        </section>
    )
}
 
