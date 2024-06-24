import React ,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Favourites from './pages/Favourites';
import MealGenerator from './pages/MealGenerator';
import AboutMe from './pages/About';
import CategoryMeals from './pages/CategoryMeals';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
      
      <div >
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : ''}`}>
          <div className="p-8 text-3xl">
            <button onClick={toggleSidebar} >
              &#9776; {/* Hamburger Menu Icon */}
            </button>
        </div>
        </div>
        <div className="flex-1 md:ml-64">
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/meal-generator" element={<MealGenerator />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/menu/:category" element={<CategoryMeals />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
