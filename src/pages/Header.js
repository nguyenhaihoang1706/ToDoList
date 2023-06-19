import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  // const localStorageJob = JSON.parse(localStorage.getItem("job"));

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJob = [...prev, job];
      return newJob;
    });
    setJob("");
  };
  return (
    <Fragment>
      <div className="wapper">
        <div className="heading">
          <h1>Todo App</h1>
        </div>
        <div className="input-field">
          <input
            value={job}
            onChange={(e) => setJob(e.target.value)}
            type="text"
            placeholder="add todo"
          />
          <button onClick={handleSubmit}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <ul className="todolist">
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span>
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Header;
