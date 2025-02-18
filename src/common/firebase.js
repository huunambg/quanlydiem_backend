const firebase = require('firebase/app');
require('firebase/database');

const firebaseConfig = {
  apiKey: "AIzaSyAOnH5jFehvNy1iFS-58itvdV0Y3b-_dV0", // Thay thế bằng apiKey thực tế của bạn
  authDomain: "quanlydiem-f1cc3.firebaseapp.com",
  databaseURL: "https://quanlydiem-f1cc3.firebaseio.com",
  projectId: "quanlydiem-f1cc3",
  storageBucket: "quanlydiem-f1cc3.appspot.com",
  messagingSenderId: "891164179358", // Thay thế bằng senderId thực tế của bạn
  appId: "1:891164179358:android:5af461668d50ced6f7b48f", // Thay thế bằng appId thực tế của bạn
  clientEmail: "firebase-adminsdk-fbsvc@quanlydiem-f1cc3.iam.gserviceaccount.com", // Thêm email của client
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

module.exports = database;
