import "./styles/normalize.css";
import './styles/App.css';

import PersonalInfo from './Components/PersonalInfo';
import Education from './Components/Education';
import Experience from './Components/Experience';


function App() {
  

  return (
    <div className='app'>
      <PersonalInfo />
      <Education />
      <Experience />
    </div>
  )
}

export default App
