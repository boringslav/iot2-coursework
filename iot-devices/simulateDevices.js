const { WebSocket } = require("ws");

const connect = () => {
  const socket = new WebSocket("ws://localhost:9000");

  /**
   * @description A function that simulates the IoT devices and sends the data to the server
   * Each second the new data is send to the server
   */
  setInterval(() => {
    /**
     * @description A simulated device for the water temperature
     * @example The possible values are -1, 0, 1
     *  -1 - the water is too cold
     *  0 - the water temperature is optimal
     *  1 - the water is too hot
     */
    const temperatureDeviceData = Math.floor(Math.random() * 2 - 1);

    /**
     * @description A simulated device for the oxygen levels in the water
     * @example The possible values are -1, 0, 1
     *  -1 - the oxygen level is too low
     *  0 - the oxygen level is optimal
     *  1 - the oxygen level is too high
     */
    const oxygenDeviceData = Math.floor(Math.random() * 2 - 1);

    /**
     * @description A simulated device for the water pollution levels
     * @example The possible values are 0, 1
     *  0 - the water is not polluted
     * 1 - the water is polluted
     */
    const waterPollutionDeviceData = Math.floor(Math.random() * 2);

    /**
     * @description Send the data to the server
     */
    socket.send(
      JSON.stringify({
        temperatureDeviceData,
        waterPollutionDeviceData,
        oxygenDeviceData,
      })
    );
  }, 1000);

  socket.on("close", () => {
    setTimeout(() => {
      connect();
    }, 4000);
  });
  socket.on("error", (e) => {
    console.log(e);
  });
};
connect();
