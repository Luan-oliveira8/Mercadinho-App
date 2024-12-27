import { useState, forwardRef, useImperativeHandle } from "react";
import GenericModal from "../genericModal/GenericModal";
import { ProductSearchModalProps } from "./ProductSearchModalProps";

const ProductSearchModal = forwardRef((props: ProductSearchModalProps, ref) => {
  const { closeModal, subimitModal, titleModal, size, data, columns } = props;

  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  useImperativeHandle(ref, () => ({
    getSelectedItems: () => selectedItems,
  }));

  const handleAddItem = (item: any) => {
    if (!selectedItems.some((selected) => selected.id === item.id)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div>
      <GenericModal
        isOpen={true}
        closeModal={closeModal}
        size={size}
        titleModal={titleModal}
        subimitModal={subimitModal}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
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
                  width: "10%",
                  textAlign: "center",
                  border: "1px solid #ddd",
                  padding: "8px",
                }}
              >
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row: any, index) => (
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
                  <button
                    onClick={() => handleAddItem(row)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Adicionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Itens Selecionados</h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "16px",
          }}
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
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, index) => (
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
                    {item[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </GenericModal>
    </div>
  );
});

export default ProductSearchModal;
