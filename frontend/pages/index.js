import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

export default function Home() {
  const [employeeList, setEmployeeList] = useState([]);

  const fetchdata = async () => {
    const result = await axios.get(
      "https://7794-223-236-113-196.ngrok.io/employee/all"
    );
    setEmployeeList([...result?.data?.employee_Info]);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <div
        style={{
          margin: "30px 5px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {(employeeList || []).map((item) => (
          <div
            style={{
              margin: "10px 5px",
            }}
          >
            <UserCard id={item} employee={item} />
          </div>
        ))}
      </div>
    </>
  );
}
