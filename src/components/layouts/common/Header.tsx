import { Button, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

interface HeaderProps {
  onCollapseSider: () => void;
  collapsed: boolean;
}

const LayoutHeader = (props: HeaderProps) => {
  const { onCollapseSider, collapsed } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onCollapseSider}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};

export default LayoutHeader;
