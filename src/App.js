import React , {Suspense , Fragment } from 'react';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp'
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import history from './Components/History';
import Loader from './Components/Loader/LoaderModal';
import Header from './Components/Header/Header'
// const Header = React.lazy(() => import('./Components/Header/Header'));
const CheckUserStatus = React.lazy(() => import('./Components/checkUserStatus/UserStatus'));
const Contact = React.lazy(() => import('./Pages/content/content'));
const Cart = React.lazy(() => import('./Pages/Cart/Cart'));
const ProductHistory = React.lazy(() => import('./Pages/UserProductHistory/ProductHistory'));
const AdminOrder = React.lazy(() => import('./Pages/AdminGetOrder/AdminOrder'));
const AddClockPhoto = React.lazy(() => import('./Pages/AddPhoto/AddClockPhoto'));
const AddFramePhoto = React.lazy(() => import('./Pages/AddPhoto/AddFramePhoto'));
const EditProductDetails = React.lazy(() => import('./Pages/EditProductDetails/EditProductDetails'));
const ShowProductDetails = React.lazy(() => import('./Pages/ShowProductDetails/ShowProductDetails'));

class App extends React.Component{
  render(){
    return(
      <Fragment> 
        <Suspense fallback={<Loader text='Loading' />}>
        
        <Router history={history}>
         {/* <Header /> */}
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
            <Route  path="/signUp">
                <SignUp  />
            </Route>
            <Route  path="/Cart">
                <Cart  />
            </Route>
            <Route  path="/AdminOrder">
                <AdminOrder  />
            </Route>
            <Route  path="/ProductHistory">
                <ProductHistory  />
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
            <Route  path="/ShowProductDetails">
                <ShowProductDetails />
                {/* state={history.location.state}  */}
            </Route>
          </Switch>
        </Router>
        </Suspense>
      </Fragment>
    );
  }
}
export default App;