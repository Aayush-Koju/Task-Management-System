import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h2 className="sub-heading">Stay on Top of your Work.</h2>
      <ul className="navigation">
        <li className="dashboard">
          <a>
            <img src="/icons/dashboard.png" width="20rem" height="20rem"></img>
            <label>Dashboard</label>
          </a>
        </li>
        <li className="task-management">
          <a>
            <img src="/icons/task.png" width="20rem" height="20rem"></img>
            <label>Task Management</label>
          </a>
        </li>
        <li className="project-management">
          <a>
            <img src="/icons/project.png" width="20rem" height="20rem"></img>
            <label>Project Management</label>
          </a>
        </li>
      </ul>
      <div className="toggle">
        <span>Light Mode</span>
        <input type="checkbox" />
        <span>Dark Mode</span>
      </div>
      <div className="logout">
        <a href="">Logout</a>
      </div>
    </div>
  );
}
