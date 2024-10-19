import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar.tsx'

import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import Hensikter from './pages/Hensikter.tsx'
import Lenker from './pages/Lenker.tsx'
import Phishing from './pages/Phishing.tsx'
import Passord from './pages/Passord.tsx'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulma/css/bulma.min.css';

import 'typeface-poppins'; // Import Poppins
import '@fontsource/opendyslexic'; // Import OpenDyslexic

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>
  },
  {
    path: "/folk-med-onde-hensikter",
    element: <Layout><Hensikter /></Layout>
  },
  {
    path: "/lenker",
    element: <Layout><Lenker /></Layout>
  },
  {
    path: "/phishing",
    element: <Layout><Phishing /></Layout>
  },
  {
    path: "/passord",
    element: <Layout><Passord /></Layout>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>
);
