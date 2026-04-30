import API from "../api";

export default function TaskCard({ task, refresh }) {

  const markDone = async () => {
    await API.put(`/tasks/${task._id}`, { status: "done" });
    refresh();
  };

  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>

      <button onClick={markDone}>Mark Done</button>
    </div>
  );
}