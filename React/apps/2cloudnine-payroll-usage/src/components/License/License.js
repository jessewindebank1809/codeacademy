import React from "react";
import { Table } from "react-bootstrap";

class License extends React.Component {
  render() {
    return (
      <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th>Account</th>
            <th>Org ID</th>
            <th>Minimum</th>
            <th>Last Month</th>
            <th>Renewal Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.record.account}</td>
            <td>{this.props.record.orgid}</td>
            <td>{this.props.record.minimum}</td>
            <td>{this.props.record.last_month}</td>
            <td>{this.props.record.expiration}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default License;
