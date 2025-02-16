import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import { useForm } from "react-hook-form";
import { CartManageProps } from "./CartManageProps";
import Radio from "../../components/radio/Radio";
import axios from "axios";
import { GET_PRODUCTS } from "../../utils/enums/productUrlTypeEnum/ProductUrlTypeEnum";
import { Product } from "../../models/product/Product";
import { OK } from "../../utils/enums/httpStatusCodeTypeEnum/HttpStatusCodeTypeEnum";
import { useNotification } from "../../context/notificationContext/NotificationContext";
import { Col, Row } from "reactstrap";
import { ColumnProps } from "../../components/searchDataGrid/SearchDataGridProps";
import { listIsEmpty } from "../../utils/validationUtils/validationUtils";
import ListDataGrid from "../../components/listDataGrid/ListDataGrid";
import SearchInput from "../../components/searchInput/SearchInput";
import Button from "../../components/button/Button";
import GenericModal from "../../components/genericModal/GenericModal";
import CartCheckout from "../cartCheckout/CartCheckout";

const CartManageView: React.FC = () => {
  const formProps = useForm<CartManageProps>({
    defaultValues: { searchType: "barcode" },
  });
  const watchSearchType = formProps.watch("searchType");
  const { showError } = useNotification();
  const [data, setData] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const listRef = useRef<any>(null);
  const [modal, setModal] = useState<React.ReactNode>(null);

  useEffect(
    () => {
      findData();
    }, // eslint-disable-next-line
    []
  );

  const columnsListDataGrid: ColumnProps[] = [
    { key: "name", label: "Product", width: "20%" },
    { key: "barcode", label: "Barcode", width: "20%" },
    { key: "selPrice", label: "Sell price", width: "15%" },
    { key: "quantity", label: "Quantity", width: "15%" },
  ];

  const updateCartItems = (newProduct: Product) => {
    let tempCartItems: Product[] = [...cartProducts];
    const existingProduct = tempCartItems.find(
      (oldProduct) => oldProduct.id === newProduct.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      tempCartItems.push({ ...newProduct, quantity: 1 });
    }

    setCartProducts(tempCartItems);
  };

  const findData = async () => {
    try {
      const response = await axios.get(GET_PRODUCTS.value);

      if (response.status === OK.value) {
        setData(response.data);
      } else {
        showError("No data found");
      }
    } catch (error: any) {
      showError(error.response.data);
    }
  };

  const radioOptions = [
    { name: "barcode", label: "Barcode", value: "barcode" },
    { name: "name", label: "Product Name", value: "name" },
  ];

  const onIncreaseQuantity = (product: Product) => {
    product.quantity += 1;
    rerenderListDataGrid();
  };

  const onDecreaseQuantity = (product: Product) => {
    if (product.quantity > 1) {
      product.quantity -= 1;
      rerenderListDataGrid();
    } else {
      onDeleteProduct(product);
    }
  };

  const onDeleteProduct = (product: Product) => {
    setCartProducts(cartProducts.filter((it) => it.id !== product.id));
  };

  const rerenderListDataGrid = () => {
    listRef.current.forceRender();
  };

  const handleSelect = (item: any) => {
    updateCartItems(item);
  };

  const onSubmitCartManage = () => {
    setModal(
      <GenericModal
        isOpen={true}
        closeModal={() => setModal(false)}
        size="sm"
        titleModal="Teste"
        children={
          <CartCheckout
            parentData={cartProducts}
            onClickCancel={() => setModal(false)}
          />
        }
        hidenButtonCancel={true}
        hidenButtonSubmit={true}
      />
    );
  };

  return (
    <div>
      {modal}
      <h3>Shopping Cart</h3>
      <Row>
        <Col xs="6">
          <SearchInput
            data={data}
            onSelect={handleSelect}
            searchType={watchSearchType}
          />
        </Col>
      </Row>
      <Radio
        className="ms-3"
        name="searchType"
        options={radioOptions}
        control={formProps.control}
      />
      <ListDataGrid
        ref={listRef}
        data={cartProducts}
        columns={columnsListDataGrid}
        className={cx("mt-2", { "d-none": listIsEmpty(data) })}
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
        onDeleteProduct={onDeleteProduct}
      />
      <Button label="Submit" onClick={onSubmitCartManage} />
    </div>
  );
};

export default CartManageView;
