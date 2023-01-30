import { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { getAllSubs } from './services/getAllSubs';
import { Sub } from './types';


interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number
}


function App() {
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  const [subs, setSubs] = useState<AppState["subs"]>([]) // set data type useState<number | string>
  useEffect(() => {
    getAllSubs().then(setSubs)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
  }

  return (
    <div className="App" ref={divRef}>
      <h1>mis subs</h1>
      <List subs={subs} />
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
