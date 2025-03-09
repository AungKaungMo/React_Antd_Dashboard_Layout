import {Button, Col, Flex, Form, Input, message, Row, Typography} from "antd"
import { LoginType } from "../../types/auth"
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/route";
import { useLogin } from "../../hooks/use-auth";
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    // const { mutate: login, isPending } = useLogin();
    const [form] = Form.useForm();

    const [isLoading, setIsLoading] = useState(false);

    const onFinish = async (values: any) => {
      setIsLoading(true)
      
      setTimeout(() => {
        message.open({
                type: 'success',
                content: 'Login successful',
              });
              setIsLoading(false)
              navigate(ROUTES.dashboard);
      }, 2000);
      // login(values, {
      //   onSuccess: () => {
      //     message.open({
      //       type: 'success',
      //       content: 'Login successful',
      //     });
      //     navigate(ROUTES.dashboard);
      //   },
      //   onError: (error: any) => {
      //     // console.log(error?.response?.data?.data, 'error')
      //     if(error?.response?.data?.data) {
      //       form.setFields([
      //         {
      //           name: "emp_id",
      //           errors: [error?.response?.data?.data],
      //         },
      //       ]);
      //       // setCustomErrorFields(error.response.data.data || {})
      //     }else {
      //       message.open({
      //         type: 'error',
      //         content: 'Login failed',
      //       })
      //     }
      //   }
      // })
    };
    
  return (
    <>
    <div>
        <Typography className="font-semibold text-2xl mb-10">Login To Your Account</Typography>
    </div>
    <Form
      form={form}
            name="login-form"
            layout="vertical"
            className="w-6/12"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{
              emp_id: '',
              password: '',
              remember: true,
            }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
          >
            <Row gutter={[8, 0]}>
              <Col xs={24}>
                <Form.Item<LoginType>
                  label="Employee ID"
                  name="emp_id"
                  rules={[
                    { required: true, message: 'Please input your employee id' },
                    { type: "string", message: "The input is not valid employee id!"}
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
                  // loading={isPending}
                  loading={isLoading}
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