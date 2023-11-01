import {Form, Formik} from "formik";

export default function LogInForm(){
    return(
        <Formik initialValues={{login: '', password: ''}}
                onSubmit={values => console.log(values)}
                >
            {({handleSubmit}) => (<Form className='ui_login_form' onSubmit={handleSubmit} autoComplete='off'>
                
                
            </Form>)}
        </Formik>
    )
}