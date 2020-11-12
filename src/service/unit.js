import request from "./request";
const sub = "/control/web/api/";
class UnitService {
  fetchData() {
    return new Promise((resolve, reject) => {
      request.get(sub + "get-units/").then(r => {
        resolve(r.data)
      }).catch(err => reject(err))
    })
  }
}

export default new UnitService();
