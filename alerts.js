// alerts.js - Manages security alerts and notifications
function AlertUser(title, message) {
    app.CreateNotification({ title: title, message: message });
}
