import { Layout } from "antd";
import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <Layout style={{ width: "100%", height: "100vh" }}>{children}</Layout>;
};

export default AuthLayout;
