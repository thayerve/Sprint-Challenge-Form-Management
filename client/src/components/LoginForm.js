import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';



class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        console.log("state data: ", this.state.data);
        axios
            .get("http://localhost:5000/api/restricted/data")
            .then(res => {
                console.log("axios get res: ", res);
                this.setState({ data: res.data });
            })
    }
    render() {
        return (
            <div>
                <Form>
                    <div>
                        <h2>Sign Up</h2>
                        {this.props.touched.username && this.props.errors.username && <p className="error">{this.props.errors.username}</p>}
                        <Field type="username" name="username" placeholder="Username" />
                    </div>

                    <div>
                        {this.props.touched.password && this.props.errors.password && <p className="error">{this.props.errors.password}</p>}
                        <Field type="password" name="password" placeholder="Password" />
                    </div>

                    <button type="submit" disabled={this.props.isSubmitting}>Submit</button>
                </Form>
            </div>
        )
    }
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("Username is required"),
        password: Yup.string()
            .min(16, "Password must be 16 characters or longer")
            .required("Password is required")
    }),

    handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
        if (values.username === "waffle@syrup.com") {
            setErrors({ username: "That username is already taken" });

        } else {
            axios
                .post("http://localhost:5000/api/register", values)
                .then(res => {
                    console.log("axios post res: ", res);
                    resetForm();
                    setSubmitting(false);
                    setStatus(res.data)
                })
                .catch(err => {
                    console.log("Oh shoot: ", err);
                    setSubmitting(false);
                });
        }
    }
})(LoginForm);

export default FormikLoginForm;