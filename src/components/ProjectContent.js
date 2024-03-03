import { Container, Row, Col } from "react-bootstrap";

export const ProjectContent = ({  content, contentType,imgShowCase,videoUrl }) =>{
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
                    {contentType === "video" && videoUrl ? (
                            <iframe width="100%" height="315" src={videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        ) : (
                            <img src={imgShowCase} alt="project image" />
                        )}
                    </Col>
                </Row>  
            </Container>
            
        </section>
    )
}
 
