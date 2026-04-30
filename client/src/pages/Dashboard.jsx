import { useEffect, useState } from "react";
import API from "../api";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createTask = async () => {
    if (!title) return alert("Enter task title");

    try {
      await API.post("/tasks", { title });
      setTitle("");
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Dashboard</h2>

      {/* ✅ Task Creation UI */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={createTask}>Add Task</button>
      </div>

      {/* ✅ Task List */}
      {tasks.length === 0 ? (
        <p style={{ textAlign: "center" }}>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            refresh={fetchTasks}
          />
        ))
      )}
    </div>
  );
}