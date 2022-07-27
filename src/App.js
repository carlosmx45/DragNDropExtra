//import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import React from "react";
import Board from "./components/Board";
import Card from "./components/Card";
import Header from "./components/Header/Header";
import "./main.css";

function App() {


  return (
    <div className="App">
      <Header/>
      <main className="flexbox">
      <div>
        <p><center>To Do</center></p>
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true" >
            <p>Pasar el semestre</p>
          </Card>
        </Board>
      </div>
      <div>
        <p><center>In Progress</center></p>
        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true" >
            <p>Publicar sitio web</p>
          </Card>
        </Board>
      </div>
      <div>
        <p><center>Review</center></p>
        <Board id="board-3" className="board">
          <Card id="card-3" className="card" draggable="true" >
            <p>Desayunar</p>
          </Card>
          <Card id="card-4" className="card" draggable="true" >
            <p>Hacer Tarea</p>
          </Card>
          <Card id="card-5" className="card" draggable="true" >
            <p>Tomar el camion</p>
          </Card>
        </Board>
      </div>
      <div>
        <p><center>Done</center></p>
        <Board id="board-4" className="board">
          <Card id="card-6" className="card" draggable="true" >
            <p>Ir al Centro</p>
          </Card>
          <Card id="card-7" className="card" draggable="true" >
            <p>Darme de Baja</p>
          </Card>
        </Board>
      </div>
      </main>
    </div>
  );
}

export default App;
