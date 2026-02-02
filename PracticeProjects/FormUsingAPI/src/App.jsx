import React, { useEffect, useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = {
      username,
      age,
      mobile,
      state: selectedState,
      city: selectedCity,
    };

    try {
      const res = await fetch("https://api.example.com/submit-form", {  // Replace with your POST API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      const data = await res.json();
      setMessage("Form submitted successfully!");
      console.log("Server Response:", data);

    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form.");
    }

    setLoading(false);
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
          setSelectedCity("");
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

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default App;
