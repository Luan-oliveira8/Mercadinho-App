import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/user/slice";
import Button from "./components/button/Button";
import { ColorTypeEnum } from "./utils/enums/colorTypeEnum/ColorTypeEnum";
import UserRegisterView from "./views/UserRegisterView";

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
        <Button label="Login" onClick={handleLogin} />
        <Button
          label="Logout"
          onClick={handleLogout}
          color={ColorTypeEnum.PRIMARY.value}
          className="border-2 d-flex align-items-center outline-success"
        />
      </div>
      <UserRegisterView />
    </>
  );
}

export default App;
