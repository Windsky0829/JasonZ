import React,{useState,useEffect,useRef, forwardRef, useImperativeHandle} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../images/project_sample.png";
import { motion,AnimatePresence } from "framer-motion";
import closeicon from "../images/icons8-close-64.png"
import imgBack from "../images/background2.png"
import sending from "../images/paper-plane-small.png"



export const Contact =() =>{
    const formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const [formDetails,setFormDetails] = useState(formInitialDetails);
    const [buttonText,setButtonText] = useState('Send');
    const [status,setStatus] = useState({});
    //const [modalContent, setModalContent] = useState("");

    const EmailModal = forwardRef(({children},ref) => {
        const [emailOpen, setEmailOpen] = useState(false);
        const [modalMessage, setModalMessage] = useState("");

        useEffect(() => {
            console.log("Modal open state: ", emailOpen);
          }, [emailOpen]);

        useImperativeHandle(ref,()=>{
            return{
            open: (message="") => {
                console.log(message);
                setModalMessage(message); 
                setEmailOpen(true);
              },
            close:()=>{
                console.log('Closing modal...');
                setEmailOpen(false);
                setModalMessage(""); 
              }
            }
        })

        const handleBackdropClick = () => {
            setEmailOpen(false);
          };
        
        
          return(
            <AnimatePresence>
              {emailOpen && (
                <>
                <motion.div 
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 0.5,
                  transition: { duration: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  transition: { delay:0.3},
                }}
                onClick={handleBackdropClick}
                className="email-modal-backdrop"
                >
                
              </motion.div>
              <motion.div 
              initial={{
                opacity: 0,
                y:50,
              }}
              animate={{
                opacity: 1,
                y:0,
                transition: { duration: 0.3 },
              }}
              exit={{
                opacity: 0,
                y:50,
                transition: { duration: 0.3 },
              }}
              //onClick={handleModalContentClick}
              className="email-modal-content-wrapper">
                  <button type="button" onClick={()=>setEmailOpen(false)} className="email-modal-exit-button">
                      <img src={closeicon}/>
                  </button>
                  <div>
                    <div className="email-img-with-mask">
                      <img src={imgBack} alt="email-Background"/>
                      <h1>Something Went Wrong!</h1>
                    </div>
                    
                  </div>
                  <motion.div
                  initial={{
                    x: 100,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.3 },
                  }}
                  exit={{
                    x: 100,
                    opacity: 0,
                    transition: { duration: 0.3 },
                  }}
                  className="email-modal-content">
                    <p>{modalMessage || "Default"}</p>
                    {children}
                  </motion.div>
                  
              </motion.div>
                </>
                
              )}
            </AnimatePresence>
          );
    });

    const emailmodalRef=useRef()

    const onFormUpdate = (catrgory,value) => {
        setFormDetails({
            ...formDetails,
            [catrgory]: value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        //emailmodalRef.current.open();
        
        if (!formDetails.firstName || !formDetails.lastName || !formDetails.phone || !formDetails.email || !formDetails.message) {
            //emailmodalRef.current.open();
            const message = "Please fill in all fields.";
            setTimeout(() => emailmodalRef.current.open(message), 0);
            setStatus({success: false, message: "Please fill in all fields."});
            return; // 停止处理函数
        }
    
        // 验证电子邮件格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formDetails.email)) {
            const message ="Please enter a valid email address.";
            setTimeout(() => emailmodalRef.current.open(message), 0);
            setStatus({success: false, message: "Please enter a valid email address."});
            return; // 停止处理函数
        }

        setButtonText('Sending...');
        

        
        try {
            let response=await fetch("http://localhost:5000/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"Application/json;charset=utf-8",
                },
                body:JSON.stringify(formDetails),
            });
            setButtonText("Send");
            let result = await response.json()
            setFormDetails(formInitialDetails);
            if(result.code === 200){
                setStatus({success:true,message:"Message sent successfully!"});
            }else{
                setStatus({success:false,message:"Something went wrong, please try again!"});
            }
        }catch (error) {
            setStatus({ success: false, message: "Error occurred while sending message." });
        } finally {
            setButtonText("Send");
            setFormDetails(formInitialDetails); 
        }
    }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Me"/>
                    </Col>
                    <Col md={6}>
                        <h2>CONTACT ME</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name*" onChange={(e) => onFormUpdate('firstName',e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name*" onChange={(e) => onFormUpdate('lastName',e.target.value)} /> 
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No.*" onChange={(e) => onFormUpdate('phone',e.target.value)} /> 
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email*" onChange={(e) => onFormUpdate('email',e.target.value)} /> 
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Message*" onChange={(e) => onFormUpdate('message',e.target.value)}></textarea>
                                    
                                    <EmailModal
                                        ref={emailmodalRef}>
                                    </EmailModal>
                                    <button type="submit" className="submitButton"><span>{buttonText}</span>          <img src={sending} className="contact-button-img"/></button>
                                </Col>
                                
                                
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

            
        </section>
    )
}