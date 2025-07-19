import react, { Children } from "react"
import { createContext, useState } from "react"

export const commonContext = createContext();

export const CommonProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () =>
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    return (
        <commonContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </commonContext.Provider>
    );
}
