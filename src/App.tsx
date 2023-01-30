import React, { useEffect, useRef, useState } from 'react';
import { Interface } from 'readline';
import { CLIENT_RENEG_LIMIT } from 'tls';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './types';


interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number
}


function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]) // set data type useState<number | string>
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('http://locahost:3001/subs')
      .then(resp => resp.json())
      .then(subs => {
        console.log(subs)
        setSubs(subs)
      })
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
