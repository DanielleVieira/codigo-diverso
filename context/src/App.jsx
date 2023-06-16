import { useThemeContext } from "./context/ThemeProvider"

export default function App() {
  const { ola, color } = useThemeContext();  
  return (
    <div style={{color}}>
      {ola()}
      RED!
    </div>
  );
}

