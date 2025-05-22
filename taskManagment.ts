class User {
    title: string;
    task: string[];
    description: string;
    status: string;

    constructor(title: string, task: string[], description: string, status: string) {
        this.title = title;
        this.task = task;
        this.description = description;
        this.status = status;
    }

    createTask(newTask: string): void {
        this.task.push(newTask);
        console.log(`${newTask} has been added to your list.\nSignify your task status.`);
    }

    checkTaskStatus(): void {
        if (this.status === "completed" || this.status === "done") {
            console.log("Task completed ✅\n Job well done 🥳🥳🥳");
        } else if (this.status === "in progress") {
            console.log("Task in progress. Keep pushing 😊😊");
        } else {
            console.log("Task is yet to start 😔😔😔😔");
        }
    }

    update(updateData: {
        title?: string;
        description?: string;
        status?: string;
        taskIndex?: number;
        newTaskValue?: string;
    }): void {

    }

    listTasks(): void {
        this.task.forEach((task, index) => {
            console.log(`${index + 1}. ${task} [${this.status}] ${this.title} - ${this.description}`);
        });
    }
}
