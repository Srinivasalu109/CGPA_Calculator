import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getSemdetails } from "../semdetails/getSemdetails"
import "../customStyles/gpa.css"
export const Gpa = () => {
    // const no_of_sub = [8, 8, 9, 9, 9, 9, 8, 3]
    const [result, setResult] = useState(' ')
    const [subjects, setSubjects] = useState([])
    // var selectedSubjects = [" ", " ", " ", " ", " ", " ", " ", " "," "]
    const { semNumber } = useParams()
    const [credits, setCredits] = useState([])
    const [selectedSubjects, setSelectedSubjects] = useState([])
    console.log(selectedSubjects)

    const handleInput = (index, value) => {
        selectedSubjects[index] = value
        // console.log(selectedSubjects)

    }
    const calculate = () => {
        let sum = 0
        let totalCredits = 0
        let total
        const isFilled = selectedSubjects.filter(sub => sub !== " ")
        if (isFilled.length === selectedSubjects.length) {
            for (let i = 0; i < selectedSubjects.length; i++) {
                sum += selectedSubjects[i] * credits[i]
                totalCredits += credits[i]
            }
            console.log("how")
            total = sum / totalCredits
            var element = document.getElementById("scroll-bottom");
            element.scrollTop = element.scrollHeight;
            setResult(" Your GPA is:" + total)
        }
        else {
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        }
    }
    useEffect(() => {
        const FilterCredits = getSemdetails(semNumber).map(sub => sub.credits)
        const selectedSubjects = Array(parseInt(FilterCredits.length)).fill(" ")
        setSubjects(getSemdetails(semNumber))
        setCredits(FilterCredits)
        setSelectedSubjects(selectedSubjects)
    }, [])
    return (<div id="scroll-bottom">
        <div className="gpaheader">
            <h3 className="GPAheader">
                Sem {semNumber} GPA
            </h3>
            {
                console.log(selectedSubjects)
            }
            {
                subjects.map((sub, index) => <div className="subject">
                    <div className="center" key={index}>
                        <h4 className="subname">{sub.subname}</h4>
                        <h4 className="subcode">{sub.subcode}</h4>
                        <h5 className="credits">Credits  {sub.credits}</h5>
                        <div className="inputFields" >
                            <div>
                                <input type="radio" name={sub.subname} value={10} onChange={() => handleInput(index, 10)} /><label>O</label>
                            </div>
                            <div>
                                <input type="radio" name={sub.subname} value={10} onChange={() => handleInput(index, 9)} /><label>A+</label>
                            </div>
                            <div>
                                <input type="radio" name={sub.subname} value={10} onChange={() => handleInput(index, 8)} /><label>A</label>
                            </div>
                            <div>
                                <input type="radio" name={sub.subname} value={10} onChange={() => handleInput(index, 7)} /><label>B+</label>
                            </div>
                            <div>
                                <input type="radio" name={sub.subname} value={10} onChange={() => handleInput(index, 6)} /><label>B</label>
                            </div>
                            <div>
                                <input type="radio" name={sub.subname} value={10} onChange={() => handleInput(index, 5)} /><label>RA</label>
                            </div>

                        </div>
                    </div>

                </div>)
            }
            <div className="calc" onClick={calculate}>
                Calculate
            </div>
            <h3 className="result">{result}</h3>
            <div id="snackbar">All feilds need to fill</div>
        </div>


    </div>)
}