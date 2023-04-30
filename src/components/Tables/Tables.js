import React from "react";
import Navbar from "../Navbar/Navbar";
import "./tables.scss";
import TableLayout from "./TableLayout";

const tableData = [
  { First: "Mark", Last: "Otto", Handle: "@mdo" },
  { First: "Jacob", Last: "Thornton", Handle: "@fat" },
  { First: "Larry", Last: "the sky", Handle: "@twitter" },
  { First: "hassan", Last: "the moon", Handle: "@google" },
  { First: "usman", Last: "the Bird", Handle: "@youtube" },
];

const tableColor = {
  bodyColor: "#212529",
  tableColor: "#343A40",
  textColor: "#fff",
  rowColor: "#F2F2F2",
};
const lightGray = "#F2F2F2";

const Tables = () => {
  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <section className="tables_section my-5">
          <div className="container">
            <h2>Tables</h2>
          </div>
          <div className="row">
            <TableLayout tableData={tableData} title="Default table" />
            <TableLayout tableData={tableData} title="Table with hover" />
            <TableLayout
              tableData={tableData}
              lightGray={lightGray}
              title="Striped table"
            />
            <TableLayout
              tableData={tableData}
              tableColor={tableColor}
              title="Dark table"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Tables;
