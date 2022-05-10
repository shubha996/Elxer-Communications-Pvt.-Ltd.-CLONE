import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar3 from './Header/Navbar3';
import Navbar1 from './Header/Navbar1';
import Navbar2 from './Header/Navbar2';
import Content from './Content/Content-1/Content';
import Section from './Content/Content-2/Section';
import Registration from './Content/Content-3/Registration';
import WhyUs from './Content/Content-4/WhyUs';
import JoinUs from './Content/Content-5/JoinUs';
import HappyCustomers from './Content/Content-6/HappyCustomers';
import Footer from './Footer/Footer';
import Copyright from './Copyright and T&C/Copyright';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar1 />
    <Navbar2 />
    <Navbar3 />
    <Content />
    <Section />
    <Registration />
    <WhyUs />
    <JoinUs />
    <HappyCustomers/>
    <Footer />
    <Copyright />
  </React.StrictMode>
);
