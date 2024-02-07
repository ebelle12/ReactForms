import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Authenticate from "./authenticate";
import SignUpForm from "./signupform";


export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}


