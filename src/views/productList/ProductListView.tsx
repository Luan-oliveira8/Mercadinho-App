import React from "react";
import {
  DELETE_PRODUCTS,
  GET_PRODUCTS,
} from "../../utils/enums/productUrlTypeEnum/ProductUrlTypeEnum";
import SearchDataGrid from "../../components/searchDataGrid/SearchDataGrid";
import { ROUTE_EDIT_PRODUCT } from "../../utils/enums/routeTypeEnum/RouteTypeEnum";
import { ColumnProps } from "../../components/searchDataGrid/SearchDataGridProps";

const ProductListView: React.FC = () => {
  const columns: ColumnProps[] = [
    { key: "id", label: "ID", width: "15%" },
    { key: "name", label: "Product name", width: "20%" },
    { key: "barcode", label: "Barcode", width: "20%" },
    { key: "selPrice", label: "Sell price", width: "15%" },
    { key: "quantity", label: "Quantity", width: "15%" },
  ];

  return (
    <SearchDataGrid
      titleGrid="Products"
      columns={columns}
      editUrl={ROUTE_EDIT_PRODUCT.value}
      deleteUrl={DELETE_PRODUCTS.value}
      getDataUrl={GET_PRODUCTS.value}
    />
  );
};

export default ProductListView;
