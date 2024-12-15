import React from "react";
import {
  DELETE_PRODUCTS,
  GET_PRODUCTS,
} from "../../utils/enums/productUrlTypeEnum/ProductUrlTypeEnum";
import SearchDataGrid from "../../components/searchDataGrid/SearchDataGrid";
import { ROUTE_EDIT_PRODUCT } from "../../utils/enums/routeTypeEnum/RouteTypeEnum";

const ProductListView: React.FC = () => {
  const columns = [
    { key: "id", label: "ID", width: "20%" },
    { key: "name", label: "Product name", width: "20%" },
    { key: "barcode", label: "Barcode", width: "20%" },
    { key: "selPrice", label: "Sell price", width: "20%" },
  ];

  return (
    <div className="App">
      <h1>Search Data Grid</h1>
      <SearchDataGrid
        columns={columns}
        editUrl={ROUTE_EDIT_PRODUCT.value}
        deleteUrl={DELETE_PRODUCTS.value}
        getDataUrl={GET_PRODUCTS.value}
      />
    </div>
  );
};

export default ProductListView;
