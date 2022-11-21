import { useSelector } from 'react-redux';

export const AuthorizeInline = ({ children }) => {
  const { authenticated } = useSelector(({ auth }) => {
    const { authenticated } = auth;

    return { authenticated };
  });

  if (!authenticated) {
    return <></>;
  }

  return <>{children}</>;
};
