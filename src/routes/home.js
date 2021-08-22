import "../customStyles/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router";
export const Home = () => {
    const history = useHistory()
    return (
        <div>
            <div className="background">
                <h3>AU Calculator</h3>

                <div onClick={() => {
                    setTimeout(() => {
                        history.push(`/selectsem/${"gpa"}`)
                    }, 500);
                }}
                    className="centerItems">
                    <h3 className="header">
                        GPA
                    </h3>
                    <h3>
                        calculator
                    </h3>
                </div>

                <div onClick={() => { 
                    setTimeout(() => {
                        history.push(`/selectsem/${"cgpa"}`)
                    }, 500);
                   }} className="centerItems">
                    <h3 className="header">
                        CGPA
                    </h3>
                    <h3>
                        calculator
                    </h3>
                </div>
                <h3>Grade Reference</h3>
                <div className="grid">
                    <h6>O=91-100</h6>
                    <h6>A+=81-90</h6>
                    <h6>A=71-80</h6>
                    <h6>B+=61-70</h6>
                    <h6>B=51-60</h6>
                    <h6>RA=below 50</h6>
                </div>
            </div>
        </div>)
}