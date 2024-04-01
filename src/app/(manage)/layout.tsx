import CommonLayout from "@/components/layouts/common";
import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return <CommonLayout>{children}</CommonLayout>;
};

export default MainLayout;
