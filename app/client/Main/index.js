import React from "react"
import ReactDOM from "react-dom"
import {  BrowserRouter as Router, Route, Link, browserHistory } from "react-router-dom"

import Main from "./components/Main"

ReactDOM.render(
	<Router history={ browserHistory} >
		<div>
        	<Route path = "/" component = { Main } />
        </div>
    </Router>,
	document.getElementById("app")
);
