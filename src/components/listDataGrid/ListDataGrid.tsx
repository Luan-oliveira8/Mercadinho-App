import React, { useImperativeHandle, useState } from "react";
import { ListDataGridProps } from "./ListDataGridProps";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";

const ListDataGrid = React.forwardRef<{}, ListDataGridProps>(
  (
    {
      columns,
      data,
      className,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct,
    },
    ref
  ) => {
    const [, setUpdateState] = useState(false);

    const forceRender = () => {
      setUpdateState((prev) => !prev);
    };

    useImperativeHandle(ref, () => ({
      forceRender,
    }));

    return (
      <table
        style={{ width: "100%", borderCollapse: "collapse" }}
        className={className}
      >
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  width: col.width,
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {col.label}
              </th>
            ))}
            <th
              style={{
                width: "20%",
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {row[col.key]}
                </td>
              ))}
              <td
                style={{
                  textAlign: "center",
                  border: "1px solid #ddd",
                  padding: "8px",
                }}
              >
                <FaPlus
                  className="me-2"
                  style={{ cursor: "pointer", color: "green" }}
                  onClick={() => onIncreaseQuantity(row)}
                />
                <FaMinus
                  className="me-2"
                  style={{ cursor: "pointer", color: "orange" }}
                  onClick={() => onDecreaseQuantity(row)}
                />
                <FaTimes
                  className="me-2"
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => onDeleteProduct(row)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
);

export default ListDataGrid;
