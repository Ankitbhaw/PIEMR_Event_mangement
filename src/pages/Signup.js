import React from "react";

export default function Signup({Setlogin}) {
    const handleLogin=()=>{
        Setlogin(true);
    }
  return (
    <div className="container mt-5 w-25 border p-3 ">
         <h1 className="text-center mb-3">
            SignUp
          </h1>
      <form onSubmit={handleLogin}>
        <div className="mb-5">
        <label for="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control mb-5"
            id="exampleInputname"
            aria-describedby="nameHelp"
          />
           <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control mb-5"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputpassword1"
            aria-describedby="emailHelp"
          />
         
        </div>
        <div className="mb-5">
          <label htmlFor ="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
      
        <button type="submit" className="btn btn-primary mb-4" >
          Submit
        </button>
      </form>
    </div>
  );
}
