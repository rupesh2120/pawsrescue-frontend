import { Outlet } from 'react-router-dom';
import Topbar from './containers/Topbar';

function App() {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  );
}

export default App;

/**
 * If we are using BrowerRouter in index.tsx, then we can directly use Routes and Route here. But since we are using createBrowserRouter and RouterProvider in index.tsx, we need to use Outlet here to render the child routes.
 *  <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animals" element={<AnimalsFeed />} />
        <Route path="/animals/:id" element={<AnimalDetails />} />
      </Routes>
    </BrowserRouter>
 */
