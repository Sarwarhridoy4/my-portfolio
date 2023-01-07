import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../../Components/AboutMe/AboutMe";
import AskMe from "../../Components/AskMe/AskMe";
import Home from "../../Components/Home/Home";
import Main from "../../Layout/Main/Main";

// Router Setup
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <p>This is Error</p>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: '/ask-me',
                element:<AskMe></AskMe>
            },
            {
                path: '/about-me',
                element:<AboutMe></AboutMe>
            },
        ]
    }
]);
  
//exporting routes
export default router;