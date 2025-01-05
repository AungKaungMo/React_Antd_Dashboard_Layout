import { Result } from 'antd';
import { BackButton } from '../../components/Button/BackButton';

export const Error403Page = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<BackButton type="primary" />}
    />
  );
};
