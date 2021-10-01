import './App.css';
import NavBar from './components/Navbar';
import Landing from './sections/Landing';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Be Vietnam Pro',
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar/>
      <Landing/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
    </ThemeProvider>
  );
}

export default App;
