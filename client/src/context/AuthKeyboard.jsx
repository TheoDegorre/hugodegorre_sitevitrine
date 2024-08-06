// import  { createContext, useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const KeyboardContext = createContext();

function KeyboardProvider () {
    // useEffect(() => {
    //     const handleKeyDown = (event) => {
    //         if (event.key === 'a') {
    //             toast.info('La touche "A" a été pressée');
    //         } else if (event.key === 'Enter') {
    //             toast.success('La touche "Enter" a été pressée');
    //         } else if (event.key === 'Escape') {
    //             toast.warn('La touche "Escape" a été pressée');
    //         }
    //     };

    //     window.addEventListener('keydown', handleKeyDown);
    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, []);

    return (
        <h1>Hello</h1>
        // <KeyboardContext.Provider value={{}}>
        //     {children}
        //     <ToastContainer />
        // </KeyboardContext.Provider>
    );
};

export default KeyboardProvider;


// export const useKeyboard = () => {
//     return useContext(KeyboardContext);
// };
