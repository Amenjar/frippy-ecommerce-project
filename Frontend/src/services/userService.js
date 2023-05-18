import http from "./interceptor/Axiosinterceptor";
export default class UserService {
    create(data) {
        return http.post("/user/create", data);
    }
    getAll() {
        console.log("liste de users")
        return http.get("/user/GetAllUsers");
    }
     getById(id) {
        console.log(" user by id")
        return http.get("/user/GetUserById/"+id);
    }
}