import React, { useState } from "react";
import { Product } from "../../models/product/Product";
import InputGroup from "../../components/inputGroup/InputGroup";
import { useForm } from "react-hook-form";
import { CartManageProps } from "./CartManageProps";

const Cart: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"barcode" | "name">("name");
  const [receivedAmount, setReceivedAmount] = useState<number | "">("");
  const [products] = useState<Product[]>([
    { name: "Apple", barcode: "1", selPrice: 1.5, quantity: 0 },
    { name: "Banana", barcode: "2", selPrice: 1.2, quantity: 0 },
    { name: "Orange", barcode: "3", selPrice: 1.8, quantity: 0 },
  ]);

  const formProps = useForm<CartManageProps>();

  const handleSearch = () => {
    const product = products.find((p) =>
      searchType === "barcode"
        ? p.barcode.toString() === searchQuery
        : p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (product) {
      const existingItem = items.find(
        (item) => item.barcode === product.barcode
      );
      if (existingItem) {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.barcode === product.barcode
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
      }
      setSearchQuery("");
    } else {
      alert("Product not found");
    }
  };

  const handleRemove = (barcode: number) => {
    setItems((prevItems) =>
      prevItems.filter((item: any) => item.barcode !== barcode)
    );
  };

  const handleUpdateQuantity = (barcode: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item: any) =>
        item.barcode === barcode
          ? { ...item, quantity: quantity > 0 ? quantity : 1 }
          : item
      )
    );
  };

  const calculateChange = (): number => {
    const total = items.reduce(
      (total, item) => total + item.selPrice * item.quantity,
      0
    );
    return receivedAmount ? Math.max(receivedAmount - total, 0) : 0;
  };

  const handleFinalizePurchase = () => {
    if (
      receivedAmount === "" ||
      receivedAmount <
        items.reduce((total, item) => total + item.selPrice * item.quantity, 0)
    ) {
      alert("Insufficient amount received");
      return;
    }
    alert("Purchase finalized!");
    setItems([]);
    setReceivedAmount("");
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      <div>
        <InputGroup
          name="search"
          label={`Search by ${searchType}`}
          type="text"
          control={formProps.control}
        />
        <div>
          <label>
            <input
              type="radio"
              name="searchType"
              value="name"
              checked={searchType === "name"}
              onChange={() => setSearchType("name")}
            />
            Product Name
          </label>
          <label>
            <input
              type="radio"
              name="searchType"
              value="barcode"
              checked={searchType === "barcode"}
              onChange={() => setSearchType("barcode")}
            />
            Barcode
          </label>
        </div>
        <button onClick={handleSearch}>Add Product</button>
      </div>

      {items.map((item: any) => (
        <div key={item.barcode}>
          <span>{item.name}</span>
          <span>$ {item.selPrice.toFixed(2)}</span>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              handleUpdateQuantity(item.barcode, Number(e.target.value))
            }
          />
          <button onClick={() => handleRemove(item.barcode)}>Remove</button>
        </div>
      ))}

      <h3>
        Total: ${" "}
        {items
          .reduce((total, item) => total + item.selPrice * item.quantity, 0)
          .toFixed(2)}
      </h3>

      <div>
        <label>Amount Received:</label>
        <input
          type="number"
          value={receivedAmount}
          onChange={(e) =>
            setReceivedAmount(
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
        />
      </div>

      <h3>Change: $ {calculateChange().toFixed(2)}</h3>

      <button onClick={handleFinalizePurchase}>Finalize Purchase</button>
    </div>
  );
};

export default Cart;
