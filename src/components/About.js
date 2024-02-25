import back from "../images/background2.png"

export const About = () =>{

    return(
        <section className="about" id="abouts">
            <div className="about-bx">
                <h2>ABOUT</h2>
                <p>SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING </p>
            </div>
            <img className="background-image-about" src={back} alt="Image" />
        </section>
    )
}