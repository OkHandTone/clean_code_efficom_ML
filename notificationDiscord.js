export default class NotificationDiscord {
  constructor(name) {
    this.name = name;
  }

  addEvent(message) {
    console.log("name", this.name, message);
  }
}
