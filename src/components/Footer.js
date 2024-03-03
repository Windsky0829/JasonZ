import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo-white.png";
import navIcon1 from "../images/twitter.png";
import navIcon2 from "../images/linkedin.png";
import navIcon3 from "../images/github2.png";
import download from '../images/download2.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <img id="footerlogo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={{ span: 4, offset: 4 }} className="text-center text-sm-end">
            <div className="social-icon-foot">
              <a href="https://www.linkedin.com/in/hongrui-zhang-06b03a1ab"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Windsky0829"><img src={navIcon3} alt="Icon" /></a>
              <a href="#" download="JasonResume.pdf"><img src={download} alt='Resume download'/></a>
            </div>
            <p>Jason Zhang, 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}