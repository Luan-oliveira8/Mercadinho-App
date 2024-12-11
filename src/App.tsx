import { useState } from "react";
import SearchDataGrid from "./components/searchDataGrid/SearchDataGrid";
import CreateProductView from "./views/productRegister/ProductRegisterView";
import UserRegisterView from "./views/userRegister/UserRegisterView";
import UserLoginView from "./views/userlogin/UserLoginView";

function App() {
  const [data] = useState([
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
  ]);

  const columns = [
    { key: "name", label: "Name", width: "20%" },
    { key: "email", label: "Email", width: "30%" },
  ];

  return (
    <>
      {/* <UserRegisterView /> */}
      {/* <UserLoginView /> */}
      {/* <CreateProductView /> */}
      <div className="App">
        <h1>Search Data Grid</h1>
        <SearchDataGrid data={data} columns={columns} />
      </div>
    </>
  );
}

export default App;
