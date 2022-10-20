import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitLogin = (d) => {
        console.log(d)
    }
    return (
        <div className="container d-flex justify-content-center mt-5">
            <Form onSubmit={handleSubmit(submitLogin)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter email"
                        {...register('email', {
                            required: true
                        })} />
                    {errors.email?.type === 'required' && <p className="text-danger">Email is required</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        {...register('password', {
                            required: true,
                            maxLength: 20,
                            minLength: 10,
                        })} />
                    {errors.password?.type === 'required' && <p className="text-danger">Password is Required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-danger">MinLength Of Password is 10 </p>}
                    {errors.password?.type === 'maxLength' && <p className="text-danger">MaxLength Of Password is 20 </p>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <h6 className="pt-4">
                    New Customer? <Link to="/sign">Signup</Link>
                </h6>
            </Form>
        </div>
    );
}

export default Login;