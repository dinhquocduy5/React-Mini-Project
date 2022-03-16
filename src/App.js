import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import {QueryClientProvider, QueryClient} from 'react-query'

const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
