"use client";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

interface LayoutSiderProps {
  collapsed: boolean;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),

  getItem("Users management", "User Management", <MailOutlined />, [
    getItem("User", "5"),
    getItem("Permission", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),

    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

const LayoutSider = (props: LayoutSiderProps) => {
  const { collapsed } = props;

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={250}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </Sider>
  );
};

export default LayoutSider;
