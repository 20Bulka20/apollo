import React from 'react';
import { useContext } from 'react';
import useForm from 'react-hook-form';
import { fieldNames } from './enumerations';
import { signInValidationSchema } from './validations';
import ErrorMessage from 'components/ErrorMessage';
import FullPageLoader from 'components/Loaders/FullPageLoader';
import { useMutation } from '@apollo/react-hooks';
import { SIGNIN_USER } from './gql';
import { useHistory } from 'react-router';
import { AuthContext } from 'context/authContex';

import {
  SignInForm,
  AuthFormName,
  AuthFormInput,
  AuthFormSubmitBtnSvg,
  AuthFormBtnSubmit,
  AuthFormSubmitBtnContent,
  AuthFormBtnContainer,
  AuthFormSubmitBtnText,
  AuthFormLinkRight,
  AuthFormLink,
  AuthWrapper,
  AuthLogo,
  AuthErrorWrapper,
} from './styled';

const SignIn: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: signInValidationSchema,
  });
  const { login } = useContext(AuthContext);
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted({ signIn }) {
      if (signIn) {
        login(signIn.token, signIn.userID);
        history.push('/todos');
      }
    },
  });
  if (loading) return <FullPageLoader />;

  const onSubmit = handleSubmit(async (formData: any, e: any) => {
    await signIn({
      variables: {
        login: formData[fieldNames.email],
        password: formData[fieldNames.password],
      },
    });
  });

  return (
    <AuthWrapper>
      <AuthLogo />
      <SignInForm onSubmit={onSubmit}>
        <AuthFormName>Sign In</AuthFormName>
        {error ? <AuthErrorWrapper> {error.message}</AuthErrorWrapper> : null}
        <AuthFormInput name="email" ref={register} placeholder="E-Mail" />
        <ErrorMessage errors={errors} name={fieldNames.email} />
        <AuthFormInput name="password" ref={register} placeholder="Password" />
        <ErrorMessage errors={errors} name={fieldNames.password} />
        <AuthFormLinkRight to="ResetPassword">Reset password</AuthFormLinkRight>
        <AuthFormBtnContainer>
          <AuthFormLink to="/SignUp">Sign up</AuthFormLink>
          <AuthFormBtnSubmit type="submit">
            <AuthFormSubmitBtnContent>
              <AuthFormSubmitBtnText>Sign In</AuthFormSubmitBtnText>
              <AuthFormSubmitBtnSvg />
            </AuthFormSubmitBtnContent>
          </AuthFormBtnSubmit>
        </AuthFormBtnContainer>
      </SignInForm>
    </AuthWrapper>
  );
};

export default SignIn;
