import { Main } from './views/Main/Main';
import { Button } from './common/ui/Button/Button';
import { Header } from './common/components/Header/Header';

function App() {
  const submitFormHandler = (event) => {console.log ('submit')};
  const cancelButton = (e) => {console.log ('cancel')}
  return (
      <Main>
        <Header title = 'header' />

        <Button title = "Submit" onClick = {submitFormHandler} />
        <Button title = "Cancel" onClick = {cancelButton}/>
      </Main>
  );
}

export default App;
