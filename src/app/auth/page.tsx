"use client";
import React from "react";

function AuthPage() {
  return (
    <form
      action="#"
      method="post"
      onSubmit={function submitForm(e) {
        e.preventDefault();
        const password = new FormData(e.currentTarget).get("password");
        console.log(password);

        fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
          }),
        }).finally(() => {
          window.location.href = "/";
        });
      }}
    >
      <input type="password" name="password" className="border" />
      <button className="border">Submit</button>
    </form>
  );
}

export default AuthPage;
