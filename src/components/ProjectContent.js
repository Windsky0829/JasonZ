
export const ProjectContent = ({ description, imgUrl }) =>{
    return(
        <section className="project-content">
            <div className="project-content-text">
                <div className="project-content-des">
                    <span>{description}</span>
                </div>
            </div>
        </section>
    )
}

