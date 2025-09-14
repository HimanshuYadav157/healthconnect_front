import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

class Dashboard extends Component {
  state = {
    totalPatients: 120,
    totalDoctors: 25,
    totalAppointments: 42,
    totalBilling: 15,
    totalPharmacy: 80,
  };

  componentDidMount() {
    console.log("Dashboard Loaded");
  }

  render() {
    const { totalPatients, totalDoctors, totalAppointments, totalBilling, totalPharmacy } = this.state;

    const data = {
      labels: ["Patients", "Doctors", "Appointments", "Billing", "Pharmacy"],
      datasets: [
        {
          label: "Hospital Overview",
          data: [totalPatients, totalDoctors, totalAppointments, totalBilling, totalPharmacy],
          backgroundColor: [
            "#4e73df",
            "#1cc88a",
            "#36b9cc",
            "#f6c23e",
            "#e74a3b",
          ],
          borderColor: ["#fff"],
          borderWidth: 2,
        },
      ],
    };

    return (
      <div className="dashboard-container">
        <h2>Welcome to HealthConnect Dashboard!</h2>

        <div className="cards-container">
          <div className="dashboard-card">
            <h3>Patients</h3>
            <p>{totalPatients}</p>
          </div>
          <div className="dashboard-card">
            <h3>Doctors</h3>
            <p>{totalDoctors}</p>
          </div>
          <div className="dashboard-card">
            <h3>Appointments</h3>
            <p>{totalAppointments}</p>
          </div>
          <div className="dashboard-card">
            <h3>Billing</h3>
            <p>{totalBilling}</p>
          </div>
          <div className="dashboard-card">
            <h3>Pharmacy</h3>
            <p>{totalPharmacy}</p>
          </div>
        </div>

        <div className="chart-container">
          <h3>Hospital Overview</h3>
          <Pie data={data} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
