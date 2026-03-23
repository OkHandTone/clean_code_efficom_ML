export default class Piece {
  constructor(nom) {
    this.nom = nom;
    this.capteurs = [];
    this.notifications = [];
  }

  Notification(notification) {
    this.notifications.push(notification);
  }

  Capteur(capteur) {
    this.capteurs.push(capteur);

    capteur.onDetect((messageAlerte) => {
      this.notifications.forEach((notification) => {
        notification.addEnvent(messageAlerte);
      });
    });
  }
}
