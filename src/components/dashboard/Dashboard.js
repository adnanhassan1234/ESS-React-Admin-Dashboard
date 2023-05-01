import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./dashboard.scss";
import CardListData from "./CardListData";
import DashboardBarChart from "./Barchart/DashboardBarChart";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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


const data = [
  {
    catagery :"electronics",
    price:"1994.99",
  },
  {
    catagery :"jewelery",
    price:"1994.99",
  },

  {
    catagery :"men's clothing",
    price:"204",
  },
  {
    catagery :"women's clothing",
    price:"57.72",
  },
]

const BASE_URL = "https://fakestoreapi.com/products";

function Dashboard() {


  const navigate = useNavigate();
  const [chartData, setChartData] = useState([]);
  console.log("🚀 ~ file: Dashboard.js:58 ~ Dashboard ~ chartData:", chartData)
  const [loading, setLoading] = useState(false);

  
    const fetchProductsData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setChartData(data);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };
   

  useEffect(() => {
    fetchProductsData();
    if (!localStorage.getItem('accessToken')) {
      navigate('/');
    }
  }, []);

  
  const chartContent = chartData.reduce((acc, curr) => {
    const category = curr.category;
    const price = curr.price;
  
    const categoryIndex = acc.findIndex((el) => el.category === category);
  
    if (categoryIndex !== -1) {
      acc[categoryIndex].price += price;
    } else {
      acc.push({
        category,
        price
      });
    }
  
    return acc;
  }, []);
 
  

  if (!loading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }


  return (
    <div className="dashboard-container">
      <Navbar />
      {/* dashboard card */}
      <section className="main_layout">
        <div className="dashboard_card my-5">
          <div className="container">
            <div className="row">
              {cardData?.map((content, ind) => {
                return <CardListData key={ind} {...content} />;
              })}
            </div>
          </div>
        </div>

        {/* Bar-chart & Notification */}
        <div className="chart_notification my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12 mb-3">
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
                    <DashboardBarChart chartContent={chartContent}  />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12">
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
