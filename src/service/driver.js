import request from "./request";

const sub = "/control/web/api/";
class DriverService {
    fetchData() {
        return new Promise((resolve, reject) => {
            request.get(sub + "get-drivers/").then(r => {
                resolve(r.data)
            }).catch(err => reject(err))
        })
    }
}

export default new DriverService();
