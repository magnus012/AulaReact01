import Data from "./meusComponentes/Data.js"

function App() {
  return (
    <div className="App">
      <Data texto="Data e hora atuais" timeZone="-4.00"/>
      <Data texto="Data e hora atuais" timeZone="-2.00"/>
    </div>
  );
}

export default App;
