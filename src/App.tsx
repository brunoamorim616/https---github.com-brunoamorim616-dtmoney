import { Header, Summary } from "./components";
import { GlobalStyles } from "./styles/globals";

export function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Summary />
    </div>
  );
}

export default App;
