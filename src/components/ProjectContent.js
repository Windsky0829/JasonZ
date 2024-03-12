import { Container, Row, Col, Carousel  } from "react-bootstrap";

export const ProjectContent = ({  content, contentType,imgShowCase,videoUrl }) =>{
    const isMultipleImages = Array.isArray(imgShowCase);
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
                        ) : isMultipleImages ? (
                            <Carousel>
                                {imgShowCase.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        ) : (
                            <img src={imgShowCase} alt="project image" />
                        )}
                    </Col>
                </Row>  
            </Container>
            
        </section>
    )
}
 
