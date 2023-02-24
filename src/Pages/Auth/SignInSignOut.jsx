import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SignInSignOut() {

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
      <Button className="text-black" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Sign-In</Modal.Title>
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
          <p className="text-blue-500">{signUpSuccess}</p>

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
          <p className="text-blue-500">{signInSuccess}</p>

        </Modal.Body>
        <Modal.Footer>
          <div className="text-red-700">
            {signOutSuccess}
          </div>
          <Button className="text-white bg-slate-900" onClick={handleClose}>
            Close
          </Button>
          <Button className="text-white bg-red-400" onClick={doSignOut}>Sign out</Button>
        </Modal.Footer>
      </Modal>

    </React.Fragment>
  );
}

export default SignInSignOut;