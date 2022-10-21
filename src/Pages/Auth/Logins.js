import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./Login.css";
import HttpClient from "../../Services/Helpers/Api/HttpClient";

export default function App() {

  const client = new HttpClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ChangeValue = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  const getLogin = async (data) => {
   const responseLogin = await client.get(client.users)
   console.log(responseLogin)
  } 
  const onSubmit = (e) => {
    e.preventDefault();
    const dataLogin = {
      email: email,
      password: password,
    };
    getLogin(dataLogin)
  };
  return (
    <>
      <div>
        <p>hoangan.web@gmail.com</p>
        <p>1234567</p>
      </div>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" onChange={ChangeValue} name="email" />
        <input onChange={ChangeValue} placeholder="Pass" name="password" />
        <input type="submit" />
      </form>
    </>
  );
}
