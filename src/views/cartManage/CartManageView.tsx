import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
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
import ProductSearchModal from "../../components/productSearchModal/ProductSearchModal";
import { ColumnProps } from "../../components/searchDataGrid/SearchDataGridProps";
import {
  listIsEmpty,
  listIsNotEmpty,
} from "../../utils/validationUtils/validationUtils";
import ListDataGrid from "../../components/listDataGrid/ListDataGrid";

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
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [modal, setModal] = useState<React.ReactNode>(null);
  const modalRef = useRef<any>(null);
  const listRef = useRef<any>(null);

  useEffect(
    () => {
      findData();
    }, // eslint-disable-next-line
    []
  );

  const columnsModal: ColumnProps[] = [
    { key: "name", label: "Product", width: "20%" },
    { key: "barcode", label: "Barcode", width: "20%" },
    { key: "selPrice", label: "Sell price", width: "15%" },
  ];

  const columnsListDataGrid: ColumnProps[] = [
    { key: "name", label: "Product", width: "20%" },
    { key: "barcode", label: "Barcode", width: "20%" },
    { key: "selPrice", label: "Sell price", width: "15%" },
    { key: "quantity", label: "Quantity", width: "15%" },
  ];

  const openModal = (filterdProducts: Product[]) => {
    setModal(
      <ProductSearchModal
        ref={modalRef}
        closeModal={closeModal}
        titleModal="Products filtred"
        subimitModal={handleSubmitModal}
        data={filterdProducts}
        columns={columnsModal}
      />
    );
  };

  const handleSubmitModal = () => {
    if (listIsNotEmpty(modalRef.current.getSelectedItems())) {
      updateCartItems(modalRef.current.getSelectedItems());
      closeModal();
    } else {
      showError("At least one product must be selected");
    }
  };

  const updateCartItems = (selectedItems: Product[]) => {
    if (listIsEmpty(cartProducts)) {
      setCartProducts(selectedItems.map((item) => ({ ...item, quantity: 1 })));
    } else {
      filterCartItens(selectedItems);
    }
  };

  const filterCartItens = (selectedItems: Product[]) => {
    let tempCartItems: Product[] = [...cartProducts];
    selectedItems.forEach((newProduct) => {
      const existingProduct = tempCartItems.find(
        (oldProduct) => oldProduct.id === newProduct.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        tempCartItems.push({ ...newProduct, quantity: 1 });
      }
    });

    setCartProducts(tempCartItems);
  };

  const closeModal = () => {
    setModal(null);
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
      showError(`Something went wrong status: ${error.status}.`);
    }
  };

  const radioOptions = [
    { name: "barcode", label: "Barcode", value: "barcode" },
    { name: "name", label: "Product Name", value: "name" },
  ];

  const searchProducts = () => {
    let filterdProducts;
    if (formProps.getValues().searchType === "name") {
      filterdProducts = data.filter((it) =>
        it.name.toLowerCase().includes(watchSearch.toLowerCase())
      );
    } else {
      filterdProducts = data.filter((it) =>
        it.barcode.toLowerCase().includes(watchSearch.toLowerCase())
      );
    }
    openModal(filterdProducts);
  };

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

  return (
    <div>
      {modal}
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
      <ListDataGrid
        ref={listRef}
        data={cartProducts}
        columns={columnsListDataGrid}
        className={cx("mt-2", { "d-none": listIsEmpty(data) })}
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
        onDeleteProduct={onDeleteProduct}
      />
    </div>
  );
};

export default CartManageView;
