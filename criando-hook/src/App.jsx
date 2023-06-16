import { useCEP } from "./hooks/useCEP"

function App() {
  const endereco = useCEP('58884000');
  return (
    <div>
      {endereco.localidade}
      </div>
  )
}

export default App;
