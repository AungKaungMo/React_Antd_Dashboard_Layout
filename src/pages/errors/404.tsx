import { Result } from 'antd';
import { BackButton } from '../../components/Button/BackButton';

export const Error404Page = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<BackButton type="primary" />}
    />
  );
};
