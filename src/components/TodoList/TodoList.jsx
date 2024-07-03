import React from 'react';

const TodoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
    return (
      <ul> {/* Lista desordenada para mostrar las tareas */}
        {tasks.map((task, index) => ( // Itera sobre las tareas y renderiza cada una como un elemento de lista
          <li key={index} className={task.completed ? 'completed' : ''}> {/* Clase 'completed' si la tarea está completada */}
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTaskCompletion(index)} // Llama a la función para alternar el estado de completado
            />
            <span className="task-text">{task.text}</span> {/* Texto de la tarea */}
            <button className="deleteTask" onClick={() => deleteTask(index)}>Delete</button> {/* Botón para eliminar la tarea */}
          </li>
        ))}
      </ul>
    );
  };
  
  export default TodoList; // Exporta el componente TodoList

