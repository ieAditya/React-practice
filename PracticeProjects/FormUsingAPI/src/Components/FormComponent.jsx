import React, { useEffect, useState } from "react";

const FormComponent = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Fetch states from API
  useEffect(() => {
    fetch("https://api.example.com/states") // Replace with your API
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.error("Error fetching states:", err));
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (!selectedState) return;

    fetch(`https://api.example.com/cities?state=${selectedState}`) // Replace with your API
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.error("Error fetching cities:", err));
  }, [selectedState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username,
      age,
      mobile,
      state: selectedState,
      city: selectedCity,
    };
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <h2>User Form</h2>

      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <br />

      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <br />

      <label>Mobile Number:</label>
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
      />

      <br />

      <label>State:</label>
      <select
        value={selectedState}
        onChange={(e) => {
          setSelectedState(e.target.value);
          setSelectedCity(""); // reset city when state changes
        }}
        required
      >
        <option value="">Select State</option>
        {states.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>

      <br />

      <label>City:</label>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        required
        disabled={!selectedState}
      >
        <option value="">Select City</option>
        {cities.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
