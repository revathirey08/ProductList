import {Link} from "react-router-dom";

function NotFound(){
    return(
        <>
        <h2> ERROR 404 PAGE NOT FOUND</h2>
        <Link className="btn btn-primary" to="/">Home</Link>
        </>
    );

}
export default NotFound;