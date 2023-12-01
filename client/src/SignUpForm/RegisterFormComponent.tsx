import {observer} from "mobx-react-lite";
import {ErrorMessage, Formik} from "formik";
import {Button, Form, Header, Label} from "semantic-ui-react";
import { useStore } from "../stores/store";
import MyTextInput from "../MyTextInput";
import * as Yup from 'yup';

export default observer(function RegisterForm() {
    const { clientStore } = useStore();
    return (
        <Formik
            initialValues={{ firstName: '',lastName: '', email: '', error: null }}
            onSubmit={values => {
                console.log(values);
                clientStore.login(values)}}
            validationSchema={Yup.object({
                firstName: Yup.string().required(),
                lastName: Yup.string().required(),
                email: Yup.string().required(),
            })}
        >
            {({ handleSubmit, errors }) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Register to Courier Hub' color="teal" textAlign="center" />
                    <MyTextInput placeholder="FirstName" name='firstName' />
                    <MyTextInput placeholder="LastName" name='lastName' />
                    <MyTextInput placeholder="Email" name='email' />
                    <ErrorMessage name='error' render={() =>
                        <Label style={{ marginBottom: 10 }} basic color='red' content={errors.error} />} />
                    <Button 
                        positive content='Register' type="submit" fluid />
                </Form>
            )}
        </Formik>
    )
})
