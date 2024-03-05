import { useState,useEffect } from 'react';
import {Container, Row, Col} from "react-bootstrap"
import me from '../images/me.png'
import resume from "../Jason_Resume.pdf";
import download from '../images/download.png'

export const Banner =() =>{
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]= useState(false);
    const toRotate=["Game Developer","Web Developer","UI/UX Designer"];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return() => {clearInterval(ticker)};
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className='Banner-about'>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <div id="Bannertitle">
                                <h1>{'Hi! I\'m Jason! '}</h1>
                                <h1>{'A '}<span className="wrap">{text}</span></h1>
                            </div>
                            
                            <p>Having graduated with a Master of Information Technology (Computing) from The University of
Melbourne, I am now seeking an entry-level position in software or game development.</p>
                            <a href={resume} download="JasonResume" className="download-button">Get My Resume <img src={download}/></a>

                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={me} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about" id="abouts">
                <div className='container'>
                    <div className="about-bx">
                        <h2>ABOUT</h2>
                        <p>Skilled and experienced with <strong>Website</strong> and <strong>Game</strong> Development. I am passionate
about developing innovative software solutions, solving complex problems, introducing new ideas, and
coordinating technical projects..</p>
                        

                    </div>
                </div>
                
            </section>
        </section>
        

    )
}