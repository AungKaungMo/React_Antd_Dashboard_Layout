import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import UseFormSubmit from "../../../hooks/use-form-submit";
import { RoleListType } from "../../../types/role";
import { useRole } from "../../../hooks/use-role";
import { UserListType, UserUpdateType } from "../../../types/user";
import { useUpdateUser } from "../../../hooks/use-user";

type PropsType = {
    handleBoxOpen: () => void,
    open: boolean,
    user?: UserListType
}

const Edit = ({handleBoxOpen, open, user} : PropsType) => {
  const [form] = useForm();
  const { mutate: update , isPending: updatePending } = useUpdateUser()
  const { data: roles, isPending } = useRole(1, 100000);
  const {handleFormSubmit} = UseFormSubmit();

  const onFinish = (values: any) => {

    const payload = {...values, id: user?.id};
    handleFormSubmit({
      apiCall: update,
      form: form,
      successText: "User Updated successfully.",
      errorText: "User updation failed.",
      errorName: "name",
      callbackFun: handleBoxOpen, // This will close the modal after success
    })(payload); // Pass values from the form
  };

  return (
    <>
      <Modal
        title="Edit User"
        open={open}
        onOk={handleBoxOpen}
        onCancel={handleBoxOpen}
        footer={[
         <Button  key="submit" 
         loading={updatePending} 
         type="primary" onClick={()=>form.submit()}>
            Update
          </Button>
        ]}
      >
        <Form
            layout="vertical"
            className="mt-5"
            onFinish={onFinish}
            form={form}
            initialValues={{
              name: user?.name,
              roles: user?.roles?.map(role => role.id)
            }}
        >
            <Row >
              <Col xs={24}>
                <Form.Item<UserUpdateType>
                  label="User Name"
                  name="name"
                  rules={[
                    { required: true, message: 'Please input your name' },
                    { type: "string", message: "The input is not valid name!"}
                  ]}
                >
                  <Input className="w-full" disabled />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item<UserUpdateType>
                  label="Role Name"
                  name="roles"
                  rules={[
                    { required: true, message: 'Please input your permission' },
                    { type: "array", message: "The input is not valid permission!"}
                  ]}
                >
                      <Select
                        mode="multiple"
                        placeholder="Select role"
                        className="w-full"
                        loading={isPending}
                        options={roles?.data?.map((item : RoleListType) => ({
                            value: item.id,
                            label: `${item.name}`
                        }))}
                    />
                </Form.Item>
              </Col>
            </Row>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
