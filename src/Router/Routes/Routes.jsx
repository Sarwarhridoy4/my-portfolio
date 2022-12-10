import { createBrowserRouter } from "react-router-dom";
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
                element:<Home></Home>
            },
            {
                path: '/ask-me',
                element:<AskMe></AskMe>
            },
        ]
    }
]);
  
//exporting routes
export default router;