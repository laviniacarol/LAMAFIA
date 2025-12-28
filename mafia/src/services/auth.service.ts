import api from "./api";

export async function login(email: string, password: string) {
  const response = await api.post("/login", {
    email,
    password,
  });

  return response.data;
}

export async function register(data: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await api.post("/register", data);
  return response.data;
}
