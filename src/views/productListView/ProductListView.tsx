import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  DELETE_PRODUCTS,
  GET_PRODUCTS,
} from "../../utils/enums/productUrlTypeEnum/ProductUrlTypeEnum";
import { OK } from "../../utils/enums/httpStatusCodeTypeEnum/HttpStatusCodeTypeEnum";
import SearchDataGrid from "../../components/searchDataGrid/SearchDataGrid";
import { Product } from "../../models/product/Product";
import { ROUTE_EDIT_PRODUCT } from "../../utils/enums/routeUrlTypeEnum/RouteUrlTypeEnum";

const ProductListView: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(
    () => {
      findProducts();
    }, // eslint-disable-next-line
    []
  );

  const findProducts = async () => {
    try {
      const response = await axios.get(GET_PRODUCTS.value);

      if (response.status === OK.value) {
        setProducts(response.data);
      } else {
        console.log("No products found");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

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
        data={products}
        columns={columns}
        editUrl={ROUTE_EDIT_PRODUCT.value}
        deleteUrl={DELETE_PRODUCTS.value}
      />
    </div>
  );
};

export default ProductListView;
