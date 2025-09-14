import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "../../modules/dashboard/Dashboard";
import PatientList from "../../modules/patients/PatientList";
import AddPatient from "../../modules/patients/AddPatient";
import DoctorList from "../../modules/doctors/DoctorList";
import AppointmentList from "../../modules/appointments/AppointmentList";
import BillList from "../../modules/billing/BillList";
import ReportList from "../../modules/reports/DailyReport";
import MedicineList from "../../modules/pharmacy/MedicineList";

class MainLayout extends Component {
  state = { sidebarOpen: true };

  toggleSidebar = () =>
    this.setState({ sidebarOpen: !this.state.sidebarOpen });

  render() {
    return (
      <Router>
        <div className="layout-container">
          <Header
            onLogout={this.props.onLogout}
            toggleSidebar={this.toggleSidebar}
          />
          <div className="layout-body">
            <Sidebar isOpen={this.state.sidebarOpen} />
            <div
              className="main-content"
              style={{ marginLeft: this.state.sidebarOpen ? 0 : 0 }}
            >
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/patients" component={PatientList} />
                <Route path="/add-patient" component={AddPatient} />
                <Route path="/doctors" component={DoctorList} />
                <Route path="/appointments" component={AppointmentList} />
                <Route path="/billing" component={BillList} />
                <Route path="/reports" component={ReportList} />
                <Route path="/pharmacy" component={MedicineList} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default MainLayout;
