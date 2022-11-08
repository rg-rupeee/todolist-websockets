import taskService from "./task.service";

const fetchAllTasks = async (req, res, next) => {
  const data = await taskService.fetchAllTasks();

  return res.status(200).json({
    success: true,
    data,
  });
};

export default {
  fetchAllTasks,
};
