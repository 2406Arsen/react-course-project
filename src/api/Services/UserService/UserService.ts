import { api } from "../../api"
import { User } from "./types";

class UserService {
    async getAllUsers() {
        try {
            const res = await api.get<User[]>('users')
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
}

const userService = new UserService() 
export default userService