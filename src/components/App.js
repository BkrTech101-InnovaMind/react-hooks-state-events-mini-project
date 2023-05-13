import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });




function App() {
  // constant to the tasks that will be deleted by the delete button
  const [tasks, setTasks] = React.useState(TASKS)
  // constant to the category filter
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  // constant that will filter the tasks by its category
  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory);

  // function that sent to the tasks component to handle tasks deleting
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.text !== taskId)
    setTasks(updatedTasks)
  }

  // constant to update the tasks menu by the selected category
  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  // task with the new tasks submitted
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleCategorySelect} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
