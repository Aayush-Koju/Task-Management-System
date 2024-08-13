export default function NavBar() {
  return (
    <>
      <div className="sub-heading">Stay on Top of your Work.</div>
      <div className="navigation">
        <div className="dashboard">
          <a>
            <img src="/icons/dashboard.png" width="20rem" height="20rem"></img>
            <label>Dashboard</label>
          </a>
        </div>
        <div className="task-management">
          <a>
            <img src="/icons/task.png" width="20rem" height="20rem"></img>
            <label>Task Management</label>
          </a>
        </div>
        <div className="project-management">
          <a>
            <img src="/icons/project.png" width="20rem" height="20rem"></img>
            <label>Project Management</label>
          </a>
        </div>
      </div>
      <div className="toggle">
        <span>Light Mode</span>
        <input type="checkbox" />
        <span>Dark Mode</span>
      </div>
      <div className="logout">
        <a href="">Logout</a>
      </div>
    </>
  );
}
