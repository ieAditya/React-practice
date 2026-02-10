import { useEffect, useState } from "react";
import {useNavigate} from "react-router"

export default function Home() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [citiesList, setCitiesList] = useState([]);
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState({
    Football : false,
    Cricket : false,
    Driving : false,
    Singing : false,
    Dancing : false
  });


  const [validName, setValidName] = useState(true);
  const [validDob, setValidDob] = useState(true);
  const [validContact, setValidContact] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validGender, setValidGender] = useState(true);

  const [passAlertMessage, setPassAlertMessage] = useState("");

  const [statesAndCities, setStateAndCities] = useState({});

  useEffect(() => {
    fetch("http://localhost:3004/statesAndCities")
    .then((res) => res.json())
    .then((data) => {
      setStateAndCities(data[0]);
      console.log(data)
    })
  }, [])

  function checkName(){
    for(let i = 0; i < name.length; i++){
      if(name.charAt(i) == " ")
        continue;
      if(!((name.charAt(i) >= 'a' && name.charAt(i) <= 'z') || (name.charAt(i) >= 'A' && name.charAt(i) <= 'Z'))){
        return false;
      }
    }
    return true;
  }

  function checkDob(){
    const inpDate = new Date(dob);
    const date18YearsBack = new Date();
    date18YearsBack.setFullYear(date18YearsBack.getFullYear() - 18);
    return inpDate < date18YearsBack;
  }

  function checkPassword(){
    let containsUpperCase = false;
    let containsLowerCase = false;
    let containsSpecialChar = false;

    const specialChars = ['~', '!', '@', '#', '$', '^', '&', '*'];

    if(password != confirmPassword){
      setPassAlertMessage("Passwords do not match");
      return false;
    }
    if(password.length < 8)
    {
      setPassAlertMessage("Password length should be minimum 8");
      return false;
    }
    for(let i = 0; i < password.length; i++){
      if(password.charAt(i) >= 'a' && password.charAt(i) <= 'z'){
        containsLowerCase = true;
        continue;
      }
      if(password.charAt(i) >= 'A' && password.charAt(i) <= 'Z'){
        containsUpperCase = true;
        continue;
      }
      if(specialChars.includes(password.charAt(i))){
        containsSpecialChar = true;
        continue;
      }
    }

    if(containsLowerCase && containsUpperCase && containsSpecialChar)
      return true;

    setPassAlertMessage("Password must contain atlease 1 lower case, 1 Upper case and 1 special character");
    return false;
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const isValidName = checkName;
    const isValidContact = (contact.length == 10);
    const isValidDob = checkDob;
    const isValidGender = (gender.length != 0);
    const isValidPass = checkPassword();

    setValidName(isValidName);
    setValidPassword(isValidPass);
    setValidContact(isValidContact);
    setValidDob(isValidDob);
    setValidGender(isValidGender);

    
    const hobbiesArr = [];
    Object.keys(hobbies).map((hobby) => {
      if(hobbies[hobby])
        hobbiesArr.push(hobby)
    })
    
    if(isValidName && isValidDob && isValidContact && isValidPass && isValidGender){

      const employeeData = {
        name: name,
        email: email,
        dob: dob,
        contact: contact,
        gender: gender,
        state: state,
        city: city,
        address: address,
        hobbies: hobbiesArr
      };

      await fetch("http://localhost:3004/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      });

      setName("");
      setAddress("");
      setDob("");
      setContact("");
      setEmail("");
      setState("");
      setCity("");
      setPassword("");
      setConfirmPassword("");
      setGender("");
      setCitiesList([]);
      setHobbies({
        Football : false,
        Cricket : false,
        Driving : false,
        Singing : false,
        Dancing : false
      });
      alert("Data submitted!");

      navigate("/list")
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
        >
          <h2 className="text-xl font-semibold text-center">
            Employee Details
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setValidName(true);
            }}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />

          <div class={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative
            ${validName? "hidden": ""}`} role="alert">
            <span class="block sm:inline">Invalid name</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />

          <div className="flex items-center gap-3">
            <label className="w-32 font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
                setValidDob(true);
              }}
              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div class={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative
            ${validDob? "hidden": ""}`} role="alert">
            <span class="block sm:inline">Invalid DOB</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>

          <input
            type="number"
            name="contact"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              setValidContact(true);
            }}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />

          <div class={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative
            ${validContact? "hidden": ""}`} role="alert">
            <span class="block sm:inline">Invalid contact number</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>

          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input type="radio" name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => {
                  setGender(e.target.value);
                  setValidGender(true);
                }}
                />
                Male
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => {
                  setGender(e.target.value);
                  setValidGender(true);
                }}
                />
                Female
              </label>
            </div>
          </div>

          <div class={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative
            ${(validGender)? "hidden": ""}`} role="alert">
            <span class="block sm:inline">Select gender</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>

          <textarea
            name="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="3"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />

          <select
            name="state"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              console.log(statesAndCities[e.target.value]);
              if(e.target.value.length != 0)
                setCitiesList(statesAndCities[e.target.value]);
            }}
            required
          >
            <option value="">Select State</option>
            {Object.keys(statesAndCities).map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>

          <select
            name="city"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value="">Select City</option>
            {citiesList.map((ct) => (
              <option key={ct} value={ct}>{ct}</option>
            ))}
          </select>

          <div>
            <label className="block mb-1 font-medium">Hobbies</label>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(hobbies).map(
                (hobby) => (
                  <label key={hobby} className="flex items-center gap-2">
                    <input type="checkbox" value={hobbies[hobby]} onChange={(e) => setHobbies({...hobbies, [hobby]: e.target.checked})}/>
                    {hobby}
                  </label>
                )
              )}
            </div>
          </div>

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setValidPassword(true);
            }}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setValidPassword(true);
            }}
            required
          />

          <div class={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative
            ${validPassword? "hidden": ""}`} role="alert">
            <span class="block sm:inline">{passAlertMessage}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
