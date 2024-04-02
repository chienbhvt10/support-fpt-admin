"use client";
import { ROUTE_PATH } from "@/constants/path";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  type FormProps,
  Image,
  Input,
  Space,
  Typography,
} from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FieldType = {
  username?: string;
  password?: string;
};

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    console.log("Success:", values);
    setTimeout(() => {
      setLoading(false);
      route.push(ROUTE_PATH.HOME);
    }, 1500);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>
      <Form.Item>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            loading={loading}
          >
            Log in
          </Button>
          <Space>
            <Typography.Text>Or</Typography.Text>
            <Typography.Link>register now!</Typography.Link>
          </Space>
          <Button
            type="default"
            htmlType="submit"
            style={{ width: "100%" }}
            icon={
              <Image
                src="/images/google.png"
                alt="Google logo"
                width={20}
                height={20}
              />
            }
          >
            Log in with google
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
