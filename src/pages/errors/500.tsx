import { Result } from 'antd';
import { BackButton } from '../../components/Button/BackButton';
import { RefreshButton } from '../../components/Button/RefreshButton';

export const Error500Page = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={[<BackButton type="primary" />, <RefreshButton />]}
    />
  );
};
