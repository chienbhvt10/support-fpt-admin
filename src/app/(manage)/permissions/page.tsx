import { Metadata } from "next";

interface PermissionsProps {}

export const metadata: Metadata = {
  title: "Permissions",
  description: "Permissions",
};

const Permissions = (_: PermissionsProps) => {
  return <>Permissions</>;
};

export default Permissions;
