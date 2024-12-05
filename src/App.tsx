import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/user/slice";

function App() {
  const { currentUser } = useSelector((state: any) => state.userReducer);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ name: "teste", email: "teste@getMaxListeners.com" }));
  };

  const handleLogout = () => {
    dispatch(logout());
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
