import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/user/slice";
import Button from "./components/button/Button";
import { ColorTypeEnum } from "./utils/enums/colorTypeEnum/ColorTypeEnum";
import InputGroup from "./components/inputGroup/InputGroup";
import FormGroup from "./components/formGroup/FormGroup";

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
      <FormGroup labelButtonSubmit="Submit" labelButtonCancel="Cancel">
        <InputGroup id="idteste" label="teste" />
        <InputGroup id="idteste" label="teste" />
      </FormGroup>
    </>
  );
}

export default App;
