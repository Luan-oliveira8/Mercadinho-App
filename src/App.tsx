import React from "react";
import { useSelector, useDispatch } from "react-redux";
import UserActionTypes from "./redux/user/actionTypes";
import { loginUser, logoutUser } from "./redux/user/actions";
// import rootReducer from "./redux/rootReducer";

function App() {
  const { currentUser } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  );
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({ name: "teste", email: "teste@getMaxListeners.com" }));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  console.log(currentUser);
  return (
    <div>
      <p>Login</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
