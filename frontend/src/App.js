import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import RedirectPage from "./pages/RedirectPage";


function App() {
    return (
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/:code" component={RedirectPage}/>
        </Router>
    )
}

export default App;
