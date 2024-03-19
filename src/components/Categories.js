import { Outlet, NavLink } from "react-router-dom";
import { getCategories } from "../api"

export default function Categories() {
  const categories = getCategories();
  
  return (
    <div className="container">
      <h1>Session Categories</h1>

      <ul class="categories"></ul>
      { categories.map(category => (
        <li key="cat.id">{category.name}</li>
      ))}
    </div>
  );
}
