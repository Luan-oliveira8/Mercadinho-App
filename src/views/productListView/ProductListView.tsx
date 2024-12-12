import React, { useEffect, useState } from "react";
import axios from "axios";
import { GET_PRODUCTS } from "../../utils/enums/productUrlTypeEnum/ProductUrlTypeEnum";
import { HttpStatusCodeTypeEnum } from "../../utils/enums/httpStatusCodeTypeEnum/HttpStatusCodeTypeEnum";
import SearchDataGrid from "../../components/searchDataGrid/SearchDataGrid";

const ProductListView: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    findProducts();
    console.log(products);
  }, [products]);

  const findProducts = async () => {
    try {
      const response = await axios.get(GET_PRODUCTS.value);

      if (response.status === HttpStatusCodeTypeEnum.OK) {
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
      <SearchDataGrid data={products} columns={columns} />
    </div>
  );
};

export default ProductListView;
