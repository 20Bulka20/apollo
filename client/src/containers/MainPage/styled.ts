import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';
import About from '../../assets/images/mainPage/About.svg';
import Members from '../../assets/images/mainPage/Members.svg';
import Profile from '../../assets/images/mainPage/Profile.svg';
import Settings from '../../assets/images/mainPage/settings.svg';
import Statistics from '../../assets/images/mainPage/Statistics.svg';

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutSVG = styled.div`
  margin-right: 10px;
  width: 16px;
  height: 16px;
  background: no-repeat url(${About});
`;

export const MembersSVG = styled.div`
  margin-right: 10px;
  width: 16px;
  height: 16px;
  background: no-repeat url(${Members});
`;

export const ProfileSVG = styled.div`
  cursor: pointer;
  margin-left: 30px;
  width: 25px;
  height: 25px;
  background: no-repeat url(${Profile});
`;

export const SettingsSVG = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  background: no-repeat url(${Settings});
`;

export const StatisticsSVG = styled.div`
  margin-right: 10px;
  width: 16px;
  height: 16px;
  background: no-repeat url(${Statistics});
`;

export const AuthLogo = styled.div`
  width: 120px;
  height: 52px;
  background: no-repeat url(${Logo});
`;

export const MainHeader = styled.header`
  display: flex;
  flex-direction: row;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1d1e2d;
  min-width: 230px;
  height: 70px;
`;

export const HeaderContainer = styled.div`
  padding-right: 41px;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 70px;
  background: #282939;
`;

export const BodyContainer = styled.body`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 70px);
  height: calc(100% - 70px);
`;

export const BodyAside = styled.aside`
  padding-left: 40px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;

  min-width: 230px;
  background: #282939;
`;

export const BodyMain = styled.div`
  width: calc(100vw - 230px);
  background: #3d3e4d;
`;

export const AsideBlock = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const AsideText = styled.div`
  cursor: pointer;
  font-family: SF UI Text;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #a1a1b9;
  :hover {
    color: #bb6bd9;
  }
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const UserBlock = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
