import { Button, Flex, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { ROUTE_PATH } from "@/constants/path";

interface HeaderProps {
  onCollapseSider: () => void;
  collapsed: boolean;
}

const LayoutHeader = (props: HeaderProps) => {
  const { onCollapseSider, collapsed } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();

  const onLogout = () => {
    router.push(ROUTE_PATH.LOGIN);
  };

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Flex
        justify="space-between"
        align="center"
        style={{ height: "100%", padding: "0 16px" }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onCollapseSider}
          style={{
            fontSize: "16px",
          }}
        />
        <Button onClick={onLogout} icon={<LogoutOutlined />}></Button>
      </Flex>
    </Header>
  );
};

export default LayoutHeader;
