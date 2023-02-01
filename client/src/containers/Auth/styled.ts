import { from } from 'apollo-link';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthBackgroundImg from '../../assets/images/auth-background.png';
import Arrow from '../../assets/images/arrow.svg';
import Logo from '../../assets/images/Logo.png';

export const AuthWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: no-repeat url(${AuthBackgroundImg});
  background-size: cover;
`;
export const AuthLogo = styled.div`
  position: absolute;
  width: 120px;
  height: 52px;
  left: 35px;
  top: 35px;
  background: no-repeat url(${Logo});
`;
export const AuthForm: any = styled.form`
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: #3a3a51;
  width: 32rem;
`;

export const AuthFormName = styled.h3`
  margin-bottom: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;
`;
export const AuthFormInput = styled.input`
  border: none;
  height: 56px;
  background: #42425c;
  padding: 16px;
  margin-top: 20px;
  color: #fff;
  ::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #a1a1b9;
  }
`;
export const SignInForm = styled(AuthForm)``;

export const AuthFormSubmitBtnSvg = styled.p`
  margin: 0;
  width: 12px;
  height: 12px;
  background: no-repeat url(${Arrow});
`;
export const AuthFormSubmitBtnText = styled.p`
  margin: 0;
`;
export const AuthErrorWrapper = styled.p`
  color: tomato;
`;
export const AuthFormLink: any = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background-color: transparent;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    color: #fff;
  }
`;
export const AuthFormLinkRight = styled(AuthFormLink)`
  margin: 30px 0 60px;
  width: 120px;
  height: 24px;
  align-self: end;
`;
export const AuthFormBtnSubmit = styled.button`
  width: 124px;
  height: 40px;
  border: 1px solid #a1a1b9;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background-color: transparent;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  :active {
    padding-top: 2px;
  }
`;
export const AuthFormSubmitBtnContent: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const AuthFormBtnContainer: any = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const SubmitBtnContainer = styled(AuthFormBtnContainer)`
  margin-top: 60px;
`;
export const ResetPasswordText = styled.p`
  margin: 20px 0 0;
  width: 334px;
  height: 24px;
  font-family: SF UI Text;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #a1a1b9;
`;
