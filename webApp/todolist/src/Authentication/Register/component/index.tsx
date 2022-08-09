import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface IInput {
    username: string;
    password: string;
    // confirmedPassword: string;
    handleInputUsername : (input: any) => void;
    handleInputPassword : (input: any) => void;
    handleClick : () => void;
}


const formRegister = (props : IInput) => {
    return (
        <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={props.handleInputUsername} value={props.username}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={props.handleInputPassword} value={props.password}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={props.handleClick}>
        Submit
      </Button>
    </Form>
        </div>
    );
}

export default formRegister;