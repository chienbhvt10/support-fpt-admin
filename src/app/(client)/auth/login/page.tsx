import LoginPage from "@/components/pages/auth";
import { Metadata } from "next";

interface LoginProps {}

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

const Login = (_: LoginProps) => {
  return <LoginPage />;
};

export default Login;
