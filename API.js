class CameraA {
  constructor(location) {
    this.location = location;
  }
  onDetect(callback) {
    callback();
  }
}

class TemperatureSensorA {
  constructor(location, threshold) {
    this.location = location;
    this.threshold = threshold;
  }
  onDetect(callback) {
    callback(this);
  }
}

class ThermalSensorB {
  constructor(position) {
    this.position = position;
  }
  triggerHeatSignature(process) {
    sensor = this.name;
    detection = "thermal";
    date = currentDate();
    process();
  } // Déclenche une donnée complexe json, voir ci
  dessous;
}
