import triggerHeatSignature from "./API";

export default class AdapterThermalB {
  constructor(thermalSensorB) {
    this.thermalSensorB = thermalSensorB;
  }

  onDetect(callback) {
    this.thermalSensorB.triggerHeatSignature((data) => {
      const string_sensorB = JSON.stringify(data);
      callback("Temperature B", data.sensor, data.detection, data.date);
      console.log(string_sensorB);
    });
  }
}
