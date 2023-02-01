import * as yup from 'yup';
import { fieldNames } from './enumerations';

export const signInValidationSchema = yup.object().shape({
  [fieldNames.password]: yup
    .string()
    .min(3, 'Password is too short')
    .max(12, 'Password is too long')
    .matches(/^(?=.*[a-z])/, 'Must contain at least one lowercase character')
    .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
    .matches(/^(?=.*[!@#%&])/, 'Must contain at least one special character')
    .required('Please Enter your password'),
  [fieldNames.email]: yup
    .string()
    .email()
    .required('Please Enter your email'),
});
export const signUpValidationSchema = yup.object().shape({
  [fieldNames.password]: yup
    .string()
    .min(3, 'Password is too short')
    .max(12, 'Password is too long')
    .matches(/^(?=.*[a-z])/, 'Must contain at least one lowercase character')
    .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
    .matches(/^(?=.*[!@#%&])/, 'Must contain at least one special character')
    .required('Please Enter your password'),
  [fieldNames.confirmPassword]: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  [fieldNames.email]: yup
    .string()
    .email()
    .required('Please Enter your email'),
  [fieldNames.Name]: yup
    .string()
    .max(30, 'Name is too long')
    .matches(/[A-Za-z]/g, 'Please use latin characters')
    .required('Please Enter your name'),
});
