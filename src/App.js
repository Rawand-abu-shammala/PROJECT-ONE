import MainLayout from './components/MainLayout';
import { useThemeContext } from './contexts/ThemeContext';
import './App.css';
import Router from "./router";

function App() {
  const { theme } = useThemeContext();

  // ];
  return (
    <div className="App">
      

      <MainLayout>
       
     <Router />
      </MainLayout>

    </div>
  );
}

export default App;