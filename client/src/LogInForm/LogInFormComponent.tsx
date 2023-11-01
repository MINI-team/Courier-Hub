import { Form } from 'semantic-ui-react'
function LogInFormComponent(){
    return(<div>
        <Form>
            <h2>Log in before continuing</h2>
            <Form.Group>
                <Form.Input fluid label='Login' placeholder='your login here' width={4} />
                <Form.Input fluid label='Password' placeholder='********' width={4}/>
            </Form.Group>
            <Form.Button>Submit</Form.Button>
            <Form.Group inline={true}>
                <Form.Button>Continue with Google</Form.Button>
                <h4 style={{ margin: '0 10px' }}>or</h4>
                <Form.Button>Continue without logging in</Form.Button>
            </Form.Group>
        </Form>
    </div>)
}

export default LogInFormComponent;