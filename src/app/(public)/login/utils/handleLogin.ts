"use client";

import { toast } from "sonner";
import validateCredentials from "./validateCredentials";

function handleLogin(
  event: React.FormEvent<HTMLFormElement>,
  login: (token: string) => void,
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const loginData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!validateCredentials(loginData)) {
    toast.error("Email or password is incorrect! Please try again.");
    return;
  }

  const token = btoa(
    JSON.stringify({
      email: loginData.email,
      password: loginData.password,
    }),
  );

  document.cookie = `wisehub.token=${token}; path=/; max-age=86400; Secure; SameSite=Strict`;

  toast.success("Login successful!");
  login(token);
}

export default handleLogin;
