import Piece from "./Piece.js";
import { CameraA, TemperatureSensorA, ThermalSensorB } from "./API.js";
import AdapterThermalB from "./adapterThermalB.js";
import NotificationDiscord from "./notificationDiscord.js";
import NotificationMail from "./notificationMail.js";
import NotificationLog from "./notificationLog.js";

const salle = new Piece("Salon Principal");

// const notiflog = new NotificationLog("log");
// const notifDiscord = new NotificationDiscord("Serveur_Securite_Discord");
// const notifMail = new NotificationMail("admin@batiment.fr");

// salle.Notification(notiflog);
// salle.Notification(notifDiscord);
// salle.Notification(notifMail);

const camera = new CameraA("cuisine");
const thermalSensor = new ThermalSensorB({
  sensor: "name",
  detection: "cuisine",
  date: "23/03/2026",
});
const adapter = new AdapterThermalB(thermalSensor);

salle.Capteur(camera);
salle.Capteur("test adapter", adapter);
