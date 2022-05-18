import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";
import { DataContextProvaider } from "./Context/DataContext";

function App() {
      return (
            <DataContextProvaider>
                  <div className="App">
                        <header className="App-header">
                              <h2>TO DO LIST</h2>
                        </header>
                        <main className="main-content">
                              <Form />
                              <List />
                        </main>
                  </div>
            </DataContextProvaider>
      );
}

export default App;
