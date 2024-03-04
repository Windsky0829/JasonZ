import {Col} from "react-bootstrap"
import { ProjectContent } from "./ProjectContent";
import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle  } from "react";
import closeicon from "../images/icons8-close-64.png"
import { motion,AnimatePresence } from "framer-motion";

export const ProjectCard=({title,description,content,contentType,imgUrl,imgBack,imgShowCase,videoUrl})=>{
  
    const ProjectModal=forwardRef(({children},ref) => {
      const [open, setOpen] = useState(false);
      
      useImperativeHandle(ref,()=>{
        return{
          open:()=>setOpen(true),
          close:()=>setOpen(false)
        }
      })

      const handleBackdropClick = () => {
        setOpen(false);
      };
    
      const handleModalContentClick = (event) => {
        event.stopPropagation(); 
      };

      return(
        <AnimatePresence>
          {open && (
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
            className="modal-backdrop"
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
          onClick={handleModalContentClick}
          className="modal-content-wrapper">
              <button onClick={()=>setOpen(false)} className="modal-exit-button">
                  <img src={closeicon}/>
              </button>
              <div>
                <div className="img-with-mask">
                  <img src={imgBack} alt="Background"/>
                  <h1>{title}</h1>
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
              className="modal-content">
                {children}
                
                
              </motion.div>
              
          </motion.div>
            </>
            
          )}
        </AnimatePresence>
      );

    });


    const modalRef=useRef()

    return(
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx" onClick={()=>modalRef.current.open()}>
                <img src={imgUrl} alt="project cover" className="proj-img"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                <ProjectModal
                ref={modalRef}>
                    <ProjectContent 
                            contentType={contentType}
                            content={content}
                            imgShowCase={imgShowCase}
                            videoUrl={videoUrl}
                        />
                </ProjectModal>

            </div>
        </Col>


    )
}