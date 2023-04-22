
import { Input } from 'shared/UI/Input/Input'
import { Button } from 'shared/UI/Button/Button'
import { Form, useFormikContext, ErrorMessage } from 'formik'
import { FormikInitialValues } from '../RegistrationPage'
import { useEffect } from 'react'

interface FormProps {
    className?: string
}

export const FormComponent = ({ className }: FormProps) => {

    const { values, handleChange, errors, touched, setFieldTouched } = useFormikContext<FormikInitialValues>()

    useEffect(() => {
        console.log(errors);

    }, [errors])
    return (
        <Form>
            <Input
                type='text'
                placeholder='enter username'
                label='username'
                value={values.username}
                onChange={handleChange}
                onBlur={() => setFieldTouched('username', true)}
                name='username'
            />
            {errors.username && touched.username && <div style={{ color: 'red' }}>{errors.username}</div>}
            <Input
                type='text'
                placeholder='enter username'
                label='email'
                name='email'
                value={values.email}
                onChange={handleChange}
            />
            <Input
                type='password'
                placeholder='enter password'
                label='password'
                name='password'
                value={values.password}
                onChange={handleChange}
            />
            <Input
                type='password'
                placeholder='confirm password'
                label='confirm password'
                name='confirmPassword'
                value={values.confirmPassword}
                onChange={handleChange}
            />
            <Input
                type='number'
                placeholder='phone number'
                label='Phone number'
                name='phone'
                value={values.phone}
                onChange={handleChange}
            />
            <Button htmlType='submit'> Sign up </Button>
        </Form>
    )
}