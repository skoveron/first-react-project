import { Main } from './views/Main/Main';

import './App.css';
import { Button } from './common/ui/Button/Button';

function App() {
  return (
    <div className="App">
      <Main>
        Title
        <h1>Super title</h1>
      </Main>
      <Button title = "Submit" />
      <Button title = "Cancel" />
    </div>
  );
}

export default App;
