import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SignIn() {

  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(<strong>You have successfully signed up, {userCredential.user.email}</strong>)
      })
      .catch((error) => {
        setSignUpSuccess(<em>There was an error signing you up: {error.message}</em>)
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(<strong>You've successfully signed in as {userCredential.user.email}</strong>)
      })
      .catch((error) => {
        setSignInSuccess(<em>There was an error signing in: {error.message}</em>)
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function () {
        setSignOutSuccess(<strong>You have successfully signed out!</strong>);
      }).catch(function (error) {
        setSignOutSuccess(<em>There was an error signing out: ${error.message}</em>);
      });
  }

  return (
    <React.Fragment>
      <Button variant="primary" className="bg-dark text-white" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign-In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={doSignUp}>
            <p className="text-xl font-bold mt-2">Create Account</p>
            <input className="border-2 rounded"
              type='text'
              name='email'
              placeholder='Email' />
            <input className="border-2 rounded"
              type='password'
              name='password'
              placeholder='Password' />
            <Button className="text-white bg-slate-400" type='submit'>Sign up</Button>
          </form>

          <p className="italic">OR</p>

          <form onSubmit={doSignIn}>
            <p className="text-xl font-bold mt-2">Sign In</p>
            <input className="border-2 rounded"
              type='text'
              name='signInEmail'
              placeholder='Email' />
            <input className="border-2 rounded"
              type='password'
              name='signInPassword'
              placeholder='Password' />
            <Button className="text-white bg-slate-400" type='submit'>Sign In</Button>
          </form>
          <br />

        </Modal.Body>
        <Modal.Footer>
          <div className="text-red-700">
            {signInSuccess}
            {signOutSuccess}
          </div>
          <Button className="text-white bg-dark" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="text-white bg-red-400" onClick={doSignOut}>Sign out</Button>
        </Modal.Footer>
      </Modal>

      {/* <h2 className="text-2xl">Sign up</h2>
      {signUpSuccess}
      <form onSubmit={doSignUp} className="mb-4">
        <input className="border-2 rounded"
          type='text'
          name='email'
          placeholder="Email"/>
        <input className="border-2 rounded"
          type='password'
          name='password'
          placeholder='Password' />
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type='submit'>Sign up</button>
      </form>

      <h2 className="text-2xl">Sign In</h2>
      {signInSuccess}
      <form onSubmit={doSignIn} className="mb-4">
        <input className="border-2 rounded"
          type='text'
          name='signInEmail'
          placeholder='Email' />
        <input className="border-2 rounded"
          type='password'
          name='signInPassword'
          placeholder='Password' />
        <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type='submit'>Sign In</button>
      </form>

      {signOutSuccess}
      <br />
      <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={doSignOut}>Sign out</button> */}
    </React.Fragment>
  );
}

export default SignIn;