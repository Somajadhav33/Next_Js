"use client";
import { createUSer } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";

const Form = () => {
  const [state, formAction] = useFormState(createUSer, {});
  return (
    <form action={formAction}>
      <input type="email" placeholder="user@example.com" />
      <button type="submit">Submit</button>
      {state.error && <p>{state.error}</p>}
    </form>
  );
};

export default Form;
