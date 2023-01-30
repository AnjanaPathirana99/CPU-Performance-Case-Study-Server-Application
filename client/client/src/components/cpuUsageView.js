import React, { useState, useEffect, Fragment } from "react";
import io from "socket.io-client";
import Table from "react-bootstrap/Table";

const socket = io.connect("http://localhost:3001");

function CpuUsageTable() {
  const cpuUsagePercentageConstant = 2 ** 20;
  const [processes, setProcesses] = useState([]);
  // const [pcName, setPcName] = useState();

  useEffect(() => {
    socket.on("serverData", (processes) => {
      setProcesses(processes);
    });
  }, []);

  console.log(processes);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/api/processes")
  //     .then((res) => {
  //       setProcesses(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
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
          {processes.map((process) => (
            <tr key={process.ProcessId}>
              <td>{process.Name}</td>
              <td>{process.WorkingSetSize}</td>
              <td>{process.WorkingSetSize}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default CpuUsageTable;

//whole file //Day end commit
