// src/components/Layout.tsx
import React from 'react';
import Sidebar from './sidebar.tsx';
import Navbar from './Navbar.tsx'

type LayoutProps = {
  children: React.ReactNode; // This will be the main content passed as props
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
   <>
    <Navbar />
    <div className="App" style={{ marginLeft: '0.5em', display: 'flex', paddingTop: '52px' }}>
      <Sidebar items={[
        { title: 'Forside', link: '/' },
        { title: 'Folk med onde hensikter', link: '/folk-med-onde-hensikter' },
        { title: 'Rare/mystiske/ukjente lenker', link: '/lenker' },
        { title: 'Phishing', link: '/phishing' },
        { title: 'Gode passord', link: '/passord' },
      ]} />
      <div style={{ marginLeft: '240px', padding: '20px', width: '100%' }}>
        {children}
      </div>
    </div>
  </>
  );
};

export default Layout;
