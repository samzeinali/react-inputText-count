import { useState } from 'react';
import Input from './components/input';
import Showcount from './components/Showcount';

function App() {
  const [Value, setValue] = useState("");
  const [Count, setCount] = useState(0);
  return (
    <div>
      <Input value={Value} onChangeData={(Value) => { setValue(Value); setCount(Value.length) }} />
      <Showcount text="Character count:" count={Count} />
    </div>
  )
}

export default App
