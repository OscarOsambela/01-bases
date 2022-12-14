import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";//import { Gifhy } from "./components/Gifs/Gifhy";

function App() {
  return (
    <>
      <h1>React App</h1>
      <Counter initialValue={15} />
      <CounterBy />
      <hr />
      <hr />
    </>
  );
}

export default App;
