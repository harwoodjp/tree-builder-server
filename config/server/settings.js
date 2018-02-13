const express = require("express")
const path = require ('path')
const bodyParser = require("body-parser")
const favicon = require("serve-favicon")

module.exports = app => {

	/* initialize dotenv */
	require('dotenv').config()

	/* set public/static path  */
	const clientFolder = path.join(__dirname).replace("config/server", "app/client");
	app.use(express.static(clientFolder))

	/* set view/template path */
	const viewsFolder = path.join(__dirname).replace("config/server", "app/views");
	app.set('views', viewsFolder)

	/* set template engine */
	require('lodash-express')(app, 'html'); 
	app.set('view engine', 'html');

	/* set body parser for post requests */
	app.use(bodyParser.json())

	/* set favicon 
	app.use(favicon(`${clientFolder}/favicon.ico`))
	*/
}
