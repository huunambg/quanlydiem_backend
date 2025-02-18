const express = require('express')
const router = express.Router()
const NotificationController = require("../controller/notification.controller")
router.post("/add-notification", NotificationController.addNotification)
router.delete("/delete-notification/:id", NotificationController.deleteNotification)
router.get("/get-all-notification", NotificationController.getAllNotifications)
module.exports = router
