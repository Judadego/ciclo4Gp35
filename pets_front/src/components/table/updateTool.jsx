import { Link } from "react-router-dom";
import editar from "./editar.png";
import eliminar from "./eliminar.png";

function UpdateTool(props) {
    //props.path
    //props.id
    let url = props.path + "/update/" + props.id;
    return (
        <Link to={url}>
            <img src={editar} alt={"E"} width="20px" className="mx-1" />
        </Link>
    );
}

export default UpdateTool;
