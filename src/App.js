import React , {Suspense , Fragment } from 'react';
import Login from './Pages/Login/Login';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import history from './Components/History';
import Loader from './Components/Loader/LoaderModal';
const CheckUserStatus = React.lazy(() => import('./Components/checkUserStatus/UserStatus'));
const Contact = React.lazy(() => import('./Pages/content/content'));
const AddClockPhoto = React.lazy(() => import('./Pages/AddPhoto/AddClockPhoto'));
const AddFramePhoto = React.lazy(() => import('./Pages/AddPhoto/AddFramePhoto'));
const EditProductDetails = React.lazy(() => import('./Pages/EditProductDetails/EditProductDetails'));

class App extends React.Component{
  render(){
    return(
      <Fragment> 
        <Suspense fallback={<Loader text='Loading' />}>
        <Router history={history}>
          <Switch>
          <Route exact path="/">
              <CheckUserStatus />
            </Route>
            <Route  path="/home">
              <Contact />
            </Route>
            <Route  path="/login">
                <Login  />
            </Route>
            <Route  path="/AddClockImages">
                <AddClockPhoto  />
            </Route>
            <Route  path="/AddFrameImages">
                <AddFramePhoto  />
            </Route>
            <Route  path="/EditProductDetails">
                <EditProductDetails  />
            </Route>
          </Switch>
        </Router>
        </Suspense>
      </Fragment>
    );
  }
}
export default App;