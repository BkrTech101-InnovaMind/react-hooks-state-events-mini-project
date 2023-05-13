import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories.filter((category) => category !== "All")[0]
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(formData)
    setFormData({
      text: "",
      category: ""
    })
  }
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setFormData({ ...formData, text: e.target.value })} required={true} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setFormData({ ...formData, category: e.target.value })} required={true}>
          {/* render <option> elements for each category here */}
          <option hidden={true}>All</option>
          {categories.filter((category) => category !== "All").map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
