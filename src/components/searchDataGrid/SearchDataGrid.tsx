import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { Table } from "reactstrap";
import { SearchDataGridProps } from "./SearchDataGridProps";
import { OK } from "../../utils/enums/httpStatusCodeTypeEnum/HttpStatusCodeTypeEnum";

const SearchDataGrid = ({
  data,
  columns,
  editUrl,
  deleteUrl,
}: SearchDataGridProps<any>) => {
  const [focusedRow, setFocusedRow] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleRowClick = (index: number) => {
    setFocusedRow(index);
  };

  const handleEdit = (selectedItem: any) => {
    navigate(editUrl, { state: { selectedItem } });
  };

  const handleDelete = async (selectedItem: any) => {
    try {
      const response = await axios.delete(`${deleteUrl}${selectedItem.id}`);
      if (response.status === OK.value) {
        console.log();
      } else {
        console.log("Failed to delete the product. Please try again later.");
      }
    } catch (error: any) {
      console.log(`Something went wrong status: ${error.status}.`);
    }
  };

  return (
    <div className="table-responsive text-center">
      <Table bordered>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>#</th>
            {columns.map((column, index) => (
              <th key={index} style={{ width: column.width || "auto" }}>
                {column.label}
              </th>
            ))}
            <th style={{ width: "10%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={focusedRow === index ? "table-active" : ""}
              onClick={() => handleRowClick(index)}
              style={{ cursor: "pointer" }}
            >
              <td className="text-center">{index + 1}</td>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{String(item[column.key])}</td>
              ))}
              <td>
                <MdModeEdit
                  className="me-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEdit(item)}
                />
                <FaTimes
                  className="me-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SearchDataGrid;
