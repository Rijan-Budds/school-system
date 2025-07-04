import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <nav>
                <Link to="/login">login</Link>
                
                <Link to="/student">Student</Link>
                <Link to="/teacher">Teacher</Link>
            </nav>
        <p>this is the home page</p>
        </div>
    );
}