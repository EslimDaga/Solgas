import cache from "../helpers/cache";
import request from "./request";

class AuthService {

    // login
    login(payload) {
        return new Promise((resolve, reject) => {
            request.post("/token/obtain/", payload).then(r => {
                this.fetchData(payload.username, r.data.access).then(res => {
                    const user = {
                        ...res,
                        token: r.data.access
                    };
                    cache.setItem("user", user)
                    resolve(user)
                })
            }).catch(err => reject(err));
        })
    }

    // logout
    logout() {
        cache.cleanAll();
    }

    fetchData(username, token) {
        return new Promise((resolve, reject) => {
            request.get(`/users/web/api/get-user/${username}/`, {
                headers: {
                    "Authorization": "JWT " + token
                }
            }).then(r => {
                resolve(r.data)
            }).catch(err => reject(err));
        })
    }

    // getCurrentUser
    getCurrentUser() {
        return cache.getItem("user");
    }
}

export default new AuthService();
