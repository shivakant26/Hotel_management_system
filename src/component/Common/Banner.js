import { Container } from "react-bootstrap";

const Banner = ({className,title,subtitle}) =>{
    return(
        <>
        <div className={className}>
        <Container>
          <div className="about_text">
            <h2 className="page_title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </div>
        </Container>
        <div className="hotal_overlay"></div>
      </div>
        </>
    )
}

export default Banner;