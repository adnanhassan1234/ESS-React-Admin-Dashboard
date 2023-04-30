import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./dashboard.scss";
import CardListData from "./CardListData";
import DashboardBarChart from "./Barchart/DashboardBarChart";

const cardData = [
  {
    icon: <i className="fa fa-user" aria-hidden="true"></i>,
    bgColor: "#3F84FC",
    title: "Sign ups",
    price: "114",
    discount: "+25%",
  },
  {
    icon: <i className="fa fa-shopping-cart" aria-hidden="true"></i>,
    title: "Revenue",
    bgColor: "#1DAB47",
    price: "$25,541",
    discount: "+17.5%",
  },
  {
    icon: <i className="fa fa-phone" aria-hidden="true"></i>,
    title: "Open tickets",
    price: "5",
    bgColor: "#FC413F",
    discount: "+11.9%",
  },
];

const NotificationData = [
  {
    icon: <i class="fa fa-inbox"> </i>,
    notification: "New comment",
    time: "21 days ago",
  },
  {
    icon: <i class="fa fa-inbox"> </i>,
    notification: "New comment",
    time: "21 days ago",
  },
  {
    icon: <i class="fa fa-inbox"> </i>,
    notification: "New comment",
    time: "21 days ago",
  },
];

function Dashboard() {
  const [item, setItem] = useState(cardData);

  return (
    <div className="dashboard-container">
      <Navbar />
      {/* dashboard card */}
      <section className="main_layout">
        <div className="dashboard_card my-5">
          <div className="container">
            <div className="row">
              {item?.map((content, ind) => {
                return <CardListData key={ind} {...content} />;
              })}
            </div>
          </div>
        </div>

        {/* Bar-chart & Notification */}
        <div className="chart_notification my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb-3">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <div className="bar-chart">
                      <i className="fa fa-bar-chart" aria-hidden="true"></i>
                      <b className="mx-3">Bar Chart</b>
                    </div>
                    <div class="dropdown">
                      <i
                        className="fa fa-caret-down btn dropdown-toggle"
                        aria-hidden="true"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></i>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body p-3 ms-0">
                    <DashboardBarChart />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                {/* Notification */}
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <div className="bell">
                      <i className="fa fa-bell" aria-hidden="true"></i>
                      <b className="mx-4">Notifications</b>
                    </div>
                  </div>
                  <div className="card-body ">
                    <div class="notifications">
                      {NotificationData?.map((content, ind) => {
                        return (
                          <>
                            <a href="#!" className="notification" key={ind}>
                              <div className="notification-icon my-3 d-flex  justify-content-between">
                                <div className="d-flex">
                                  {content.icon}
                                  <h6 className="mx-4">
                                    {content.notification}
                                  </h6>
                                </div>
                                <span className="notification-time">
                                  {content.time}
                                </span>
                              </div>
                            </a>
                          </>
                        );
                      })}
                      <div class="notifications-show-all">
                        <a
                          href="#!"
                          className="mx-5"
                          style={{ textDecoration: "underline" }}
                        >
                          Show all
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
