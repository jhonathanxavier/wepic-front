import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UploadAndIndexFaces from './components/UploadAndIndexFaces';
import SearchFaces from './components/SearchFaces';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/upload-and-index">Aba do fotógrafo</Link>
            </li>
            <li>
              <Link to="/search-faces">Aba do cliente</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/upload-and-index" element={<UploadAndIndexFaces />} />
          <Route path="/search-faces" element={<SearchFaces />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
