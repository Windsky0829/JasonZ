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
                            Something Something Something Something Something Something Something .
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="item">
                        <Accordion.Header>SKILLS & TOOLS</Accordion.Header>
                        <Accordion.Body>
                            Something Something Something Something Something Something Something .
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="item">
                        <Accordion.Header>Tab 3</Accordion.Header>
                        <Accordion.Body>
                            Something Something Something Something Something Something Something .
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </section>
    )
}

