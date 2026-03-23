export default class Piece {
  constructor(nom) {
    this.nom = nom;
    this.capteurs = [];
    this.notifications = [];
  }

  Notification(notification) {
    this.notifications.push(notification);
    console.log(notification);
  }

  Capteur(capteur) {
    this.capteurs.push(capteur);
    console.log(capteur);

    capteur.onDetect((messageAlerte) => {
      this.notifications.forEach((notification) => {
        notification.addEvent(messageAlerte);
        console.log(messageAlerte);
      });
    });
  }
}
