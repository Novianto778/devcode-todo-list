import { useEffect, useState } from "react";
import { useActivities } from "../../context/activities-context";
import SortDropdown from "./SortDropdown";
import { sortByLatest } from "../../helpers/sort";

const SortButton = ({ groupId, item, setTodoItem }) => {
  const [selected, setSelected] = useState("latest");
  const [isActive, setIsActive] = useState(false);
  const { sortTodo } = useActivities();

  // console.log(item);
  useEffect(() => {
    if (item) setTodoItem(sortTodo(selected, item));
  }, [selected]);

  const handleActive = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <div className="sort-container">
      <span
        className="sort-icon"
        onClick={handleActive}
        data-cy="todo-sort-button"
      ></span>
      {isActive && (
        <SortDropdown selected={selected} setSelected={setSelected} />
      )}
    </div>
  );
};

export default SortButton;
