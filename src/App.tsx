import SearchDataGrid from "./components/searchDataGrid/SearchDataGrid";
import CreateProductView from "./views/productRegister/ProductRegisterView";
import UserRegisterView from "./views/userRegister/UserRegisterView";
import UserLoginView from "./views/userlogin/UserLoginView";
import ProductListView from "./views/productListView/ProductListView";

function App() {
  return (
    <>
      {/* <UserRegisterView /> */}
      {/* <UserLoginView /> */}
      {/* <CreateProductView /> */}
      {/* <div className="App">
        <h1>Search Data Grid</h1>
        <SearchDataGrid data={data} columns={columns} />
      </div> */}
      <ProductListView />
    </>
  );
}

export default App;
