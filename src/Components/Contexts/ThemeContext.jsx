import { useReducer } from 'react';
import { createContext } from 'react';
import ThemeList from '../Data/ThemeList';

const ThemeContext = createContext();

const darkTheme = ThemeList.dark;
const lightTheme = ThemeList.light;


const themeReducer = (state, action) =>{
    switch (action.type) {
        case 'TOGGLE_THEME':
            localStorage.setItem(
                'theme',
                state.theme === darkTheme ? lightTheme : darkTheme
            );
            
            return{
                theme: state.theme === darkTheme ? lightTheme : darkTheme,
            }
    
        default:
            return state;
    }
};


//The Provider
const ThemeContextProvider = ({ children }) =>{
    const getInitialTheme = () =>{
        const theme = localStorage.getItem('theme');

        const prefersDark = window.matchMedia && window.matchMedia('prefers-color-theme: dark').matches;

        if(theme){
            return theme;
        }
        if(prefersDark){
            return darkTheme;
        }
        return lightTheme;
    };

    const initialState = {
        theme: getInitialTheme(),
    };

    const [state, dispatch] = useReducer(themeReducer , initialState)

    
    const value = {
        theme: state.theme,
        toggleTheme: () => dispatch({type: 'TOGGLE_THEME'}),
    };

    return(
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    );
};


export { ThemeContextProvider };

export default ThemeContext;



//Demo

// import { createContext, useReducer } from 'react';
// import ThemeList from '../Data/ThemeList';

// const ThemeContext = createContext();
// const lightTheme = ThemeList.light;
// const darkTheme = ThemeList.dark;

// const themeReducer = (state, action) => {
//   switch (action.type) {
//     case 'TOGGLE_THEME':
//       localStorage.setItem(
//         'theme',
//         state.theme === lightTheme ? darkTheme : lightTheme
//       );
//       return {
//         theme: state.theme === darkTheme ? lightTheme : darkTheme,
//       };
//     default:
//       return state;
//   }
// };

// const ThemeContextProvider = ({ children }) => {
//   const getInitialTheme = () => {
//     const theme = localStorage.getItem('theme');
//     const prefersDark =
//       window.matchMedia &&
//       window.matchMedia('(prefers-color-scheme: dark)').matches;
//     if (theme) {
//       return theme;
//     }
//     if (!theme) {
//       if (prefersDark) {
//         return darkTheme;
//       }
//       return lightTheme;
//     }
//   };

//   const initialState = {
//     theme: getInitialTheme(),
//   };

//   const [state, dispatch] = useReducer(themeReducer, initialState);
//   const value = {
//     theme: state.theme,
//     toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
//   };

//   return (
//     <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
//   );
// };

// export default ThemeContext;
// export { ThemeContextProvider };