import { useEffect, useState } from "react";
import { useActivities } from "../../context/activities-context";
import SortDropdown from "./SortDropdown";

const SortButton = ({ item, setTodoItem }) => {
  const [selected, setSelected] = useState("latest");
  const [isActive, setIsActive] = useState(false);
  const { sortTodo } = useActivities();

  useEffect(() => {
    if (item) setTodoItem(sortTodo(selected, item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <SortDropdown
          selected={selected}
          setSelected={setSelected}
          setIsActive={setIsActive}
        />
      )}
    </div>
  );
};

export default SortButton;
