const axios = require("axios");
// const baseUrl = "http://localhost:3000";
const baseUrl = "https://apac-relocation-api.herokuapp.com";

class LeadsAPI {
  static async getAll() {
    return await axios.get(`${baseUrl}/leads`);
  }
}

export default LeadsAPI;
