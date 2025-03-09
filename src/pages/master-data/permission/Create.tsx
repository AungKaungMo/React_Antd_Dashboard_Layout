import { Input, Modal, Button, Form, Row, Col } from "antd";
import { PermissionCreateType } from "../../../types/permission";
import { useCreatePermission } from "../../../hooks/use-permission";
import UseFormSubmit from "../../../hooks/use-form-submit";

type PropsType = {
    handleCreateBoxOpen: () => void,
    createOpen: boolean,
}

const Create = ({createOpen, handleCreateBoxOpen} : PropsType) => {
    const { mutate: permission, isPending } = useCreatePermission();
    const [form] = Form.useForm();
    const {handleFormSubmit} = UseFormSubmit();
  
    const onFinish = (values: any) => {
        handleFormSubmit({
          apiCall: permission,
          form: form,
          successText: "Permission Created successfully.",
          errorText: "Permission creation failed.",
          errorName: "name",
          callbackFun: handleCreateBoxOpen, // This will close the modal after success
        })(values); // Pass values from the form
      };

    return (
    <>
      <Modal
        title="Create Permission"
        open={createOpen}
        onOk={handleCreateBoxOpen}
        onCancel={handleCreateBoxOpen}
        footer={[
         <Button  key="submit" loading={isPending} type="primary" onClick={()=>form.submit()}>
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
                <Form.Item<PermissionCreateType>
                  label="Permission Name"
                  name="name"
                  rules={[
                    { required: true, message: 'Please input your permission name' },
                    { type: "string", message: "The input is not valid permission name!"}
                  ]}
                >
                  <Input className="w-full"/>
                </Form.Item>
              </Col>
            </Row>
        </Form>
      </Modal>
    </>
  );


}

export default Create