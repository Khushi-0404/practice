import Login from "./Login";
import { createContext, useState } from "react";
export const ThemeContext = createContext({theme:null});
const ToggleMode=()=>{
  
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log("in toggle")
  return(
  <div>
  <ThemeContext.Provider value= {{ colour:theme, toggle:toggleTheme }}>
        <Login></Login>
       </ThemeContext.Provider>
       </div>
)}
export default ToggleMode