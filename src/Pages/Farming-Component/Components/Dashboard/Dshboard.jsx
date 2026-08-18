import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <dv>
      <div className="app">
        {/* ================= SIDEBAR ================= */}
        <aside className="sidebar">
          <div className="logo">
            <div className="logo-icon">
              <i className="fa-solid fa-seedling"></i>
            </div>

            <div>
              <h2>
                Farm<span>Wise</span>
              </h2>
              <small>Budget Manager</small>
            </div>
          </div>

          <nav className="navigation">
            <p className="menu-title">MAIN MENU</p>

            <a href="#" className="nav-item active">
              <i className="fa-solid fa-chart-pie"></i>
              <span>Dashboard</span>
            </a>

            <a href="#" className="nav-item">
              <i className="fa-solid fa-wheat-awn"></i>
              <span>Crops</span>
            </a>

            <a href="#" className="nav-item">
              <i className="fa-solid fa-wallet"></i>
              <span>Budget</span>
            </a>

            <a href="#" className="nav-item">
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>Expenses</span>
            </a>

            <a href="#" className="nav-item">
              <i className="fa-solid fa-money-bill-trend-up"></i>
              <span>Income</span>
            </a>

            <a href="#" className="nav-item">
              <i className="fa-solid fa-boxes-stacked"></i>
              <span>Inventory</span>
            </a>

            <p className="menu-title">MANAGEMENT</p>

            <a href="#" className="nav-item">
              <i className="fa-solid fa-users"></i>
              <span>Labour</span>
            </a>

            <a href="#" className="nav-item">
              <i className="fa-solid fa-tractor"></i>
              <span>Equipment</span>
            </a>

            <a href="#" className="nav-item">
              <i className="fa-solid fa-building-columns"></i>
              <span>Loans</span>
            </a>

            <a href="#" className="nav-item">
              <i className="fa-solid fa-file-lines"></i>
              <span>Reports</span>
            </a>

            <p className="menu-title">SYSTEM</p>

            <a href="#" className="nav-item">
              <i className="fa-solid fa-gear"></i>
              <span>Settings</span>
            </a>
          </nav>

          <div className="sidebar-bottom">
            <div className="help-box">
              <div className="help-icon">
                <i className="fa-solid fa-circle-question"></i>
              </div>

              <div>
                <strong>Need Help?</strong>
                <p>Contact support</p>
              </div>
            </div>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}

        <main className="main-content">
          {/* ================= HEADER ================= */}

          <header className="topbar">
            <div className="mobile-menu">
              <i className="fa-solid fa-bars"></i>
            </div>

            <div className="page-title">
              <h1>Dashboard</h1>
              <p>Here's what's happening on your farm today.</p>
            </div>

            <div className="header-actions">
              <button className="icon-button">
                <i className="fa-regular fa-bell"></i>
                <span className="notification-dot"></span>
              </button>

              <div className="date-selector">
                <i className="fa-regular fa-calendar"></i>
                <span>July 2026</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>

              <div className="profile">
                <div className="profile-image">AU</div>

                <div className="profile-info">
                  <strong>Ankit Udan</strong>
                  <span>Farm Owner</span>
                </div>

                <i className="fa-solid fa-chevron-down profile-arrow"></i>
              </div>
            </div>
          </header>

          {/* ================= DASHBOARD BODY ================= */}

          <div className="dashboard-content">
            {/* ================= SUMMARY CARDS ================= */}

            <section className="summary-grid">
              {/* Total Budget */}

              <div className="summary-card">
                <div className="card-top">
                  <div className="card-icon green">
                    <i className="fa-solid fa-wallet"></i>
                  </div>

                  <span className="percentage positive">
                    <i className="fa-solid fa-arrow-up"></i>
                    8.2%
                  </span>
                </div>

                <p>Total Budget</p>

                <h2>₹2,50,000</h2>

                <span className="card-description">Compared to last month</span>
              </div>

              {/* Total Expenses */}

              <div className="summary-card">
                <div className="card-top">
                  <div className="card-icon red">
                    <i className="fa-solid fa-money-bill-wave"></i>
                  </div>

                  <span className="percentage negative">
                    <i className="fa-solid fa-arrow-up"></i>
                    5.4%
                  </span>
                </div>

                <p>Total Expenses</p>

                <h2>₹1,35,000</h2>

                <span className="card-description">
                  54% of total budget used
                </span>
              </div>

              {/* Expected Income */}

              <div className="summary-card">
                <div className="card-top">
                  <div className="card-icon blue">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>

                  <span className="percentage positive">
                    <i className="fa-solid fa-arrow-up"></i>
                    12.5%
                  </span>
                </div>

                <p>Expected Income</p>

                <h2>₹3,40,000</h2>

                <span className="card-description">
                  Expected from current crops
                </span>
              </div>

              {/* Expected Profit */}

              <div className="summary-card">
                <div className="card-top">
                  <div className="card-icon purple">
                    <i className="fa-solid fa-sack-dollar"></i>
                  </div>

                  <span className="percentage positive">
                    <i className="fa-solid fa-arrow-up"></i>
                    14.8%
                  </span>
                </div>

                <p>Expected Profit</p>

                <h2>₹2,05,000</h2>

                <span className="card-description">
                  Expected after expenses
                </span>
              </div>
            </section>

            {/* ================= CHART SECTION ================= */}

            <section className="charts-grid">
              {/* Income vs Expenses */}

              <div className="dashboard-card large-chart">
                <div className="section-header">
                  <div>
                    <h3>Income vs Expenses</h3>
                    <p>Monthly financial overview</p>
                  </div>

                  <select defaultValue="6">
                    <option value="6">Last 6 Months</option>
                    <option value="12">Last 12 Months</option>
                    <option value="year">This Year</option>
                  </select>
                </div>

                <div className="chart">
                  <div className="y-axis">
                    <span>₹1L</span>
                    <span>₹80K</span>
                    <span>₹60K</span>
                    <span>₹40K</span>
                    <span>₹20K</span>
                    <span>₹0</span>
                  </div>

                  <div className="chart-area">
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>

                    <div className="bars">
                      <div className="bar-group">
                        <div
                          className="bar income"
                          style={{ height: "55%" }}
                        ></div>

                        <div
                          className="bar expense"
                          style={{ height: "35%" }}
                        ></div>

                        <span>Feb</span>
                      </div>

                      <div className="bar-group">
                        <div
                          className="bar income"
                          style={{ height: "70%" }}
                        ></div>

                        <div
                          className="bar expense"
                          style={{ height: "40%" }}
                        ></div>

                        <span>Mar</span>
                      </div>

                      <div className="bar-group">
                        <div
                          className="bar income"
                          style={{ height: "62%" }}
                        ></div>

                        <div
                          className="bar expense"
                          style={{ height: "48%" }}
                        ></div>

                        <span>Apr</span>
                      </div>

                      <div className="bar-group">
                        <div
                          className="bar income"
                          style={{ height: "82%" }}
                        ></div>

                        <div
                          className="bar expense"
                          style={{ height: "52%" }}
                        ></div>

                        <span>May</span>
                      </div>

                      <div className="bar-group">
                        <div
                          className="bar income"
                          style={{ height: "72%" }}
                        ></div>

                        <div
                          className="bar expense"
                          style={{ height: "60%" }}
                        ></div>

                        <span>Jun</span>
                      </div>

                      <div className="bar-group">
                        <div
                          className="bar income"
                          style={{ height: "92%" }}
                        ></div>

                        <div
                          className="bar expense"
                          style={{ height: "65%" }}
                        ></div>

                        <span>Jul</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chart-legend">
                  <span>
                    <i className="legend income-legend"></i>
                    Income
                  </span>

                  <span>
                    <i className="legend expense-legend"></i>
                    Expenses
                  </span>
                </div>
              </div>

              {/* Expense Breakdown */}

              <div className="dashboard-card">
                <div className="section-header">
                  <div>
                    <h3>Expense Breakdown</h3>
                    <p>Where your money is going</p>
                  </div>

                  <button className="more-button">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </div>

                <div className="donut-container">
                  <div className="donut">
                    <div className="donut-center">
                      <strong>₹1.35L</strong>
                      <span>Total</span>
                    </div>
                  </div>
                </div>

                <div className="expense-list">
                  <div className="expense-item">
                    <div className="expense-name">
                      <i className="expense-dot seeds"></i>
                      <span>Seeds</span>
                    </div>
                    <strong>₹25,000</strong>
                  </div>

                  <div className="expense-item">
                    <div className="expense-name">
                      <i className="expense-dot fertilizer"></i>
                      <span>Fertilizer</span>
                    </div>
                    <strong>₹30,000</strong>
                  </div>

                  <div className="expense-item">
                    <div className="expense-name">
                      <i className="expense-dot labour"></i>
                      <span>Labour</span>
                    </div>
                    <strong>₹40,000</strong>
                  </div>

                  <div className="expense-item">
                    <div className="expense-name">
                      <i className="expense-dot fuel"></i>
                      <span>Fuel</span>
                    </div>
                    <strong>₹20,000</strong>
                  </div>

                  <div className="expense-item">
                    <div className="expense-name">
                      <i className="expense-dot pesticide"></i>
                      <span>Pesticides</span>
                    </div>
                    <strong>₹20,000</strong>
                  </div>
                </div>
              </div>
            </section>

            {/* ================= CROP + QUICK ACTION ================= */}

            <section className="middle-grid">
              {/* Crop Summary */}

              <div className="dashboard-card crop-card">
                <div className="section-header">
                  <div>
                    <h3>Crop Summary</h3>
                    <p>Current crops and estimated returns</p>
                  </div>

                  <button className="outline-button">
                    View All
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>

                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Crop</th>
                        <th>Area</th>
                        <th>Investment</th>
                        <th>Expected Income</th>
                        <th>Profit</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <div className="crop-name">
                            <div className="crop-icon soybean">🌱</div>

                            <strong>Soybean</strong>
                          </div>
                        </td>

                        <td>5 Acres</td>
                        <td>₹60,000</td>
                        <td>₹1,80,000</td>

                        <td className="profit">₹1,20,000</td>

                        <td>
                          <span className="status active-status">Active</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="crop-name">
                            <div className="crop-icon cotton">🌿</div>

                            <strong>Cotton</strong>
                          </div>
                        </td>

                        <td>3 Acres</td>
                        <td>₹45,000</td>
                        <td>₹1,30,000</td>

                        <td className="profit">₹85,000</td>

                        <td>
                          <span className="status active-status">Active</span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="crop-name">
                            <div className="crop-icon wheat">🌾</div>

                            <strong>Wheat</strong>
                          </div>
                        </td>

                        <td>2 Acres</td>
                        <td>₹30,000</td>
                        <td>₹85,000</td>

                        <td className="profit">₹55,000</td>

                        <td>
                          <span className="status upcoming-status">
                            Upcoming
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}

              <div className="dashboard-card quick-card">
                <div className="section-header">
                  <div>
                    <h3>Quick Actions</h3>
                    <p>Manage your farm quickly</p>
                  </div>
                </div>

                <div className="quick-actions">
                  <button className="quick-action">
                    <div className="quick-icon green-bg">
                      <i className="fa-solid fa-plus"></i>
                    </div>

                    <div>
                      <strong>Add Expense</strong>
                      <span>Record new expense</span>
                    </div>

                    <i className="fa-solid fa-chevron-right"></i>
                  </button>

                  <button className="quick-action">
                    <div className="quick-icon blue-bg">
                      <i className="fa-solid fa-money-bill"></i>
                    </div>

                    <div>
                      <strong>Add Income</strong>
                      <span>Record crop sale</span>
                    </div>

                    <i className="fa-solid fa-chevron-right"></i>
                  </button>

                  <button className="quick-action">
                    <div className="quick-icon yellow-bg">
                      <i className="fa-solid fa-seedling"></i>
                    </div>

                    <div>
                      <strong>Add Crop</strong>
                      <span>Create new crop</span>
                    </div>

                    <i className="fa-solid fa-chevron-right"></i>
                  </button>

                  <button className="quick-action">
                    <div className="quick-icon purple-bg">
                      <i className="fa-solid fa-file-export"></i>
                    </div>

                    <div>
                      <strong>Generate Report</strong>
                      <span>View financial report</span>
                    </div>

                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </section>

            {/* ================= BOTTOM SECTION ================= */}

            <section className="bottom-grid">
              {/* Recent Transactions */}

              <div className="dashboard-card transactions-card">
                <div className="section-header">
                  <div>
                    <h3>Recent Transactions</h3>
                    <p>Your latest income and expenses</p>
                  </div>

                  <button className="outline-button">
                    View All
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>

                <div className="transactions">
                  <div className="transaction">
                    <div className="transaction-icon expense-icon">
                      <i className="fa-solid fa-droplet"></i>
                    </div>

                    <div className="transaction-details">
                      <strong>Fertilizer Purchase</strong>
                      <span>Today • Fertilizer</span>
                    </div>

                    <strong className="amount expense-amount">-₹12,000</strong>
                  </div>

                  <div className="transaction">
                    <div className="transaction-icon expense-icon">
                      <i className="fa-solid fa-gas-pump"></i>
                    </div>

                    <div className="transaction-details">
                      <strong>Diesel</strong>
                      <span>Yesterday • Fuel</span>
                    </div>

                    <strong className="amount expense-amount">-₹3,500</strong>
                  </div>

                  <div className="transaction">
                    <div className="transaction-icon income-icon">
                      <i className="fa-solid fa-wheat-awn"></i>
                    </div>

                    <div className="transaction-details">
                      <strong>Crop Sale</strong>
                      <span>20 Jul • Soybean</span>
                    </div>

                    <strong className="amount income-amount">+₹45,000</strong>
                  </div>

                  <div className="transaction">
                    <div className="transaction-icon expense-icon">
                      <i className="fa-solid fa-users"></i>
                    </div>

                    <div className="transaction-details">
                      <strong>Labour Payment</strong>
                      <span>18 Jul • Labour</span>
                    </div>

                    <strong className="amount expense-amount">-₹8,000</strong>
                  </div>
                </div>
              </div>

              {/* Alerts */}

              <div className="dashboard-card alerts-card">
                <div className="section-header">
                  <div>
                    <h3>Alerts & Reminders</h3>
                    <p>Important updates</p>
                  </div>

                  <span className="alert-count">4</span>
                </div>

                <div className="alerts">
                  <div className="alert warning">
                    <div className="alert-icon">
                      <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>

                    <div>
                      <strong>Low Fertilizer Stock</strong>
                      <p>Only 5 bags remaining.</p>
                    </div>
                  </div>

                  <div className="alert danger">
                    <div className="alert-icon">
                      <i className="fa-solid fa-calendar-days"></i>
                    </div>

                    <div>
                      <strong>Loan EMI Due</strong>
                      <p>₹8,500 due in 5 days.</p>
                    </div>
                  </div>

                  <div className="alert info">
                    <div className="alert-icon">
                      <i className="fa-solid fa-cloud-rain"></i>
                    </div>

                    <div>
                      <strong>Rain Expected</strong>
                      <p>Rain expected tomorrow.</p>
                    </div>
                  </div>

                  <div className="alert success">
                    <div className="alert-icon">
                      <i className="fa-solid fa-tractor"></i>
                    </div>

                    <div>
                      <strong>Irrigation Scheduled</strong>
                      <p>Tomorrow at 6:00 AM.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </dv>
  );
};

export default Dashboard;
