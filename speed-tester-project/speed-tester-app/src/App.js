import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import TypingTest from './components/TypingTest';
//import Leaderboard from './components/Leaderboard';
//import UserProfile from './components/UserProfile';

const App = () => 
{
  return (
    
    <Router>
      <h>hii</h>
      {/* <Switch>
        <p>welcome to type speed test</p>
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/user/:userId" render={(props) => <UserProfile userId={props.match.params.userId} />} />
        <Route path="/" component={TypingTest} />
      </Switch> */}
      
    </Router>
  );
};

export default App;
