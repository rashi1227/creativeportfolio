import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';
import Success from './pages/Success';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="works/:id" element={<CaseStudy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="success" element={<Success />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
