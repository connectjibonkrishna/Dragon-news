import React from "react";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div className="flex justify-center mt-5 items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-semibold text-2xl">Register your account</h2>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Your Name" />
            {/* photo */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo Url" />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold mt-2">
              Already have an Account?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
