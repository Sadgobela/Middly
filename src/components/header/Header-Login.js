import React from 'react';
import 'comp-styles/header/Header-Login.scss';

export default function HeaderLogin({ openSignUp, openLogin }) {
  return (
    <span className="user not-logged">
      <div
        className="sign-in"
        onClick={(e) => {
          openLogin();
        }}
        role="presentation"
      >
        Sign In
      </div>
      <div className="sign-divider">|</div>
      <div
        className="sign-up"
        onClick={(e) => {
          openSignUp();
        }}
        role="presentation"
      >
        Create account
      </div>
    </span>
  );
}
