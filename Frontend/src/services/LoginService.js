import http from "./interceptor/Axiosinterceptor"
export const loginApi = (data) => {
    return http.post("/user/login", data)
}