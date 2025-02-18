const admin = require('firebase-admin');
const serviceAccount = require('../common/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const addNotification = function (req, res) {
    // Extract message, title và topic từ request body
    const { message, title, topic } = req.body;

    const messagePayload = {
        notification: {
            title: title,
            body: message
        },
        topic: topic
    };

    admin.messaging().send(messagePayload)
        .then((response) => {
            console.log('Successfully sent message:', response);
            const notificationRef = db.collection('Notifications').doc();
            return notificationRef.set({
                message: message,
                title: title,
                time: new Date().toISOString(),
            });
        })
        .then(() => {
            res.send({ message: "Notification sent and saved successfully!" });
        })
        .catch((error) => {
            console.log('Error sending message:', error);
            res.status(500).send({ message: "Error sending notification", error: error.message });
        });
};

const getAllNotifications = function (req, res) {
    db.collection('Notifications')
        .get()
        .then(snapshot => {
            const notifications = [];
            snapshot.forEach(doc => {
                notifications.push({
                    id: doc.id,
                    Message: doc.data()
                });
            });
            res.send({ notifications });
        })
        .catch(error => {
            console.log('Error getting notifications:', error);
            res.status(500).send({ message: "Failed to retrieve notifications", error: error.message });
        });
};
const deleteNotification = function (req, res) {
    const notificationId = req.params.id;  // Lấy ID thông báo từ parameters của URL

    db.collection('Notifications').doc(notificationId).delete()
        .then(() => {
            res.send({ message: "Notification successfully deleted!" });
        })
        .catch(error => {
            console.log('Error deleting notification:', error);
            res.status(500).send({ message: "Failed to delete notification", error: error.message });
        });
};

const NotificationController = {
    addNotification, getAllNotifications, deleteNotification
}

module.exports = NotificationController;
