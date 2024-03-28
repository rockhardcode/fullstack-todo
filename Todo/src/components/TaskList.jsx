import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
const TaskList = ({ title, desc, completed, id }) => {
    const handleComplete = () => {
        if(!completed){
            fetch("http://localhost:3000/completed", {
                method: "PUT",
                body: JSON.stringify({
                  id: `${id}`,
                }),
                headers: {
                  'Content-type': "application/json",
                },
              }).then(async (res) => {
                const json = await res.json();
                alert(json.msg);
              }).catch((err) => {
                  console.log(err)
              });
        }
    }
    const handleDelete = () => {
        fetch("http://localhost:3000/remove", {
                method: "DELETE",
                body: JSON.stringify({
                  id: `${id}`,
                }),
                headers: {
                  'Content-type': "application/json",
                },
              }).then(async (res) => {
                const json = await res.json();
                alert(json.msg);
              }).catch((err) => {
                  console.log(err)
              });
    }
  return (
    <div className="task-list-style">
      <div className="task-title">{title}</div>
      <div className="desc-container">
        <span className={completed ? "task-desc line-trhough" : "task-desc"}>
          {desc}
        </span>
        <div className="font-container">
        <FontAwesomeIcon className="check-font" icon={completed ? faXmark : faCheck} onClick={handleComplete}/>
        <FontAwesomeIcon className="trash-font" icon={faTrash} onClick={handleDelete}/>
        </div>
      </div>
    </div>
  );
};
export default TaskList;
