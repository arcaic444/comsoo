import React from 'react';
import './ComingSoon.css';
import NewsletterSignUp from './NewsletterSignUp';

const ComingSoon: React.FC = () => {
  return (
    <div className="coming-soon">
      <h1>Coming Soon</h1>
      <p>We're working hard to finish the development of this site. Our target launch date is:</p>
      <div className="launch-date">January 2023</div>
      <p>Sign up for updates using the form below:</p>
      <NewsletterSignUp />
    </div>
  );
}

export default ComingSoon;