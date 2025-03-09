import { Button, Col, Form, Input, Modal, Row } from "antd";
import { PermissionListType, PermissionUpdateType } from "../../../types/permission";
import { useForm } from "antd/es/form/Form";
import { useUpdatePermission } from "../../../hooks/use-permission";
import UseFormSubmit from "../../../hooks/use-form-submit";

type PropsType = {
    handleBoxOpen: () => void,
    open: boolean,
    permission?: PermissionListType
}

const Edit = ({handleBoxOpen, open, permission} : PropsType) => {
  const [form] = useForm();
  const { mutate: update , isPending } = useUpdatePermission()
  const {handleFormSubmit} = UseFormSubmit();

  const onFinish = (values: any) => {

    const payload = {...values, id: permission?.id};
    // return;
    handleFormSubmit({
      apiCall: update,
      form: form,
      successText: "Permission Updated successfully.",
      errorText: "Permission updation failed.",
      errorName: "name",
      callbackFun: handleBoxOpen, // This will close the modal after success
    })(payload); // Pass values from the form
  };

  return (
    <>
      <Modal
        title="Edit Permission"
        open={open}
        onOk={handleBoxOpen}
        onCancel={handleBoxOpen}
        footer={[
         <Button  key="submit" 
         loading={isPending} 
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
              name: permission?.name,
            }}
        >
            <Row >
              <Col xs={24}>
                <Form.Item<PermissionUpdateType>
                  label="Permission Name"
                  name="name"
                  rules={[
                    { required: true, message: 'Please input your permission name' },
                    { type: "string", message: "The input is not valid permission name!"}
                  ]}
                >
                  <Input className="w-full" />
                </Form.Item>
              </Col>
            </Row>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
