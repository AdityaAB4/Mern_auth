import React, { useState } from "react";
import axios from "axios";

function CustomerForm({ getCustomers }) {
  const [customerName, setCustomerName] = useState("");

  async function saveCustomer(e) {
    e.preventDefault();

    try {
      const customerData = {
        name: customerName,
      };

      await axios.post("http://localhost:8080/customer/", customerData);
      getCustomers();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={saveCustomer}>
        <input
          type="text"
          placeholder="Customer Name"
          onChange={(e) => {
            setCustomerName(e.target.value);
          }}
          value={customerName}
        />
        <button type="submit">Save new customer</button>
      </form>
    </div>
  );
}

export default CustomerForm;
