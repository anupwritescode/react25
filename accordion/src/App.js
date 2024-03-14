import './App.css';
import Accordion from './accordion/Accordion';

function App() {
  const text1 = {text: 'Accordion header 1'};
  const text2 = {text: 'Accordion header 2'};

  return (
    <div className="App">
      <Accordion {...text1} >
        <p>This is the text inside accordion.</p>
      </Accordion>
      <Accordion {...text2}>
        <p>This is the yet another text inside accordion.</p>
      </Accordion>
    </div>
  );
}

export default App;
