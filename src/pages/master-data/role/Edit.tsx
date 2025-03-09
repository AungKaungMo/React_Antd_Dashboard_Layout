import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import UseFormSubmit from "../../../hooks/use-form-submit";
import { RoleListType, RoleUpdateType } from "../../../types/role";
import { useUpdateRole } from "../../../hooks/use-role";
import { usePermission } from "../../../hooks/use-permission";
import { PermissionListType } from "../../../types/permission";

type PropsType = {
    handleBoxOpen: () => void,
    open: boolean,
    role?: RoleListType
}

const Edit = ({handleBoxOpen, open, role} : PropsType) => {
  const [form] = useForm();
  const { mutate: update , isPending: updatePending } = useUpdateRole()
  const { data: permissions, isPending } = usePermission(1, 100000);
  const {handleFormSubmit} = UseFormSubmit();

  const onFinish = (values: any) => {

    const payload = {...values, id: role?.id};
    handleFormSubmit({
      apiCall: update,
      form: form,
      successText: "Role Updated successfully.",
      errorText: "Role updation failed.",
      errorName: "name",
      callbackFun: handleBoxOpen, // This will close the modal after success
    })(payload); // Pass values from the form
  };

  return (
    <>
      <Modal
        title="Edit Role"
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
              name: role?.name,
              permissionIds: role?.permissions?.map(role => role.id)
            }}
        >
            <Row >
              <Col xs={24}>
                <Form.Item<RoleUpdateType>
                  label="Role Name"
                  name="name"
                  rules={[
                    { required: true, message: 'Please input your role name' },
                    { type: "string", message: "The input is not valid role name!"}
                  ]}
                >
                  <Input className="w-full" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item<RoleUpdateType>
                  label="Role Name"
                  name="permissionIds"
                  rules={[
                    { required: true, message: 'Please input your permission' },
                    { type: "array", message: "The input is not valid permission!"}
                  ]}
                >
                      <Select
                        mode="multiple"
                        placeholder="Select permission"
                        className="w-full"
                        loading={isPending}
                        options={permissions?.data?.map((item : PermissionListType) => ({
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
