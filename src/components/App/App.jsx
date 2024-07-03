import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import './App.css';

const App = () => {
  // Define el estado 'tasks' para almacenar la lista de tareas y 'newTask' para la nueva tarea que se va a agregar
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Función para agregar una nueva tarea a la lista
  const addTask = () => {
    // Verifica si la nueva tarea no está vacía después de eliminar los espacios en blanco
    if (newTask.trim()) {
      // Actualiza el estado 'tasks' agregando la nueva tarea al array existente
      setTasks([...tasks, { text: newTask, completed: false }]);
      // Limpia el campo de entrada de la nueva tarea
      setNewTask('');
    }
  };

  // Función para eliminar una tarea de la lista
  const deleteTask = (index) => {
    // Filtra las tareas para excluir la tarea con el índice especificado
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Función para alternar el estado de completado de una tarea
  const toggleTaskCompletion = (index) => {
    // Mapea las tareas y cambia el estado de 'completed' de la tarea con el índice especificado
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    // Actualiza el estado 'tasks' con las tareas modificadas
    setTasks(updatedTasks);
  };

  return (
    <div className="App"> {/* Contenedor principal de la aplicación */}
      <header> {/* Encabezado de la aplicación */}
        <h1>Organiza tus tareas diarias de manera eficiente</h1>
      </header>
      <main> {/* Contenedor principal para el contenido */}
        <div className="task-input"> {/* Contenedor para el input y el botón de agregar tarea */}
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Agregar una nueva tarea"
          />
          <button className="addTask" onClick={addTask}>Add</button> {/* Botón para agregar la nueva tarea */}
        </div>
        <TodoList 
          tasks={tasks} // Pasa las tareas al componente TodoList
          toggleTaskCompletion={toggleTaskCompletion} // Pasa la función para alternar la completación de tareas
          deleteTask={deleteTask} // Pasa la función para eliminar tareas
        />
      </main>
    </div>
  );
};

export default App; // Exporta el componente App como el componente principal