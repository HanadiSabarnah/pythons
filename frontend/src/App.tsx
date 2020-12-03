import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import SignInPage from './Auth/Signinpage';
import SignUpPage from './Auth/Signupage';
// import Homepage from './Components/Homepage/Homepage';

// import { connect } from 'react-redux'
// import { Dispatch } from 'redux'
// import { AppState } from './store/rootStore'
// import 'reset-css'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  }
}))


const App = () => {
  const classes = useStyles();
  return (
    // <Homepage />
    <div className={classes.container}>
      <Router>
        <Switch>
          {/* <Route exact from="/" render={props => <Home {...props} />} /> */}
          <Route exact path="/signup" render={() => <SignUpPage />} />
          <Route exact path="/signin" render={() => <SignInPage />} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;