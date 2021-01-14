import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { Formik } from "formik";
import * as Yup from "yup";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const useStyles = makeStyles((theme) => ({
root: {
    width: "100%",
    height:"80%", 
    marginLeft:"40%",
    margin:"5%",// Fix IE 11 issue.
    alignSelf:"center",
    borderRadius: "2%",
    boxShadow: "0px 0px 4px #555",
    border:"1px solid red"
  },
  form: {
    width: "20%", 
    marginLeft:"40%",
    margin:"5%",// Fix IE 11 issue.
    alignSelf:"center",
    borderRadius: "2%",
    boxShadow: "0px 0px 4px #555",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: "none",
  },
  reg_text: {
    fontSize: "100%",
    textAlign: "center",
    color: "teal",
  },
  required: {
    fontSize: "30px",
    color: "red",
  },
 
}));

const enterpriseRegExp = /^(((0|((\+)?91(\-)?))|((\((\+)?91\)(\-)?)))?[12-9]\d{9})?$/; // eslint-disable-line
// const FILE_SIZE = 1120 * 1024;
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const signupSchema = Yup.object().shape({
  isUser: Yup.boolean(),

  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter name"),

  email: Yup.string().email("Invalid email").required("Please enter email"),

  enterprise: Yup.string().required("Required"),

  password: Yup.string().when("isFieldValidationRequired", {
    is: true,
    otherwise: Yup.string().notRequired(),
    then: Yup.string()
      .min(12, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  }),
});

const SignUp = (props) => {
  const classes = useStyles();

  const formField = {
    username: props?.user?.first_name || "",
    email: props?.user?.email || "",
    enterprise: props?.user?.enterprise_number || "",
    password: "",
  };

  const handleSubmit = (values) => {
    const formValue = {
      username: values.username,
      email: values.email,
      enterprise: values.enterprise,
      password: values.password,
    };
    console.log(formValue);
  };

  return (
          <Formik
            initialValues={formField}
            onSubmit={(values) => {
              console.log(values);
              handleSubmit(values);
            }}
            validationSchema={signupSchema}
          >
            {(formilProps) => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleSubmit,
              } = formilProps;

              return (
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.root}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        autoComplete="username"
                        name="username"
                        variant="outlined"
                        fullWidth
                        id="username"
                        label="User Name"
                        autoFocus
                        value={values.username}
                        onChange={handleChange}
                        error={errors.username && touched.username}
                        helperText={
                          errors.username && touched.username && errors.username
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email && touched.email}
                        helperText={
                          errors.email && touched.email && errors.email
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="enterprise"
                        label="Enterprise"
                        name="enterprise"
                        autoComplete="enterprise"
                        value={values.enterprise}
                        onChange={handleChange}
                        error={errors.enterprise && touched.enterprise}
                        helperText={
                          errors.enterprise &&
                          touched.enterprise &&
                          errors.enterprise
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={values.password}
                        onChange={handleChange}
                        error={errors.password && touched.password}
                        helperText={
                          errors.password && touched.password && errors.password
                        }
                      />
                    </Grid>
                  </Grid>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    type="submit"
                  >
                    CREATE
                  </Button>
                 </div>
                </form>
              );
            }}
          </Formik>
  );
};

export default SignUp;
