import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { userLoginWithToken } from "./redux/actions/login";

function App() {
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.user.isLogin);
  const isLoading = useSelector((state) => state.app.isLoading);
  const token = localStorage.getItem("token");
  // localStorage.clear()
  useEffect(() => {
    if (token) {
      dispatch(userLoginWithToken());
    }
  }, [dispatch, token]);

  return (
    <>
      <Route
        exact
        path="/login"
        render={() => <Login isLogin={isLogin} isLoading={isLoading} />}
      />
      <Route exact path="/">
        {!token && !isLogin ? <Redirect to="/login" /> : <Home />}
      </Route>
    </>
  );
}

const Home = () => {
  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  );
};

export default App;
