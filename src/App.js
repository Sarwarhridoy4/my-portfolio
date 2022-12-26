import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Routes";


function App() {
  
  return (
    <div className='delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300"'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
