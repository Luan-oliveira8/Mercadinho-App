import { useForm } from "react-hook-form";
import Radio from "./components/radio/Radio";
import { RadioOption } from "./components/radio/RadioProps";
import AppRoutes from "./routes/AppRoutes";
import Cart from "./views/cartManage/CartManageView";
import { useEffect } from "react";

interface FormValues {
  isActive: string;
}

function App() {
  const formProps = useForm<FormValues>({
    defaultValues: {
      isActive: "true",
    },
  });

  const isActive = formProps.watch("isActive");

  useEffect(
    () => {
      console.log(formProps.getValues());
    }, // eslint-disable-next-line
    [isActive]
  );

  const radioOptions: RadioOption[] = [
    { name: "option1", label: "Sim", value: "true" },
    { name: "option2", label: "Não", value: "false" },
  ];
  return (
    <>
      <AppRoutes />
      {/* <Cart></Cart> */}
      {/* <Radio
        name="isActive"
        control={formProps.control}
        options={radioOptions}
      /> */}
    </>
  );
}

export default App;
