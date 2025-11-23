import React from 'react';
import { useState } from 'react';

export const TodoList = () => {
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([
    { id: 1, todo: 'tarea 1' },
    { id: 2, todo: 'tarea 2' },
    { id: 3, todo: 'tarea 3' },
  ]);

  const handleTask = (e) => setTask(e.target.value);

  const handleDeleteTask = (idToDelete) => {
    // usamos el id directamente en vez del objeto completo
    setListTask(prev => prev.filter(item => item.id !== idToDelete));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      const dataToSend = { id: Date.now(), todo: task.trim() };
      setListTask(prev => [...prev, dataToSend]);
      setTask('');
    }
  };

  return (
    <div className="container my-3 text-start">
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 m-auto">
          <h1 className="text-success text-center">Todo List</h1>

          <div className="row">
            <div className="col m-auto">
              <h2 className="text-primary">Add Task</h2>
              <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                  <label htmlFor="input1" className="form-label">New Task</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input1"
                    placeholder="Add a new task"
                    value={task}
                    onChange={handleTask}
                  />
                </div>
              </form>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col m-auto">
              <h2 className="text-primary">List</h2>
              <ul className="list-group">
                {Array.isArray(listTask) && listTask.map((item) => (
                  <li
                    key={item.id}
                    className="list-item-dark d-flex justify-content-between align-items-center mb-2 p-2"
                  >
                    <span>{item.todo}</span>

                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleDeleteTask(item.id)}
                      title="Eliminar"
                    >
                      🗑️
                    </button>
                  </li>
                ))}

                <li className="list-group-item  text-end bg-body-tertiary">
                  {listTask.length === 0 ? 'No tienes' : listTask.length} tareas pendientes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
