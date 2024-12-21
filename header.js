import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">ShoppingGo</Link>
      <input type="text" placeholder="Enter Product Name ..." />
      <button className="btn btn-warning">Search</button>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/admin">admin</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart (0)</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
