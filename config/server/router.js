const rest_controller = require("../../app/controllers/RestController")

module.exports = app => {
	app.get('/api/tree', rest_controller.index)
}