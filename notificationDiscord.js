class NotificationDiscord {
  constructor(name) {
    this.name = name;
    this.callbacks = [];
  }

  addEvent(callback) {
    const notif_discord = this.callbacks.push({ callback });
    console.log(notif_discord);
  }
}
