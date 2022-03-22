import React, { Component } from "react";
import Identicon from "identicon.js";
import logo from "./logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark p-0 text-monospace">
        <img
          src={logo}
          width="300rem"
          className="align-top"
          alt=""
          style={{ paddingTop: 30, paddingLeft: 90 }}
        />
        <ul className="navbar-nav px-5">
          <li>
            {this.props.account ? (
              <img
                alt="dp"
                width="40"
                height="40"
                src={`data:image/png;base64,${new Identicon(
                  this.props.account,
                  30
                ).toString()}`}
              />
            ) : (
              <span></span>
            )}
            <br />
            <small id="account">
              <a
                target="_blank"
                alt="account Id"
                className="text-white"
                rel="noopener noreferrer"
                href={"https://etherscan.io/address/" + this.props.account}
              >
                {this.props.account.substring(0, 6)}...
                {this.props.account.substring(38, 42)}
              </a>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
