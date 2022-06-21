import './App.css';
import Friend from './components/props/Friend';
import NameField from './components/props/NameField';
import Counter from './components/state/Counter';
import Firework from './components/state/Firework'
import Counter2 from './components/state/Counter2'
import StatusPicker from './components/state/StatusPicker'
import LanguagePicker from './components/state/LanguagePicker'


function App() {

  const friendsList = ['mayra', 'dalton', 'emma', 'cooper']

  return (
    <div className="App">

      {/* FRIEND EXERCISE */}
      {/* <Friend name='Mayra' />
      {friendsList.map((friend) => {
        return <Friend name={friend} />
      })} */}

      {/* NAME FIELD EXERCISE */}
      {/* <NameField first='Mayra' last='Estrella' />
      {friendsList.map((friend) => {
        return <NameField first={friend} last='Estrella' />
      })} */}

      {/* PROFILE CARD EXERCISE */}

      
      {/* <Counter /> */}

      {/* <Firework /> */}

      {/* <Counter2 /> */}

      <StatusPicker />

      <LanguagePicker />

    </div>
  );
}

export default App;
