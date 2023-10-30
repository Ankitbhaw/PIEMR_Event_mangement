import React from "react";

export default function Login({Setlogin}) {
    const handleLogin=()=>{
        Setlogin(true);
    }
  return (
    <div className="container mt-5 w-25 border p-3 ">
         <h1 className="text-center mb-3">
            Login
          </h1>
      <form onSubmit={handleLogin}>
        <div className="mb-5">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-white">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor ="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
      
        <button type="submit" className="btn btn-primary mb-4" >
          Submit
        </button>
      </form>
    </div>
  );
}
