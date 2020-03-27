import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import  CustomersList from './CustomersList'
import  CustomerCreateUpdate  from './CustomerCreateUpdate'
import './App.css';

const BaseLayout = () => (
<div className="container-fluid">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">데모 시스템</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="customersDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          고객관리
        </a>
        <div className="dropdown-menu" aria-labelledby="customersDropdownMenu">
          <a className="dropdown-item" href="/customers">고객리스트</a>
          <a className="dropdown-item" href="/customers/add">고객등록</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

    <div className="content">
      <Route path="/customers" exact component={CustomersList} />
      <Route path="/customers/add/:pk"  component={CustomerCreateUpdate} />
      <Route path="/customers/add/" exact component={CustomerCreateUpdate} />

    </div>

</div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;
