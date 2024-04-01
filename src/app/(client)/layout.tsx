import { FC, PropsWithChildren } from "react";

const ClientLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div> Client layout{children}</div>;
};

export default ClientLayout;
