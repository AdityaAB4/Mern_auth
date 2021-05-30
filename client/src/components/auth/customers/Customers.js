import React, { useState, useEffect } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";
import axios from "axios";

function Customers() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    const customersRes = await axios.get("http://localhost:8080/customer/");
    setCustomers(customersRes.data);
  }
  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <>
      <CustomerForm getCustomers={getCustomers}/>
      <CustomerList customers={customers} />
    </>
  );
}

export default Customers;
