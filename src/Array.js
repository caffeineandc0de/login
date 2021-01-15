import React, { useEffect } from "react";
import axios from "axios";
import "./Register.css";
import { Formik , Field} from "formik";
import * as Yup from "yup";


const baseUrl = "http://192.168.0.114:5004/airkyc/api/registration ";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const signupSchema = Yup.object().shape({

  username: Yup.string().required("Please enter name"),

  email: Yup.string().email("Invalid email").required("Please enter email"),
phonenumber: Yup.string().required("Please enter phone number").matches(phoneRegExp, 'Phone number is not valid'),
adhaar:Yup.number().required("enter your adhar number"),
dob:Yup.date().required("Please enter DOB")
.max(new Date(), "You can't be born in the future!"),
});


const Login = (props) => {

  return (
    <div className="app">
      <div className="bg"></div>
       <Formik
            initialValues={{ email: '', username: '',adhaar:"",dob:"",phonenumber:"" }}
            onSubmit={(values) => {
              console.log(values);
              axios.post(baseUrl, values);
            }}
            validationSchema={signupSchema}
          >
            {(formilProps) => {
              const {
                values,
                touched,
                errors,
                handleSubmit,
                handleChange
              } = formilProps;

              return (
      <form onSubmit={handleSubmit}>
     
         <input
                        name="username"
                        id="username"
                        placeholder="User Name"
                        value={values.username}
                        onChange={handleChange}
                      />
                       {errors.username && touched.username && (
                    <span className="error">{errors.username}</span>
                  )}
       
          <input
                        id="phonenumber"
                        placeholder="Phone number"
                        name="phonenumber"
                        value={values.phonenumber}
                        onChange={handleChange}
                      
                      />
                      {errors.phonenumber && touched.phonenumber && (
                    <span className="error">{errors.phonenumber}</span>
                      )}
          <input
                        id="email"
                        placeholder="Email Address"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                         {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                      )}
          <input
                        id="adhaar"
                        placeholder="Adhar number"
                        name="adhaar"
                        value={values.adhaar}
                        onChange={handleChange}
                      />
                        {errors.adhaar && touched.adhaar && (
                    <span className="error">{errors.adhaar}</span>
                      )}
        <div
          style={{
            display: "flex",
            width:"236px",
            flexDirection: "row",
            justifyContent:"space-around",
            alignItems:"center",
            borderRadius: "15px",
            border:"1px solid black",
            margin:"14px"
          }}
        >
          <label>
              <Field type="radio" name="picked" value="Male" />
              Male
            </label>
            <label>
              <Field type="radio" name="picked" value="Female" />
              Female
            </label>
            <label>
              <Field type="radio" name="picked" value="Others" />
              Others
            </label>
        </div>
  <input
                        id="dob"
                        placeholder="Date Of birth"
                        name="dob"
                        value={values.dob}
                        onChange={handleChange}
                       
                      />
                      {errors.dob && touched.dob && (
                    <span className="error">{errors.dob}</span>
                      )}
        <p className="light">
          <a href="#">Forgot password?</a>
        </p>
        <button
        style={{ width: "120px", marginTop: "-30px" }}
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    CREATE
                  </button>
      </form>
       );
      }}
    </Formik>
    </div>
  );
}
export default Login;