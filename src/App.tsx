import Home from './pages/Home';
import { useTheme } from './hooks/useTheme';

function App() {
  useTheme(); // applies persisted theme from localStorage on mount

  return (
    <div className="dark relative min-h-screen bg-background text-foreground">
      <Home />
    </div>
  );
}

export default App;
