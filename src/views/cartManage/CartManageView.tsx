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
import { Col, Row } from "reactstrap";

interface ExtraFields {
  searchType: string;
  search: string;
}

const CartManageView: React.FC = () => {
  const formProps = useForm<CartManageProps & ExtraFields>({
    defaultValues: { searchType: "barcode" },
  });
  const watchSearch = formProps.watch("search");
  const { showError } = useNotification();
  const [data, setData] = useState<Product[]>([]);
  const [filterdProducts, setFilterdProducts] = useState<Product[]>([]);

  useEffect(
    () => {
      findData();
    }, // eslint-disable-next-line
    []
  );

  useEffect(() => {
    console.log(filterdProducts);
  }, [filterdProducts]);

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

  const searchProducts = () => {
    setFilterdProducts(
      data.filter((it) =>
        it.name.toLowerCase().includes(watchSearch.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      <Row>
        <Col xs="6">
          <InputGroup
            name="search"
            label="Search Products"
            type="text"
            control={formProps.control}
            labelButton="Search"
            onclickButton={searchProducts}
          />
        </Col>
      </Row>
      <Radio
        className="ms-3"
        name="searchType"
        options={radioOptions}
        control={formProps.control}
      />
    </div>
  );
};

export default CartManageView;
