import React,{useState,useEffect,useRef, forwardRef, useImperativeHandle} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../images/ContactImage.jpg";
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

    
    const [isSending, setIsSending] = useState(false);
    const [imageAnimationClass, setImageAnimationClass] = useState('');
    //const [modalContent, setModalContent] = useState("");

    const EmailModal = forwardRef(({children},ref) => {
        const [emailOpen, setEmailOpen] = useState(false);
        const [modalMessage, setModalMessage] = useState("");

        useEffect(() => {
          }, [emailOpen]);

        useImperativeHandle(ref,()=>{
            return{
            open: (message="") => {
                setModalMessage(message); 
                setEmailOpen(true);
              },
            close:()=>{
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
                      <h1>Something Wrong!</h1>
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
            return; 
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formDetails.email)) {
            const message ="Please enter a valid email address.";
            setTimeout(() => emailmodalRef.current.open(message), 0);
            setStatus({success: false, message: "Please enter a valid email address."});
            return; 
        }

        if (!/^\+?[0-9]+$/.test(formDetails.phone)) {
          const message = "Please enter a valid phone number.";
          setTimeout(() => emailmodalRef.current.open(message), 0);
          setStatus({success: false, message: "Please enter a valid phone number."});
          return; 
      }

        setButtonText('Sending');
        setImageAnimationClass('sliding-image');

        
        try {
            let response=await fetch("https://jasonz.net/contact",{
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
            setImageAnimationClass('fading-in-image'); // 发送完成后触发淡入效果
            setFormDetails(formInitialDetails);
            setTimeout(() => setImageAnimationClass(''), 1000);
        }
    }

    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    function handleEmailBlur(e) {
      const email = e.target.value;
      if (!isValidEmail(email)) {
        onFormUpdate('email', '');
    
      }
    }

    function handlePhoneBlur(e) {
      const phone = e.target.value;
      if (!/^\+?[0-9]+$/.test(phone)) {
        onFormUpdate('phone', '');
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
                        <form onSubmit={handleSubmit} noValidate>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <div className="input-container">
                                      <div className="entryarea">
                                        <input type="text" value={formDetails.firstName}  onChange={(e) => onFormUpdate('firstName',e.target.value)} required/>
                                        <div className="labelline">First Name</div>
                                      </div>
                                    </div>
                                </Col>
                                <Col sm={6} className="px-1">
                                <div className="input-container">
                                      <div className="entryarea">
                                    <input type="text" value={formDetails.lastName}  onChange={(e) => onFormUpdate('lastName',e.target.value)} required/> 
                                    <div className="labelline">Last Name</div>
                                      </div>
                                    </div>
                                </Col>
                                <Col sm={6} className="px-1">
                                <div className="input-container">
                                      <div className="entryarea">
                                    <input type="tel" pattern="[0-9]*" value={formDetails.phone}  onChange={(e) => onFormUpdate('phone',e.target.value)} onBlur={handlePhoneBlur} required/> 
                                    <div className="labelline">Phone Number</div>
                                      </div>
                                    </div>
                                </Col>
                                <Col sm={6} className="px-1">
                                <div className="input-container">
                                      <div className="entryarea">
                                    <input type="email" value={formDetails.email}  onChange={(e) => onFormUpdate('email',e.target.value)} onBlur={handleEmailBlur} required/> 
                                    <div className="labelline">Email</div>
                                      </div>
                                    </div>
                                </Col>
                                <Col>
                                <Row className="align-items-center">
                                <Col md={12} className="px-1">
                                <div className="input-container-me">
                                      <div className="entryarea-me">
                                      <textarea row="6" value={formDetails.message} onChange={(e) => onFormUpdate('message',e.target.value)} required></textarea>
                                      <div className="labelline">Message</div>
                                      </div>
                                      </div>
                                </Col>
                                <Col md={12}>
                                <EmailModal
                                          ref={emailmodalRef}>
                                      </EmailModal>
                                      <div className="button-container">
                                        <button type="submit" className="submitButton"><span>{buttonText}</span>  <img src={sending} className={`contact-button-img ${imageAnimationClass}`} /></button>
                                      </div>
                                </Col>

                                </Row>
                                  
                                      
                                  
                                </Col>
                                
                                
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

            
        </section>
    )
}