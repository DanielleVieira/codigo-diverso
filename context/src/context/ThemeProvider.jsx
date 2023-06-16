import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => { //O children é uma propriedade padrão do props do componente
    const ola = () => {
        console.log("Ola!");
    }

    return ( //Poderia ter sido criado um contexto e usado diretamente o themeContext.Provider sem precisar colocar como retorno de outro componente
        <ThemeContext.Provider value={{ ola, color: "red" }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext); //Esse hook é usado no lugar do Consumer

// Se usar o Consumer precisa lembrar que o jsx precisa ser passado dentro de uma função
// para funcionar