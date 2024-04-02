"use client";
import { ROUTE_PATH } from "@/constants/path";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Flex, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

  getItem("Users management", "user-management", <MailOutlined />, [
    getItem("User", ROUTE_PATH.USERS),
    getItem("Permission", ROUTE_PATH.PERMISSIONS),
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
  const route = useRouter();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={250}>
      <Flex style={{ padding: 16 }}>
        {!collapsed ? (
          <Image
            src="/images/fpt-logo.png"
            alt="fpt logo"
            width={220}
            height={90}
            objectFit="cover"
          />
        ) : (
          <Image
            src="/images/fpt-logo2.png"
            alt="fpt logo2"
            width={44}
            height={30}
            objectFit="cover"
          />
        )}
      </Flex>
      <Menu
        onClick={(item) => route.push(item.key)}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </Sider>
  );
};

export default LayoutSider;
