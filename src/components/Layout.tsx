import React from 'react';
import Sidebar from './sidebar.tsx';
import Navbar from './Navbar.tsx';
import { Outlet } from 'react-router-dom'; // Import Outlet to render child routes

type LayoutProps = {
  children?: React.ReactNode; // Optional children prop
};

const Layout: React.FC<LayoutProps> = () => {

  const sidebarItems = [
    { title: 'Forside', link: '/' },
    { title: 'Folk med onde hensikter', link: '/folk-med-onde-hensikter' },
    {
      title: 'Lenker',
      link: '/lenker',
      subItems: [
        { title: 'Hvorfor kan noen lenker være farlige?', link: '/lenker/farlige-lenker' },
        { title: 'Ukjente lenker', link: '/lenker/ukjente-lenker' },
        { title: 'Falske nettsider', link: '/lenker/falske-nettsider' },
        { title: 'Lenker i spill og chat', link: '/lenker/spill-lenker',  },
        { title: 'Hva kan skje?', link: '/lenker/hva-kan-skje', },
        { title: 'Feil lenke', link: '/lenker/feil-lenke',   },
        { title: 'Løfter og gratis ting', link: '/lenker/gratis-lenke',   },
      ],
    },
    { title: 'Svindelteknikker', link: '/svindelteknikker' },
    { title: 'Gode passord', link: '/passord' },
  ];

  return (
    <>
      <Navbar />
      <div className="App" style={{ marginLeft: '0.5em', display: 'flex', paddingTop: '52px' }}>
        <Sidebar items={sidebarItems} />
        <div style={{ marginLeft: '240px', padding: '20px', width: '100%' }}>
          <Outlet /> {/* This is where the child routes will render */}
        </div>
      </div>
    </>
  );
};

export default Layout;

