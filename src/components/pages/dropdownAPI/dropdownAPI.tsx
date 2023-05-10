import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Outlet } from 'react-router-dom';

const DropdownAPI = () => {
  // Country states
  const [projects, setProjects] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState("");
  // Country states
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  // States handlers
  const [states, setStates] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string[]>([]);

  // Cities states
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string[]>([]);

  useEffect(() => {
    // Instead of direct set values in the countries list, we have to get values from API and store list of countries
    setProjects(["Project 1", "Project 2", "Project 3", "Project 4"]);

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

  // get project value based on the user selection
  const projectChangeHandler = (value: string) => {
    setSelectedProject(value);

    // Instead of direct set values in the states list, we have to get values from API
    setCountries(["India", "United State", "Oman", "United Kingdom", "Australia", "Yemen"])

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

  // get city value based on the user selection
  const cityChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const item = event.target.value;
    if (selectedCity.includes(item)) {
      setSelectedCity(selectedCity.filter((i) => i !== item));
    } else {
      setSelectedCity([...selectedCity, item]);
    }
  }

  // get state value based on the user selection
  const stateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const item = event.target.value;
    if (selectedState.includes(item)) {
      setSelectedState(selectedState.filter((i) => i !== item));
    } else {
      setSelectedState([...selectedState, item]);
    }
    setCities(["Visakhapatnam", "Anantapur", "Rajamahendravaram", "Nellore", "Vizianagaram"])
  }

  const handleSelectCountries = (event: React.ChangeEvent<HTMLInputElement>) => {
    const item = event.target.value;
    if (selectedCountries.includes(item)) {
      setSelectedCountries(selectedCountries.filter((i) => i !== item));
    } else {
      setSelectedCountries([...selectedCountries, item]);
    }
    setStates(["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa"])
  };

  const handleSelectAll = (param: string) => {
    if (param === "Countries") {
      setSelectedCountries(countries)
    } else if (param === "States") {
      setSelectedState(states)
    } else if (param === "Cities") {
      setSelectedCity(cities)
    }
    //  ?  :  ?  :  ?  : null;
  };

  const handleUnselectAll = (param: string) => {
    if (param === "Countries") {
      setSelectedCountries([])
    } else if (param === "States") {
      setSelectedState([])
    } else if (param === "Cities") {
      setSelectedCity([])
    }
    // param === "Countries" ? setSelectedCountries([]) : 
    //   param === "States" ? setSelectedState([]) : param === "Cities" ? setSelectedCity([]) : null
  };

  return (
    <section>
      <Outlet />
      <div className='d-flex align-items-end flex-wrap'>
        <div className='col-12 col-md-3'>
          <label>Projects</label> <br />
          <select className="form-select" value={selectedProject} onChange={e => projectChangeHandler(e.target.value)}>
            <option hidden>Select Project</option>
            {
              projects.map((data, index) => (
                <option value={data} key={index}>{data}</option>
              ))
            }
          </select>
        </div>
      </div>
      <div className='mt-3'>
        <p>Countries</p>
        {countries.length > 0 ? (
          <div className="d-flex flex-wrap">
            {['All Select', 'All Unselect', ...countries].map((item, index) => (
              <div key={item} className='px-3'>
                <input
                  type="checkbox"
                  id={item.split(" ").join("") + index.toString()}
                  name={item}
                  value={item}
                  checked={
                    item === 'All Select'
                      ? selectedCountries.length === countries.length
                      : item === 'All Unselect'
                        ? selectedCountries.length === 0
                        : selectedCountries.includes(item)
                  }
                  onChange={
                    item === 'All Select'
                      ? () => handleSelectAll("Countries")
                      : item === 'All Unselect'
                        ? () => handleUnselectAll("Countries")
                        : handleSelectCountries
                  }
                />
                <label className='ps-2' htmlFor={item.split(" ").join("") + index.toString()}>{item}</label>
              </div>
            ))}
          </div>
        ) : "No value"}
      </div>
      <div className='mt-3'>
        <p>States</p>
        {states.length > 0 ? (
          <div className="d-flex flex-wrap">
            {['All Select', 'All Unselect', ...states].map((item, index) => (
              <div key={item} className='px-3'>
                <input
                  type="checkbox"
                  id={item.split(" ").join("") + index.toString()}
                  name={item}
                  value={item}
                  checked={
                    item === 'All Select'
                      ? selectedState.length === countries.length
                      : item === 'All Unselect'
                        ? selectedState.length === 0
                        : selectedState.includes(item)
                  }
                  onChange={
                    item === 'All Select'
                      ? () => handleSelectAll("States")
                      : item === 'All Unselect'
                        ? () => handleUnselectAll("States") 
                        : stateChangeHandler
                  }
                />
                <label className='ps-2' htmlFor={item.split(" ").join("") + index.toString()}>{item}</label>
              </div>
            ))}
          </div>
        ) : "No value"}
      </div>
      <div className='mt-3'>
        <p>Cities</p>
        {cities.length > 0 ? (
          <div className="d-flex flex-wrap">
            {['All Select', 'All Unselect', ...cities].map((item, index) => (
              <div key={item} className='px-3'>
                <input
                  type="checkbox"
                  id={item.split(" ").join("") + index.toString()}
                  name={item}
                  value={item}
                  checked={
                    item === 'All Select'
                      ? selectedCity.length === countries.length
                      : item === 'All Unselect'
                        ? selectedCity.length === 0
                        : selectedCity.includes(item)
                  }
                  onChange={
                    item === 'All Select'
                      ? () => handleSelectAll("Cities")
                      : item === 'All Unselect'
                        ? () => handleUnselectAll("Cities")
                        : cityChangeHandler
                  }
                />
                <label className='ps-2' htmlFor={item.split(" ").join("") + index.toString()}>{item}</label>
              </div>
            ))}
          </div>
        ) : "No value"}
      </div>
      <div className=' mt-3'>
          <button type="button" className="btn btn-primary">Submit</button>
        </div>
      <div className='mt-3'>
        <dl>
          <dt>County:</dt>
          <dd>{selectedCountries.join(", ")}</dd>
        </dl>
        <dl>
          <dt>State:</dt>
          <dd>{selectedState.join(", ")}</dd>
        </dl>
        <dl>
          <dt>City:</dt>
          <dd>{selectedCity.join(", ")}</dd>
        </dl>
      </div>
    </section>
  )
}

export default DropdownAPI