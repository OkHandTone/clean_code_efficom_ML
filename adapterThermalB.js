class AdapterThermalB {
  constructor(thermalSensorB) {
    this.thermalSensorB = thermalSensorB;
  }

  oneDetect(callback) {
    //lecture du thermalsensor en json
    const data_json = this.thermalSensorB.callback();
    const data = JSON.parse(data_json);
    callback("Temperature B", data.sensor, data.detection, data.date);
  }

  // triggerHeatSignature(process) {
  //   const test = this.thermalSensorB.triggerHeatSignature(process);
  //   console.log(test);
  //   return test;
  // }
}
