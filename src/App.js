import { BrowserRouter, Route } from "react-router-dom";
import {Home} from "./routes/home"
import { Cgpa } from "./routes/cgpa";
import { Gpa } from "./routes/gpa";
import { Selectsem } from "./routes/selectsem";
export const App = () => {
    return (<BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/selectsem/:type" exact component={Selectsem} />
        <Route path="/gpa/:semNumber" exact component={Gpa} />
        <Route path="/cgpa/:semNumber" exact component={Cgpa} />
    </BrowserRouter>)
}