import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Community from './components/Community';
import Feeds from './components/posts/Feeds';
import Feed from './components/posts/Feed';
import Medias from './components/posts/Medias';
import ErrorBoundary from './ErrorBoundary';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="menu">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" className={({ isActive }) => isActive ? 'active' : ''}>
              Community
            </NavLink>
          </li>
        </ul>
      </header>
      <main className="contents">
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary key="1">
                <Home />
              </ErrorBoundary>
            }
          />
          <Route
            path="/about"
            element={
              <ErrorBoundary key="2">
                <About />
              </ErrorBoundary>
            }
          />
          <Route path="/community" element={<Community />}>
            <Route path="" element={<Navigate replace to="feeds" />} />
            <Route path="feeds" element={<Feeds />} />
            <Route path="feeds/:id" element={<Feed />} />
            <Route path="media" element={<Medias />} /> 
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
