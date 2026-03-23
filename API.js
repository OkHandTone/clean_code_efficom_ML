export class CameraA {
  constructor(location) {
    this.location = location;
  }
  onDetect(callback) {
    callback("location: " + this.location);
  }
}

export class TemperatureSensorA {
  constructor(location, threshold) {
    this.location = location;
    this.threshold = threshold;
  }
  onDetect(callback) {
    callback("temperature A", this);
  }
}

export class ThermalSensorB {
  constructor(position) {
    this.position = position;
  }
  triggerHeatSignature(process) {
    const data_json = {
      sensor: this.name,
      detection: "thermal",
      date: new Date(),
    };
    process(data_json);
  } // Déclenche une donnée complexe json, voir ci
  dessous;
}
