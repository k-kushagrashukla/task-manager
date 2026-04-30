import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, default: "todo" },
  dueDate: Date
});

export default mongoose.model("Task", taskSchema);