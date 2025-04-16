"use client";

import { toast } from "sonner";
import validateCredentials from "./validateCredentials";

function handleLogin(
  event: React.FormEvent<HTMLFormElement>,
  login: (token: string) => void,
) {
  event.preventDefault();

  try {
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email")?.toString().trim() || "";
    const password = formData.get("password")?.toString() || "";

    if (!validateCredentials({ email, password })) {
      toast.error("Invalid email or password. Please try again.");
      return;
    }

    const tokenPayload = { email, password };
    const token = btoa(JSON.stringify(tokenPayload));

    document.cookie = [
      `wisehub.token=${token}`,
      "path=/",
      "max-age=86400",
      "Secure",
      "SameSite=Strict",
    ].join("; ");

    toast.success("Login successful", {
      description: "You are now logged into your account.",
    });

    login(token);
  } catch (error) {
    console.error("Login error:", error);
    toast.error("Something went wrong. Please try again later.");
  }
}

export default handleLogin;
