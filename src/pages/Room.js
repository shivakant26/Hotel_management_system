import { useParams } from "react-router-dom";

const Room = () =>{
   const params = useParams();
   console.log(123, params)
    return(
        <>
        <h3>{params.url}</h3>
        </>
    )
}

export default Room;