import { useState } from "react";
import { Table } from "reactstrap";
import { FaTimes } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { SearchDataGridProps } from "./SearchDataGridProps";

const SearchDataGrid = ({ data, columns }: SearchDataGridProps<any>) => {
  const [focusedRow, setFocusedRow] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setFocusedRow(index);
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
                <MdModeEdit className="me-2" style={{ cursor: "pointer" }} />
                <FaTimes className="me-2" style={{ cursor: "pointer" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SearchDataGrid;
