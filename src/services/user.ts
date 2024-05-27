import { UserEntity } from "@/types/user";
import axios from "axios";

export const createUser = async (data: Omit<UserEntity, "id">) => {
    console.log(data)
    const response = await axios.post("http://localhost:3333/users", data);
    console.log(response.data)
    return response.data;
}