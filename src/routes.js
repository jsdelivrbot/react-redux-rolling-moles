import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home-page';
import CalendarPage from './components/calendar-page';
import SchedulePage from './components/schedule-and-prices-page';
import ContactUsPage from './components/contact-us-page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="calendar" component={CalendarPage}/>
    <Route path="schedule" component={SchedulePage}/>
    <Route path="contactus" component={ContactUsPage}/>
  </Route>
  );
