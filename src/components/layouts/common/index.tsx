"use client";
import { Layout, theme } from "antd";
import { PropsWithChildren, useState } from "react";
import LayoutHeader from "./Header";
import LayoutSider from "./LayoutSider";

const { Content } = Layout;

const CommonLayout = ({ children }: PropsWithChildren) => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onCollapedSider = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LayoutSider collapsed={collapsed} />
      <Layout>
        <LayoutHeader collapsed={collapsed} onCollapseSider={onCollapedSider} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CommonLayout;
