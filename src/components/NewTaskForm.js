import React, { useState } from "react";

function NewTaskForm(props) {
  const initialCategory = props.categories ? props.categories[0] : "";
  const [formData, setFormData] = useState({
    text: "",
    category: initialCategory,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTaskFormSubmit(formData);
    setFormData({
      text: "",
      category: initialCategory,
    });
  };

  const renderCategoryOptions = () => {
    const { categories } = props;
    if (!categories) {
      return null;
    }
    return categories
      .filter((category) => category !== "All")
      .map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ));
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          {renderCategoryOptions()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


