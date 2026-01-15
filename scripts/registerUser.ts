import { TUser } from "@/types/user";
import axios from "axios";
// import { TUser } from "@/types/user";
export type UserData = {
  fullName: string;
  email: string;
  password?: string | null;
  role: string;
  phone?: number;
  photoURL?: string;
};

const registerUser = async (userData: TUser) => {
  try {
    const response = await axios.post("/api/register", userData);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
    throw new Error("An unexpected error occurred");
  }
};

export default registerUser;