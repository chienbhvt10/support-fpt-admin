"use client";
import { store } from "@/redux/store";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import ThemeConfig from "./ThemeConfig";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@/styles/main.scss";

const AppConfig = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <AntdRegistry>
        <ThemeConfig>{children}</ThemeConfig>
      </AntdRegistry>
    </Provider>
  );
};

export default AppConfig;
