import request from "./request";
const sub = "control/web/api/";

class Checkpoint {
    fetchData() {
        return new Promise((resolve, reject) => {
            request.get(`/${sub}get-checkpoints/`).then(r => {
                resolve(r.data)
            }).catch(err => reject(err))
        })
    }
}

export default new Checkpoint();