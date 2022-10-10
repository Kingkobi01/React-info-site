import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
function App({ darkMode }) {
  const [theme, setTheme] = useState(darkMode)

  function themeChanger() {
    setTimeout(setTheme(prevTheme => !prevTheme), 5000)
  }
  return (
    <div className="App">
      <Navbar
        darkMode={theme}
        toggler={themeChanger} />
      <Main
        darkMode={theme}
      />
    </div>
  );
}

export default App;
