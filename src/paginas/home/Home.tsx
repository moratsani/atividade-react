import React, { useEffect, useState } from "react";
import "./Home.css";

interface myProps {
  titulo: string;
  texto: string;
  cor: string;
}

function Home(props: myProps) {
  //variavel que o react nao ta nem ai
  //let contador = 1

  {/*tarefa 2 - função para somar um numero ao clicar o botão*/}
  //variavel que o react se importa
  const [numero, setNumero] = useState(0);

  function somar() {
    setNumero(numero + 1);
    console.log(numero);
  }

  // useEffect(função, dependencia)
  // funcao: () => {}    -> arrow function (funcao anonima)
  // dependencia: []

  {/* alerta que aparece na tela para parar de somar */}
  useEffect(() => {
    alert("para de somar");
  }, [numero]);

  {/* tarefa 3 - clicar no botão para concluir a tarefa */}
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState("");

  useEffect(() => {
    if (completed) {
      setTarefa("Parabéns! Você concluiu a tarefa!");
    }
  }, [completed]);

  {/* tarefa 4 - clicar no botão para logar */}
  const [logado, setLogado] = useState(false);

  return (
    <>
      {/*tarefa 1*/}
      <h1 style={{ fontSize: "64px", color: `${props.cor}` }}>
        {props.titulo}
      </h1>
      <p>{props.texto}</p>
      <hr/>

      {/*tarefa 2*/}
      <h1>{numero}</h1>
      <button onClick={somar}>Adicionar + 1</button>
      <hr/>

      {/*tarefa 3*/}
      <div>
        <h1>Tarefa</h1>
        <h3>{tarefa}</h3>
        <p>Conclua a tarefa</p>
        <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
      </div>
      <hr/>

      {/*tarefa 4*/}
      {/* if ternário */}
      <div>
        {logado == false ? (
          <button onClick={() => {setLogado(true);}}>Clique aqui para logar</button>
        ) : (
          <h1> Parabéns, você está logado</h1>
        )}
      </div>
    </>
  );
}

export default Home;
