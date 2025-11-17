import "./App.css";
import { cn } from "./lib/utils";

function App() {
  const isActive = true;
  return (
    <div>
      <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        isActive
      </div>
    </div>
  );
}

export default App;
