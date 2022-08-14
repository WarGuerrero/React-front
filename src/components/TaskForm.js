import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class CreateTask extends React.Component {
  state = {
    id: "",
    tile: "",
    description: "",
  }

  componentDidMount() {
    let id = window.location.pathname
    let id_split = id.split("/")[2]

    if (window.location.pathname.includes('edit-task')) {
      this.getTaskById(id_split)
    }
  }

  getTaskById(value) {
    const url = "http://localhost:8080/api/tasks/" + value

    axios.get(url)
      .then(res => {
        this.setState({ title: res.data.data.title });
        this.setState({ id: value });
        this.setState({ description: res.data.data.description });
      })
  }

  handleSubmit = event => {
    event.preventDefault();

    const body = {
      title: this.state.title,
      description: this.state.description,
    }

    if (window.location.pathname.includes('edit-task')) {
      const url = "http://localhost:8080/api/tasks/" + this.state.id
      axios.put(url, body)
      .then(res => {
        window.history.go(-1)
      })
    }else{
      axios.post("http://localhost:8080/api/tasks/", body)
      .then(res => {
        window.history.go(-1)
      })
    }   
  }

  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  }

  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="bg-zinc-800 max-w-md p-4 rounded-3">
        <label className="block text-lg pb-2">Tarea:</label>
        <input
          type="text"
          name="title"
          onChange={this.handleChangeTitle}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          placeholder="Tarea"
          value={this.state.title}
          autoFocus
        />
        <label className="pb-2">
          Descripción:
        </ label>
        <textarea
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChangeDescription}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          placeholder="¿Qué hay que hacer?"
        />
        <button type="submit" className="bg-indigo-600 px-5 py-2 rounded-5">Enviar</button>
      </form>
    );
  }
}