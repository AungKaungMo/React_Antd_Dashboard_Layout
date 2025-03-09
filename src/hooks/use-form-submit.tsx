import { message } from "antd";
type ApiCallType = (
  values: any,
  options: {
    onSuccess: (data?: any) => void;
    onError: (error: any) => void;
  }
) => void;

type UseFormSubmitProps = {
  apiCall: ApiCallType;
  route?: string;
  form: any;
  successText?: string;
  errorText?: string;
  errorName?: string;
  callbackFun?: (value?: string) => void;
};

const UseFormSubmit = () => {

  const handleFormSubmit = ({
    apiCall,
    form,
    successText,
    errorText,
    errorName,
    callbackFun
  }: UseFormSubmitProps) => {
    return async (values: any) => {
      apiCall(values, {
        onSuccess: () => {
          message.open({
            type: "success",
            content: successText || "Operation Success.",
          });
          if (callbackFun) callbackFun(values);
        },
        onError: (error) => {
          if ((error?.response?.data?.data || error?.response?.data?.message) && errorName) {
            form.setFields([
              {
                name: errorName,
                errors: [error?.response?.data?.data || error?.response?.data?.message],
              },
            ]);
          } else {
            message.open({
              type: "error",
              content: errorText || "Operation failed",
            });
          }
        },
      });
    };
  };
  return { handleFormSubmit };
};

export default UseFormSubmit;
