function saveSettings({notification, color = "crimson"}) {
    console.log(color);
    console.log(notification);
}

saveSettings({
    notification: {
        follow: true,
        alert: true,
        mkt: false
    },
    color: {
        theme: "blue"
    }
});