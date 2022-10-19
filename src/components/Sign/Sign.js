import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'

function Sign() {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    const submitSignUp = (d) => {
        console.log(d)
    }

    const gender = [
        { value: 1, label: "Male" },
        { value: 2, label: "Female" }
    ]
    return (
        <div className="container d-flex justify-content-center mt-5">
            <Form onSubmit={handleSubmit(submitSignUp)}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Your firstName"
                        {...register('firstName', {
                            required: true,
                            minLength: 5,
                            maxLength: 15,

                        })} />
                    {errors.firstName?.type === 'required' && <p className="text-danger">First name is required</p>}
                    {errors.firstName?.type === 'minLength' && <p className="text-danger">Min Length of First name is 5</p>}
                    {errors.firstName?.type === 'maxLength' && <p className="text-danger">Max Length of First name is 15</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="lname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Your LastName"
                        {...register('lastName', {
                            required: true,
                            minLength: 5,
                            maxLength: 15,
                        })} />
                    {errors.lastName?.type === 'required' && <p className="text-danger">First name is required</p>}
                    {errors.lastName?.type === 'minLength' && <p className="text-danger">Min Length of Last name is 5</p>}
                    {errors.lastName?.type === 'maxLength' && <p className="text-danger">Max Length of Last name is 15</p>}
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        {...register('confPassword', {
                            validate: (val) => {
                                if (watch('password') !== val) {
                                    return 'Your passwords is not match';
                                }
                            },
                        })}
                        aria-invalid={errors.confPassword ? 'true' : 'false'}
                    />
                    {errors.confPassword?.type === 'validate' && (
                        <Form.Text className="text-danger">
                            password is not match.
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select Your Gender</Form.Label>
                    <Select options={gender} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="checkbox" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
        </div>
    );
}

export default Sign;