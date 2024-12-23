import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CartManageProps } from "./CartManageProps";
import Radio from "../../components/radio/Radio";
import InputGroup from "../../components/inputGroup/InputGroup";
import axios from "axios";
import { GET_PRODUCTS } from "../../utils/enums/productUrlTypeEnum/ProductUrlTypeEnum";
import { Product } from "../../models/product/Product";
import { OK } from "../../utils/enums/httpStatusCodeTypeEnum/HttpStatusCodeTypeEnum";
import { useNotification } from "../../context/notificationContext/NotificationContext";

interface ExtraFields {
  searchType: string;
  search: string;
}

const CartManageView: React.FC = () => {
  const formProps = useForm<CartManageProps & ExtraFields>({
    defaultValues: { searchType: "barcode" },
  });
  const { showError } = useNotification();
  const [data, setData] = useState<Product[]>([]);

  useEffect(
    () => {
      findData();
    }, // eslint-disable-next-line
    []
  );

  console.log(data);

  const findData = async () => {
    try {
      const response = await axios.get(GET_PRODUCTS.value);

      if (response.status === OK.value) {
        setData(response.data);
      } else {
        showError("No data found");
      }
    } catch (error: any) {
      showError(`Something went wrong status: ${error.status}.`);
    }
  };

  const radioOptions = [
    { name: "barcode", label: "Barcode", value: "barcode" },
    { name: "name", label: "Product Name", value: "name" },
  ];

  return (
    <div>
      <h3>Shopping Cart</h3>
      <div>
        <InputGroup
          name="search"
          label="Search"
          type="text"
          control={formProps.control}
        />
        <Radio
          className="ms-3"
          name="searchType"
          options={radioOptions}
          control={formProps.control}
        />
      </div>
    </div>
  );
};

export default CartManageView;
