import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/user/slice";
import Button from "./components/Button/Button";

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
    <>
      <div>
        <p>Login</p>
        <Button label="Login" onClick={handleLogin} />
        <Button label="Logout" onClick={handleLogout} />
      </div>
    </>
  );
}

export default App;
