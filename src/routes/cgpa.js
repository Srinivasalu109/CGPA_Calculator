// import { useEffect, useState } from "react"
import { useParams } from "react-router"
import "../customStyles/cgpa.css"
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
const useStyles = makeStyles(theme => ({
    textfield: {
        borderBottom: "4px solid #1763d4",
        color: "white"
    },
    input: {
        color: "white"
    }
}))
// const formDetails = {
//     sem1: ' ', sem2: ' ', sem3: ' ', sem4: ' ', sem5: ' ', sem6: ' ', sem7: ' ', sem8: ' ',
// }
export const Cgpa = () => {
    const classes = useStyles()
    // const[id,setId]=useState(0)
    const [result, setResult] = useState(' ')
    const { semNumber } = useParams()
    const semArr = Array(parseInt(semNumber)).fill(" ");
    const [semArray, setSemArray] = useState(semArr)
    const numberOfTextfield = Array(parseInt(semNumber)).fill(" ")


    const handleChange = (index, e) => {
        // console.log(e.target.value)
        // if (parseInt(e.target.value) > 10) {
        //     // alert("enter valid GPA")
        //     return;
        // }
        semArray[index] = parseInt(e.target.value)
    }

    const calculate = () => {
        console.log("ss")
        let sum = 0
        let sem = semNumber
        const isFilled = semArray.filter(eachSem => (eachSem!== " " && !isNaN(eachSem)))
        console.log(isFilled)
        console.log(NaN===NaN)
        if (isFilled.length === semArray.length) {
            const isValid = isFilled.filter(sem => sem <= 10)
            if (isValid.length === semArray.length) {

                for (let i = 0; i < semArray.length; i++) {
                    sum += semArray[i]
                }
                const total = sum / semNumber
                setResult(total)
            }
            else {
                var x = document.getElementById("snackbar1");
                x.className = "show1";
                setTimeout(function () { x.className = x.className.replace("show1", ""); }, 3000);
            }
        }
        else {
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        }
    }
    return (<div className="background1">
        <div className="frame">
            {
                numberOfTextfield.map((textfield, index) => <div key={index}>
                    <TextField
                        required
                        type="number"
                        name={`sem${index + 1}`}
                        id={index}
                        label={`Enter Your Sem-${index + 1} GPA`}
                        className={classes.textfield}
                        InputLabelProps={{
                            style: {
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                width: '100%',
                                color: 'green'
                            }
                        }}
                        inputProps={{
                            className: classes.input
                        }}
                        onChange={(e) => handleChange(index, e)}
                    />
                </div>)
            }

            <h3 className="CGPAcalc" type="submit" onClick={calculate}>Calculate</h3>
            <h3>{result}</h3>
            {semNumber === "1" ? <div id="snackbar">Please Enter Your SEM-1 GPA</div> : <div id="snackbar">All fields need to  filled</div>}
            <div id="snackbar1">GPA houble 10 or below 10</div>


        </div>

    </div>)
}