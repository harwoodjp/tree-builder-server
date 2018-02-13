const index_controller = require("../../app/controllers/IndexController"),
	admin_controller = require("../../app/controllers/AdminController")

module.exports = app => {
	app.get('/', index_controller.index),
	app.get('/admin', admin_controller.index),
	app.get('*', index_controller.index)
}