import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().email().required('Email er påkrævet'),
  password: yup
    .string()
    .min(8, 'Adgangskode skal være længere end 8 tegn')
    .required('Adgangskode er påkrævet'),
})
