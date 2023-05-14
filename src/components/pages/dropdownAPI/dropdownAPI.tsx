import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Outlet } from 'react-router-dom';
import FilterTable from '../tabTwo/filterTable';

const DropdownAPI = () => {
  // Country states
  const [projects, setProjects] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState("");
  // stat for handle table view visiblity
  const [isListViewActive, setIsListViewActive] = useState(false);

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
    setIsListViewActive(false);
  }

  return (
    <section>
      <Outlet />
      <div className='d-flex align-items-end flex-wrap'>
        <div className='col-8 col-md-3'>
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
        <div className='col-4 col-md-2 ps-2'>
          <button type="button" className="btn btn-primary" onClick={() => setIsListViewActive(true)}>Submit</button>
        </div>
      </div>
      {isListViewActive && <div>
        <p className='mb-2 mt-4'>{selectedProject}</p>
        <FilterTable />
      </div>}
    </section>
  )
}

export default DropdownAPI