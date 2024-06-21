import React from "react";
import styles from "./Table.module.css";
import { getUserData } from "../service/table.service";

export default function Table() {
  const [tableData, setTableData] = React.useState([]);

  React.useEffect(() => {
    handleGetUsers();
  }, []);

  const handleGetUsers = async () => {
    const response = await getUserData();
    setTableData(response.data);
  };

  return (
    <>
      <table className={styles.tableContainer}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.tableData}>S.No</th>
            <th className={styles.tableData}>Name</th>
            <th className={styles.tableData}>Email</th>
            <th className={styles.tableData}>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 &&
            tableData.map((d) => (
              <tr className={styles.tableContent} key={d.id}>
                <td className={styles.tableData}>{d.id}</td>
                <td className={styles.tableData}>{d.name}</td>
                <td className={styles.tableData}>{d.username}</td>
                <td className={styles.tableData}>{d.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className={styles.cardsContainer}>
        {tableData &&
          tableData.map((d) => (
            <div className={styles.card} key={d.id}>
              <h4>{d.name}</h4>
              <p>{d.username}</p>
              <p>{d.email}</p>
            </div>
          ))}
      </div>
    </>
  );
}
