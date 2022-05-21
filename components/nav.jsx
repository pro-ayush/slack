import React from "react";

function Nav() {
  return (
    <React.Fragment>
      <style jsx>
        {`
          nav {
            display: grid;
            grid-template-columns: 25% 50% 25%;

            height: 10vh;
          }

          .logoContainer {
            margin: auto;
          }

          .logoContainer img {
            height: 8vh;
            margin-top: 20px;
          }

          .navLinks {
            margin-top: 10px;
            font-family: heading;
          }

          .navLinks ul {
            display: flex;
            list-style: none;
            justify-content: space-evenly;
            font-size: 1.25rem;
          }

          .Contactus {
            margin: auto;
          }

          .Contactus button {
            padding: 15px;
            font-size: 1rem;
            color: #f0694c;
            border: 2px solid #f0694c;
            border-radius: 100px;
            background-color: #fbf9f5;
          }
        `}
      </style>

      <nav className="Navbar">
        <div className="logoContainer">
          <img src="/resources/slack.png" alt="logo" />
        </div>

        <div className="navLinks">
          <ul>
            <li>Home</li>
            <li>How we work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="Contactus">
          <button>Download App</button>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
