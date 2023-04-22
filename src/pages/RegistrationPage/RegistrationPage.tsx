
import { useCallback } from 'react'

import { Formik, Form } from 'formik'
import cls from './RegistrationPage.module.scss'



import * as yup from 'yup'
import { FormComponent } from './Form/Form'

export interface FormikInitialValues {
  username: string
  password: string
  confirmPassword: string
  email: string;
  phone: number
}

const initialValues: FormikInitialValues = {
  confirmPassword: '',
  email: '',
  password: '',
  phone: 0,
  username: ''
}

const validationSchema = yup.object({
  username: yup.string()
    .min(5, 'username should have more than 5 letters')
    .max(10, 'username should have less than 11 letters')
    .required('This field is required'),
  password: yup.string(),
  confirmPassword: yup.string(),
  email: yup.string(),
  phone: yup.number(),
})
const RegistrationPage = () => {
  // const {
  //   logIn,
  //   changeUsername,
  //   changePassword,
  //   password,
  //   username
  // } = useAuth()

  const handleSubmit = useCallback((values: FormikInitialValues) => {
    console.log(values);
  }, [])

  return (

    <div className={cls.RegistrationPage}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnMount
      >
        <FormComponent />
      </Formik>
    </div>
  )
}

export default RegistrationPage