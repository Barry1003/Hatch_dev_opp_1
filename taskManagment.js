"use strict";
class User {
    constructor(title, task, description, status) {
        this.title = title;
        this.task = task;
        this.description = description;
        this.status = status;
    }
    createTask(newTask) {
        this.task.push(newTask);
        console.log(`${newTask} has been added to your list.\nSignify your task status.`);
    }
    checkTaskStatus() {
        if (this.status === "completed" || this.status === "done") {
            console.log("Task completed ✅\n Job well done 🥳🥳🥳");
        }
        else if (this.status === "in progress") {
            console.log("Task in progress. Keep pushing 😊😊");
        }
        else {
            console.log("Task is yet to start 😔😔😔😔");
        }
    }
    update(updateData) {
    }
    listTasks() {
        this.task.forEach((task, index) => {
            console.log(`${index + 1}. ${task} [${this.status}] ${this.title} - ${this.description}`);
        });
    }
}
