import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
        setSignUpSuccess(<strong className="text-black">You have successfully signed up, {userCredential.user.email}!</strong>)
      })
      .catch((error) => {
        setSignUpSuccess(<em className="text-black">There was an error signing you up: {error.message}</em>)
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(<strong className="text-black">You've successfully signed in as {userCredential.user.email}!</strong>)
      })
      .catch((error) => {
        setSignInSuccess(<em className="text-black">There was an error signing in: {error.message}</em>)
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function () {
        setSignOutSuccess(<strong className="text-black">You have successfully signed out!</strong>);
      }).catch(function (error) {
        setSignOutSuccess(<em>There was an error signing out: ${error.message}</em>);
      });
  }

  return (
    <React.Fragment>
      <button className="text-lime-400 font-bold" onClick={handleShow}>
        Sign In
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center font-bold">User Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={doSignUp}>
            <p className="text-xl font-bold mt-2 pb-2">Create Account</p>
            <input className="border-2 rounded"
              type='text'
              name='email'
              placeholder='Email' />
            <input className="border-2 rounded ml-2"
              type='password'
              name='password'
              placeholder='Password' />
            <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-1 px-2 ml-2 rounded" type='submit'>Sign Up</button>
          </form>
          <p className="text-blue-500">{signUpSuccess}</p>

          <p className="italic pt-2 font-bold">OR</p>

          <form onSubmit={doSignIn}>
            <p className="text-xl font-bold mt-2 pb-2">Sign In</p>
            <input className="border-2 rounded"
              type='text'
              name='signInEmail'
              placeholder='Email' />
            <input className="border-2 rounded ml-2"
              type='password'
              name='signInPassword'
              placeholder='Password' />
            <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-1 px-2 ml-2 rounded" type='submit'>Sign In</button>
          </form>
          <br />
          <p className="text-blue-500">{signInSuccess}</p>

        </Modal.Body>
        <Modal.Footer>
          <div className="text-red-700">
            {signOutSuccess}
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded" onClick={handleClose}>
            Close
          </button>
          <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded" onClick={doSignOut}>Log Out</button>
        </Modal.Footer>
      </Modal>

    </React.Fragment>
  );
}

export default SignInSignOut;