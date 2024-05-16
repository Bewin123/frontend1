import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

function URLShortener() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    url: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending form data to the backend API endpoint
      const response = await axios.post("mongodb+srv://bewinshaji01:bewin1302@cluster0.e6nzcye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", formData); // Change the URL to match your backend endpoint
      console.log(response.data);
      alert("URL saved successfully!");
      // Clear form data after submission
      setFormData({
        name: "",
        email: "",
        password: "",
        url: ""
      });
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred while saving URL.");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>URL:</label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default URLShortener;








