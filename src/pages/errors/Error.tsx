import { useRouteError } from 'react-router-dom';
import { Result, Typography } from 'antd';
    import { BackButton } from '../../components/Button/BackButton';
    import { RefreshButton } from '../../components/Button/RefreshButton';

const { Paragraph, Text } = Typography;

type Error = unknown | any;

export const ErrorPage = () => {
  const error: Error = useRouteError();
  console.error(error);

  return (
    <Result
      status="error"
      title="Oops!"
      subTitle="Sorry, an unexpected error has occurred."
      extra={[<BackButton type="primary" />, <RefreshButton />]}
    >
      <div className="desc">
        <Paragraph>
          <Text
            strong
            style={{
              fontSize: 16,
            }}
          >
            The page you tried to open has the following error:
          </Text>
        </Paragraph>
        <Paragraph copyable>{error.statusText || error.message}</Paragraph>
      </div>
    </Result>
  );
};
