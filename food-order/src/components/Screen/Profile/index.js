import React, { useState, useEffect } from "react";
import { Layout, Row, Col } from "antd";

import "./style.css";

const { Sider, Content } = Layout;
const Profile = () => {
  const [orderNo, setOrderNo] = useState(0);

  useEffect(() => {
    countdownNumbers(setOrderNo, 50);
  }, []);

  const countdownNumbers = (setNumbers, finalValue) => {
    let startValue = 0;
    const interval = setInterval(() => {
      if (startValue === finalValue - 1) {
        console.log(startValue, finalValue, "Clear");
        clearInterval(interval);
      } else {
        console.log(startValue, finalValue, "Change");
        startValue += 1;
        setNumbers(startValue + 1);
      }
    }, 100);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Sider
          width="20vw"
          className="sider-div"
          style={{ backgroundColor: "#fff", overflow: "auto" }}
        >
          <div className="profile-txt">
            <label>Profile</label>
          </div>
          <div className="profile-img"></div>
          <div className="profile-user-name"> Anne-Marrie</div>
        </Sider>
        <Layout>
          <Content style={{ padding: "1rem 2rem", overflow: "initial" }}>
            <div className="orders-desc">
              <Row
                className="order-statistic"
                gutter={8}
                justify="space-around"
              >
                <Col span={8} className="order-statistic-item">
                  <div className="statistic-tag">Your Orders</div>
                  <div className="statistic-amount">{orderNo}</div>
                </Col>
                <Col span={8} className="order-statistic-item">
                  <div className="statistic-tag">Your Orders</div>
                  <div className="statistic-amount">{orderNo}</div>
                </Col>
                <Col span={8} className="order-statistic-item">
                  <div className="statistic-tag">Your Orders</div>
                  <div className="statistic-amount">{orderNo}</div>
                </Col>
              </Row>
              {/* <div className="orders-heading">Your Orders</div>
              <div className="orders-list">
                <div className="order-item">
                  <div>
                    <div className="order-time">
                      May 29<sup>th</sup>,2021
                    </div>
                    <div className="order-item-name">Cheese Burst Pizza</div>
                  </div>
                </div>
                <div className="order-item">
                  <div>
                    <div className="order-time">
                      May 29<sup>th</sup>,2021
                    </div>
                    <div className="order-item-name">Cheese Burst Pizza</div>
                  </div>
                </div>
                <div className="order-item">
                  <div>
                    <div className="order-time">
                      May 29<sup>th</sup>,2021
                    </div>
                    <div className="order-item-name">Cheese Burst Pizza</div>
                  </div>
                </div>
                <div className="order-item">
                  <div>
                    <div className="order-time">
                      May 29<sup>th</sup>,2021
                    </div>
                    <div className="order-item-name">Cheese Burst Pizza</div>
                  </div>
                </div>
                <div className="order-item">
                  <div>
                    <div className="order-time">
                      May 29<sup>th</sup>,2021
                    </div>
                    <div className="order-item-name">Cheese Burst Pizza</div>
                  </div>
                </div>
                <div className="order-item">
                  <div>
                    <div className="order-time">
                      May 29<sup>th</sup>,2021
                    </div>
                    <div className="order-item-name">Cheese Burst Pizza</div>
                  </div>
                </div>
                <div className="order-item">
                  <div>
                    <div className="order-time">
                      May 29<sup>th</sup>,2021
                    </div>
                    <div className="order-item-name">Cheese Burst Pizza</div>
                  </div>
                </div>
                <div className="order-item">
                  <div>
                    <div className="order-time">
                      May 29<sup>th</sup>,2021
                    </div>
                    <div className="order-item-name">Cheese Burst Pizza</div>
                  </div>
                </div>
                <div className="order-item">
                  <div>
                    <div className="order-time">
                      May 29<sup>th</sup>,2021
                    </div>
                    <div className="order-item-name">Cheese Burst Pizza</div>
                  </div>
                </div>
              
            </div> */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Profile;
