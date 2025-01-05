import {Button, Col, Flex, Form, Input, message, Row, Typography} from "antd"
import { LoginType } from "../../types/auth"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/route";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = (values: any) => {
      console.log('Success:', values);
      setLoading(true);
  
      message.open({
        type: 'success',
        content: 'Login successful',
      });
  
      setTimeout(() => {
        navigate(ROUTES.dashboard);
      }, 5000);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    
  return (
    <>
    <div>
        <Typography className="font-semibold text-2xl mb-10">Login To Your Account</Typography>
    </div>
    <Form
            name="login-form"
            layout="vertical"
            className="w-6/12"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{
              email: 'demo@email.com',
              password: 'demo123',
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
          >
            <Row gutter={[8, 0]}>
              <Col xs={24}>
                <Form.Item<LoginType>
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email' },
                  ]}
                >
                  <Input className="w-full"/>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item<LoginType>
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Flex align="center" justify="space-between">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="middle"
                  loading={loading}
                >
                  Continue
                </Button>
                <Link to="/forgot" >Forgot password?</Link>
              </Flex>
            </Form.Item>
          </Form>
    </>
  )
}

export default Login