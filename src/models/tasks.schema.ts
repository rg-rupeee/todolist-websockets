import mongoose from "mongoose";

interface ITask {
  key: string;
  tasks: [string];
}

const taskSchema = new mongoose.Schema<ITask>({
  key: {
    type: String,
    unique: true,
  },
  tasks: [String],
});

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;
