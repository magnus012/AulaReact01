import Data from "./meusComponentes/Data.js"
import Contador from "./meusComponentes/ContadorV2.jsx";

function App() {
  return (
    <div className="App">
      <Data texto="Data e hora atuais " timeZone={-4.00}/>
      <Data texto="Data e hora atuais " timeZone={-2.00}/>
      <Contador texto="Jogador 1"/>
    </div>
  );
}

export default App;
