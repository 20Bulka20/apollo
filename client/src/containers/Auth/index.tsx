import React from 'react';
import { AuthWrapper, AuthLogo } from './styled';

interface IAuthProps {
  name: string;
}

const Auth: React.FC<IAuthProps> = () => {
  return (
    <AuthWrapper>
      <AuthLogo />
    </AuthWrapper>
  );
};

export default Auth;
