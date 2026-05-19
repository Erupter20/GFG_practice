const taskManager = {
  tasks: [],
  addTask(task) {
    this.tasks.push({
      name: task,
      completed: false,
    });
    console.log(task + " task added");
  },
  complete(task) {
    this.tasks.push({
      name: task,
      completed: true,
    });
    console.log(task + "task completed");
  },
};
taskManager.addTask("JS");
taskManager.completeTask("JS");
