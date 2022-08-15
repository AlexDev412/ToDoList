import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Asset1 from '../../../Assets/Metrics-rafiki.svg';
import Asset2 from '../../../Assets/Task-rafiki.svg';
import styles from './style';
import margin from '../../../styles/common';
import { Link } from 'react-router-dom'

interface IInput {
    username: string;
    password: string;
    handleInputUsername : (input: any) => void;
    handleInputPassword : (input: any) => void;
    handleClick : () => void;
}

const FormLogin = (props : IInput) => {
    return (
      <div >
        <div style={styles.Background}>
          <div style={styles.BackgroundLogin}>
            <Form>
              <>
              <div style={styles.PositionInput}>
              <h1 style={styles.Title}>Register</h1>

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
                <>
                <div>
                  <Link to="/Login">Already have an account ? Login.</Link>
                </div>
                </>
            <Button style={margin['10-mt']} variant="primary" onClick={props.handleClick}>
              Submit
            </Button>
          </div>
            </>
        </Form>
      </div>
      <>
      <div style={styles.AssetOne}>
        <img src={Asset1} alt="Image1"/>
      </div>
      </>
      <>
      <div style={styles.AssetTwo}>
        <img src={Asset2} alt="Image2"/>
      </div>
      </>
      </div>
    </div>
    
    );
}

export  default FormLogin