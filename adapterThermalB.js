class AdapterThermalB {
  constructor(thermalSensorB) {
    this.thermalSensorB = thermalSensorB;
  }

  triggerHeatSignature(process) {
    this.thermalSensorB.triggerHeatSignature(process);
  }
}
