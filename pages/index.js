
import Header from "@/Components/Header/Header";
import Home from "@/Components/Pages/Home";
import SignUp from "@/Components/Pages/SignUp";
import Login from "@/Components/Pages/Login";
import Logout from "@/Components/Pages/Logout";
import ErrorPage from "@/Components/Pages/ErrorPage";

function App() {


  //console.log("app auth",auth)

  return (
    <Fragment>
      <Header />
      <Switch>
      <Route path='/home'>
          <Home />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/todo-list'>
        {/* {auth.isLoggedIn ? <Welcome />: <Redirect to='/login'/>} */}
        <Welcome />
        </Route>
        <Route path='/compose-mail'>
        {auth.isLoggedIn ? <ComposeMail />: <Redirect to='/login'/>}
          
        </Route>
       
        <Route path='/logout'>
          <Logout />
        </Route>
        <Route path="*">
          <ErrorPage/>
        </Route>
      </Switch>

      <Footer />
    </Fragment>

  );
}

export default App;