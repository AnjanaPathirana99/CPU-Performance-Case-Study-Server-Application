import React, { useState, useEffect, Fragment } from "react";
import io from "socket.io-client";
import axios from "axios";
import Table from "react-bootstrap/Table";

function CpuUsageTable() {
  const cpuUsagePercentageConstant = 2 ** 20;
  const [usages, setUsages] = useState([]);
  // const [pcName, setPcName] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/cpuUsages")
      .then((res) => {
        setUsages(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(usages);

  return (
    <Fragment>
      <Table>
        <thead>
          <tr>
            <th>Process Name</th>
            <th>Memory Usage</th>
            <th>Memory Usage (%)</th>
          </tr>
        </thead>
        <tbody>
          {usages.map((usage) => (
            <tr key={usage.ProcessId}>
              <td>{usage.Name}</td>
              <td>{usage.WorkingSetSize}</td>
              <td>{usage.WorkingSetSize}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default CpuUsageTable;
