import {Button, Form, Header, Label } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
//import {ErrorMessage, Formik } from 'formik';
import MyTextInput from '../MyTextInput';
//import {jwtDecode} from "jwt-decode";
//import {useEffect} from "react";
import {useHistory, useLocation} from 'react-router-dom';
//import { ClientFormValues } from '../models/client';
import {ErrorMessage, Formik } from 'formik';
//import { GoogleLogin } from '@react-oauth/google';

export default observer(function LoginFormComponent() {
    const { clientStore } = useStore();

    const location = useLocation();
    const sub = (location.state as { sub: string })?.sub;
    const history = useHistory();
    
    return (
        <Formik
            initialValues={{ firstName: '',lastName: '', email: '', error: null }}
            /*onSubmit={(values, { setErrors }) =>
                clientStore.login(values).catch(() => setErrors({ error: 'Invalid email or password' }))}*/
            onSubmit={values => {
                console.log(values);
                console.log(sub);
                const updatedValues = { ...values, sub };
                console.log('Before login')
                clientStore.login(updatedValues)
                history.replace('/form');
            }
            }
        >
            {({ handleSubmit, errors }) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Login to Courier Hub' color="teal" textAlign="center" />
                    <MyTextInput placeholder="FirstName" name='firstName' />
                    <MyTextInput placeholder="LastName" name='lastName' />
                    <MyTextInput placeholder="Email" name='email' />
                    <ErrorMessage name='error' render={() =>
                        <Label style={{ marginBottom: 10 }} basic color='red' content={errors.error} />} />
                    <Button  positive content='Login' type="submit" fluid />
                   
                </Form>
            )}

        </Formik>
    )
})

