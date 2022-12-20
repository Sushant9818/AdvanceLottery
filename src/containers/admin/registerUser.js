// import {useState} from 'react'
// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';


// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
// });

// const RegisterUser = () => {
// const requestOption= {
//   method: "POST",
//   headers: {
//     'Content-type': 'application/json'
//   },
//   body: JSON.stringify({name,ticketNo})
// }
// fetch('http://localhost:3000/register',requestOption)
// }
//     return (
//     <>
//        <div>
//      <h1>Signup</h1>
//      <Formik
//        initialValues={{
//          fullName: '',
//          ticketNo: '',
//        }}
//        validationSchema={SignupSchema}
//        onSubmit={values => {
//          // same shape as initial values
//          console.log(values);
//        }}
//      >
//        {({ errors, touched }) => (
//          <Form>
//            <Field name="FullName" placeholder="Full Name"/>
//            {errors.fullName && touched.fullName ? (
//              <div>{errors.fullName}</div>
//            ) : null}
//            <br/>
//            <Field ticketNo="ticketno" placeholder="TicketNo"/>
//            {errors.ticketNo && touched.ticketNo ? <div>{errors.ticketNo}</div> : null}
//            <br/>
//            <button type="submit">Submit</button>
//          </Form>
//        )}
//      </Formik>
//    </div>
//  )}
  
//   export default RegisterUser;


import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('Please enter name'),
    ticketNo: Yup.number().min(1, 'Too Short!')
    .required('Required'),
});


const RegisterUser = () => (
  <div>
    <h1>Register lottery users</h1>
    <Formik
      initialValues={{
        name: '',
        ticketNo: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
          const requestOptions = {
              method: "POST",
              headers: {
              'Content-type': 'application/json'
              },
              body: JSON.stringify(values)
          }
         fetch('http://localhost:3000/register' , requestOptions)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" placeholder="name" />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <br/>
          <Field name="ticketNo" placeholder="ticketNo"/>
          {errors.ticketNo && touched.ticketNo ? (
            <div>{errors.ticketNo}</div>
          ) : null}
          <br/>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RegisterUser





 