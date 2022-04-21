import { Dashboard, Header } from "./components";

import { GlobalStyles } from "./styles/globals";

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <GlobalStyles />
    </div>
  );
}

export default App;
