import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { userLoginWithToken } from "./redux/actions/login";
import { SipProvider } from "react-sip";
import { Phone } from "./components/Phone/Phone";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLogin = useSelector((state) => state.user.isLogin);
  const isLoading = useSelector((state) => state.app.isLoading);
  const config = useSelector((state) => state.phone.config);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!isLogin && token) {
      dispatch(userLoginWithToken());
    } else if (!isLogin && !token) {
      history.push("/login");
    }
  }, [dispatch, token, history, isLogin]);

  const Home = () => {
    return (
      <div className="App">
        <h1>Home</h1>
        {config && <Phone config={config} />}
      </div>
    );
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <SipProvider
        host={config && config.host}
        uri={config && config.uri}
        user={config && config.name}
        pathname={config && config.via_transport}
        password={config && config.password}
        realm={config && config.realm}
        debug={false}
      >
        <Route
          exact
          path="/login"
          render={() => <Login isLogin={isLogin} isLoading={isLoading} />}
        />
        <Route exact path="/">
          {!token && !isLogin ? <Redirect to="/login" /> : <Home />}
        </Route>
      </SipProvider>
    </>
  );
}

export default App;
