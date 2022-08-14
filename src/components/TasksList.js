import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class TaskList extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    this.getTasksList()
  }

  getTasksList() {
    axios.get("http://localhost:8080/api/tasks")
      .then(res => {
        this.setState({ tasks: res.data.data })
      })
  }

  handleClick(value) {
    const url = "http://localhost:8080/api/tasks/" + value
    axios.delete(url)
      .then(res => {
        this.getTasksList()
      })
  }


  render() {
    return (
      <div className="w-4/6">
        <header className="flex justify-between items-center py-4">
          <h1>Tareas</h1>

          <Link
            to="/create-task"
            className="bg-yellow-300 px-5 py-3 rounded-3 fs-4 fw-bold shadow-sm $white"
          >
            Crear tarea
          </Link>
        </header>


        {
          <div className="grid grid-cols-3 gap-3">
            {this.state.tasks.map((task) => (
              <div className="bg-neutral-800 p-4 rounded-md" key={task._id}>
                <header className="flex justify-between">
                  <h3 className="text-lg font-bold">{task.title}</h3>
                  <div className="flex gap-x-2">
                    <Link
                      to={`/edit-task/${task._id}`}
                      className="bg-zinc-600 px-2 py-1 text-xsm rounded-md self-center"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => this.handleClick(task._id)}
                      className="bg-red-500 px-2 py-1 text-sm rounded-md"
                    >
                      Borrar
                    </button>
                  </div>
                </header>
                <p>{task.description}</p>
                <p className="text-sm text-slate-400">{task._id}</p>
              </div>
            ))}
          </div>}
      </div>
    )
  }
}