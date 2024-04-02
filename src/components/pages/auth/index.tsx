"use client";
import { Card, Divider, Flex, Typography } from "antd";
import LoginForm from "./LoginForm";

interface LoginPageProps {}

const LoginPage = (_: LoginPageProps) => {
  return (
    <Flex
      style={{ width: "100%", height: "100%" }}
      justify="center"
      align="center"
    >
      <Card style={{ width: 400, height: 500 }}>
        <Flex vertical={true} gap={"small"}>
          <Flex justify="center">
            <Typography.Title level={1}>Login</Typography.Title>
          </Flex>
          <Divider style={{ margin: 0 }} />
          <LoginForm />
        </Flex>
      </Card>
    </Flex>
  );
};

export default LoginPage;
