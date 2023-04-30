import React from "react";
import CardHeader from "../Charts/CardHeader";
import { useState } from "react";

const TableLayout = ({ tableData, title, tableColor , lightGray }) => {

  const [tableContent, setTableContent] = useState(tableData);

  const style = "none";
  const bgColor = "#F0F0F0";
  const icon = <i className="fa fa-table" aria-hidden="true"></i>;
  
  return (
    <>
      <div className="col-md-6 col-12">
        <div className="table_content my-3">
          <div class="card spur-card my-2">
            <CardHeader
              title={title}
              style={style}
              bgColor={bgColor}
              icon={icon}
            />
            <div
              className="card-body responsive"
              style={{ backgroundColor: tableColor?.bodyColor }}
            >
              <table
                className="table table-in-card responsive"
                style={{
                  backgroundColor: tableColor?.tableColor,
                  color: tableColor?.textColor,
                }}
              >
                <thead>
                  <tr className="heading">
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {tableContent?.map((content, ind) => {
                    return (
                      <tr key={ind} style={{ backgroundColor: ind % 2 !== 0 ? '' : lightGray }}>
                        <th scope="row">{ind + 1}</th>
                        <td>{content.First}</td>
                        <td>{content.Last}</td>
                        <td>{content.Handle}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableLayout;
