const follow = "yes";
const alert = "no";

const settings = {
    notifications: {
        follow,
        alert
    }
}

const {notifications} = settings;
console.log(notifications.follow);
console.log(notifications.alert);