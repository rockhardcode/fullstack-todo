// This components renders all the todos.
import '../App.css'
import PropTypes from 'prop-types';
import TaskList from './TaskList';
const Todos = ({ todos }) => {
  return (
    <div className='task-list-container'>
      {todos.map((item) => {
        return (
          <TaskList title={item.title} desc={item.description} key={item._id} id={item._id} completed={item.completed}/>
        );
      })}
    </div>
  );
};

// Prop types validation
Todos.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
export default Todos;
