import React from 'react';

import {
  AuthLogo,
  MainHeader,
  LogoContainer,
  HeaderContainer,
  ProfileSVG,
  SettingsSVG,
} from './styled';

const Header: React.FC = () => {
  return (
    <>
      <MainHeader>
        <LogoContainer>
          <AuthLogo />
        </LogoContainer>
        <HeaderContainer>
          <SettingsSVG />
          <ProfileSVG />
        </HeaderContainer>
      </MainHeader>
    </>
  );
};

export default Header;
