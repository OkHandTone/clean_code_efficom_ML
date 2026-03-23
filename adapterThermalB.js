class AdapterThermalB {
  constructor(thermalSensorB) {
    this.thermalSensorB = thermalSensorB;
  }

  triggerHeatSignature(process) {
    const test2 = this.thermalSensorB.triggerHeatSignature(process);
    console.log(test2);
    return test2;
  }
}
