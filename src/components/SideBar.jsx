import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import styles from "./SideBar.module.css";
import { categoriesObject } from "../constant/list";

function SideBar({ query, setQuery }) {
  const categoriesHandler = (event) => {
    const { tagName } = event.target;
    const categories = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { categories }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoriesHandler}>
        {categoriesObject.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLocaleLowerCase() === query.categories
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SideBar;
