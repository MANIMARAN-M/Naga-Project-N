import React, { useState, useEffect } from 'react';
import axios from "axios";

const DropdownAPI = () => {
  // Country states
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  // States handlers
  const [states, setStates] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState("");

  // Cities states
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    // Instead of direct set values in the countries list, we have to get values from API and store list of countries
    setCountries(["India", "United State", "Oman", "United Kingdom", "Australia", "Yemen"])

    // sample API : https://jsonplaceholder.typicode.com/todos/1
    // To more abount axios: https://axios-http.com/docs/intro
    // axios.get("YOUR_API")
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     // setCountries(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);

  // get county value based on the user selection
  const countryChangeHandler = (value: string) => {
    // console.log(value)
    setSelectedCountry(value);

    // Instead of direct set values in the states list, we have to get values from API
    setStates(["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa"])

    // sample API : https://jsonplaceholder.typicode.com/todos/1
    // To more abount axios: https://axios-http.com/docs/intro
    // const URL = "YOUR_API" + ParamValues (value)
    // axios.get(URL)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     // setStates(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  // get state value based on the user selection
  const stateChangeHandler = (value: string) => {
    // console.log(value)
    setSelectedState(value);

    // Instead of direct set values in the cities list, we have to get values from API
    setCities(["Visakhapatnam", "Anantapur", "Rajamahendravaram", "Nellore", "Vizianagaram"])

    // sample API : https://jsonplaceholder.typicode.com/todos/1
    // To more abount axios: https://axios-http.com/docs/intro
    // const URL = "YOUR_API" + ParamValues (value)
    // axios.get(URL)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     // setCities(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  // get city value based on the user selection
  const cityChangeHandler = (value: string) => {
    // console.log(value)
    setSelectedCity(value);    
  }

  return (
    <section>
      <div className='d-flex align-items-end flex-wrap'>
        <div className='col-12 col-md-3'>
          <label>Countries</label> <br />
          <select className="form-select" onChange={e => countryChangeHandler(e.target.value)}>
            <option hidden>Select County</option>
            {
              countries.map((data, index) => (
                <option value={data} key={index}>{data}</option>
              ))
            }
          </select>
        </div>
        <div className='col-12 col-md-3 px-0 px-md-3 mt-3 mt-md-0'>
          <label>States</label> <br />
          <select className="form-select" onChange={e => stateChangeHandler(e.target.value)}>
            <option hidden>Select State</option>
            {
              states.map((data, index) => (
                <option value={data} key={index}>{data}</option>
              ))
            }
          </select>
        </div>
        <div className='col-12 col-md-3 mt-3 mt-md-0'>
          <label>Cities</label> <br />
          <select className="form-select" onChange={e => cityChangeHandler(e.target.value)}>
            <option hidden>Select City</option>
            {
              cities.map((data, index) => (
                <option value={data} key={index}>{data}</option>
              ))
            }
          </select>
        </div>
        <div className='col-12 col-md-3 ps-0 ps-md-4 mt-3 mt-md-0'>
          <button type="button" className="btn btn-primary">Submit</button>
        </div>
      </div>
      <div className='mt-3'>
        <dl>
          <dt>County:</dt>
          <dd>{selectedCountry}</dd>
        </dl>
        <dl>
          <dt>State:</dt>
          <dd>{selectedState}</dd>
        </dl>
        <dl>
          <dt>City:</dt>
          <dd>{selectedCity}</dd>
        </dl>
      </div>
    </section>
  )
}

export default DropdownAPI