import MyMapComponent from "../component/GoogleMap";

const Contact = () =>{
    return(
        <>
        <div className="contact_map_section">
            <MyMapComponent isMarkerShown />
        </div>
        </>
    )
}

export default Contact;