import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComingSoon from './components/ComingSoon';
import Logo from './components/Logo';
import NewsletterSignUp from './components/NewsletterSignUp';
import { AuthProvider } from './services/auth';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Logo />
            <ComingSoon />
            <NewsletterSignUp />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;