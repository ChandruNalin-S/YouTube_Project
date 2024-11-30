import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/header';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';



const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'watch',
      element:<WatchPage/>
    }
  ]
}])


function App() {
  return (
    <div className="text-black text-l">
      <Provider store={appStore}>
        <Header/>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
