import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1>hola</h1>
      <div>
        <ul>
          <li>
            <Link to="">welkome</Link>
          </li>
          <li>
            <Link to="/ticket">Ticket</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
