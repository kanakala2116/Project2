
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './component/HomePage';
import VideoPage from './component/VideoPage';
function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/room/:id",
      element:<VideoPage/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
