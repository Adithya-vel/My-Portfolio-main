import Home from '@/pages/Home';
import { useTheme } from '@/hooks/useTheme';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

function App() {
  useTheme(); // applies persisted theme from localStorage on mount

  return (
    <div className="dark relative min-h-screen bg-background text-foreground">
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
