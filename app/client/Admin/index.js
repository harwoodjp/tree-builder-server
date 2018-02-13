import React from "react"
import ReactDOM from "react-dom"
import {  BrowserRouter as Router, Route, Link, browserHistory } from "react-router-dom"

import Admin from "./components/Admin"

ReactDOM.render(
	<Router history={ browserHistory} >
		<div>
        	<Route path = "/" component = { Admin } />
        </div>
    </Router>,
	document.getElementById("app")
);
