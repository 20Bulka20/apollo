import React from 'react';
import useForm from 'react-hook-form';
import {
  SignInForm,
  AuthFormName,
  AuthFormInput,
  AuthFormSubmitBtnSvg,
  AuthFormLink,
  AuthFormBtnSubmit,
  AuthFormSubmitBtnContent,
  SubmitBtnContainer,
  AuthFormSubmitBtnText,
  ResetPasswordText,
  AuthWrapper,
  AuthLogo,
} from './styled';

type FormValues = {
  eMail: string;
};

const ResetPassword: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit(data => {});
  return (
    <AuthWrapper>
      <AuthLogo />
      <SignInForm onSubmit={onSubmit}>
        <AuthFormName>Reset Password</AuthFormName>
        <ResetPasswordText>Enter your E-mail address to reset password</ResetPasswordText>
        <AuthFormInput name="eMail" ref={register} placeholder="E-Mail" />
        <SubmitBtnContainer>
          <AuthFormLink to="/SignUp">Sign up</AuthFormLink>
          <AuthFormBtnSubmit type="submit">
            <AuthFormSubmitBtnContent>
              <AuthFormSubmitBtnText>Sign In</AuthFormSubmitBtnText>
              <AuthFormSubmitBtnSvg />
            </AuthFormSubmitBtnContent>
          </AuthFormBtnSubmit>
        </SubmitBtnContainer>
      </SignInForm>
    </AuthWrapper>
  );
};

export default ResetPassword;
