import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer/Footer";
function Header() {
  const localStorageJob = JSON.parse(localStorage.getItem("job"));

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(localStorageJob);
  const handleSubmit = () => {
    setJobs((prev) => {
      const newJob = [...prev, job];

      const jsonJob = JSON.stringify(newJob);
      localStorage.setItem("job", jsonJob);

      return newJob;
    });
    setJob("");
  };

  const deleteSubmit = (dele) => {
    const newjob = [...localStorageJob];
    newjob.splice(dele, 1);
    localStorage.setItem("job", JSON.stringify(newjob));
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
            <span onClick={deleteSubmit(index)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </li>
        ))}
      </ul>
      <Footer />
    </Fragment>
  );
}

export default Header;
