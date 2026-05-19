const taskManager = {
  tasks: [],
  addTask(task) {
    this.tasks.push({
      name: task,
      completed: false,
    });
    console.log(task + " task added");
  },
  completeTask(task) {
    for ( let i = 0; i < this.task.length; i++){
      console.log(task)
    }
    console.log(task + " task completed");
  },
  showTasks(task) {
    for (i = 0; i < task.length; i++) {
      console.log(task);
    }
  },
};

taskManager.addTask("JS");

taskManager.completeTask("JS");
taskManager.showTasks();
