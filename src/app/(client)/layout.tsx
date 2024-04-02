import AuthLayout from "@/components/layouts/auth";
import { FC, PropsWithChildren } from "react";

const ClientLayout: FC<PropsWithChildren> = ({ children }) => {
  return <AuthLayout> {children}</AuthLayout>;
};

export default ClientLayout;
