import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const CpuUsageTable = () => {
  const cpuUsagePercentageConstant = 2 ** 20;
  const [usages, setUsages] = useState([]);
  // const [pcName, setPcName] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/cpuUsages");
        setUsages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    setInterval(() => {
      fetchData();
    }, 1000);
  });
  // const intervalId = setInterval(() => {
  //   fetchData();
  // }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  //   fetchData();
  // }, []);

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
};

export default CpuUsageTable;
