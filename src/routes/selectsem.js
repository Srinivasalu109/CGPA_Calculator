import { useParams } from "react-router"
import { useHistory } from "react-router"
import "../customStyles/selectsem.css"
export const Selectsem = () => {
    const { type } = useParams()
    const history = useHistory()
    const semDetails = [
        [{ sem: "SEM-1", key: 1 }, { sem: "SEM-2", key: 2 }],
        [{ sem: "SEM-3", key: 3 }, { sem: "SEM-4", key: 4 }],
        [{ sem: "SEM-5", key: 5 }, { sem: "SEM-6", key: 6 }],
        [{ sem: "SEM-7", key: 7 }, { sem: "SEM-8", key: 8 }]
    ]
    const handleClick = (semNumber) => {
        if (type === "gpa") {
            setTimeout(()=>{
                history.push(`/gpa/${semNumber}`)
            },500)
        }
        else {
            setTimeout(()=>{
                history.push(`/cgpa/${semNumber}`)
            },500)
        }
    }
    return (<div className="body">
            <h3 className="head">{type} Calculator</h3>
            {
                semDetails.map((eachsem, year) =>
                    <div className="year">
                        <h3>Year {year + 1}</h3>
                        <div className="text">
                            {eachsem.map(each => { return (<div className="sem" onClick={() => handleClick(each.key)}><h6>{each.sem}</h6></div>) })}
                        </div>
                    </div>
                )
            }
    </div>)
}