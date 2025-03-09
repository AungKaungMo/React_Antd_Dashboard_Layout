import { Input, Modal, Button, Form, Row, Col, Select } from "antd";
import { usePermission } from "../../../hooks/use-permission";
import UseFormSubmit from "../../../hooks/use-form-submit";
import { RoleCreateType } from "../../../types/role";
import { useCreateRole } from "../../../hooks/use-role";
import { PermissionListType } from "../../../types/permission";

type PropsType = {
    handleCreateBoxOpen: () => void,
    createOpen: boolean,
}

const Create = ({createOpen, handleCreateBoxOpen} : PropsType) => {
    const { data: permissions, isPending } = usePermission(1, 100000);
    const { mutate: create, isPending: createPending } = useCreateRole();
    const [form] = Form.useForm();
    const {handleFormSubmit} = UseFormSubmit();
  
    const onFinish = (values: any) => {
        handleFormSubmit({
          apiCall: create,
          form: form,
          successText: "Role Created successfully.",
          errorText: "Role creation failed.",
          errorName: "name",
          callbackFun: handleCreateBoxOpen, // This will close the modal after success
        })(values); // Pass values from the form
      };

    return (
    <>
      <Modal
        title="Create Role"
        open={createOpen}
        onOk={handleCreateBoxOpen}
        onCancel={handleCreateBoxOpen}
        footer={[
         <Button  key="submit" loading={createPending} type="primary" onClick={()=>form.submit()}>
            Create
          </Button>
        ]}
      >
        <Form
            layout="vertical"
            className="mt-5"
            onFinish={onFinish}
            form={form}
        >
            <Row >
              <Col xs={24}>
                <Form.Item<RoleCreateType>
                  label="Role Name"
                  name="name"
                  rules={[
                    { required: true, message: 'Please input your role name' },
                    { type: "string", message: "The input is not valid role name!"}
                  ]}
                >
                  <Input className="w-full"/>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item<RoleCreateType>
                  label="Permission Name"
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


}

export default Create