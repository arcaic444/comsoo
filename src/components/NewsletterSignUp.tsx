import React, { useState } from 'react';

const NewsletterSignUp: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add the functionality to handle the sign up to the newsletter
    console.log(email);
  };

  return (
    <div id="newsletter-signup">
      <h2>Sign up for our newsletter</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default NewsletterSignUp;