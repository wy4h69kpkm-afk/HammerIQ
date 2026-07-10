import "./App.css";
import { MainLayout } from "./components/layout/MainLayout";
import { Dashboard } from "./components/dashboard/Dashboard";

/**
 * HammerIQ Application
 * Professional auction intelligence dashboard
 * 
 * Technology stack:
 * - Tauri v2 for desktop integration
 * - React 19 for UI components
 * - TypeScript for type safety
 * - Tailwind CSS for styling
 * - Vite for fast development and building
 */
function App() {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}

export default App;
