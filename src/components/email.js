import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';
import{ BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


export default function Email() {
  return (
    <Router>
    <div className="email">
      <Sidebar />
      <main>
        <Route exact path="/:folderId" component={EmailList} />
        <Route exact path="/:folderId/:emailId" component={SingleEmail} />
        <Redirect from='/' to='/inbox' />

      </main>
    </div>
    </Router>
  );
}
