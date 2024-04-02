import { RootStateApp } from "@/redux/store";
import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";

const ThemeConfig = ({ children }: PropsWithChildren) => {
  const theme = useSelector((rootState: RootStateApp) => rootState.theme);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.primary,
        },
        components: {
          Divider: {
            margin: 0,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeConfig;
