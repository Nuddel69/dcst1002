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
    { title: 'Svindelteknikker', link: '/svindelteknikker' },
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
    { title: 'Gode passord', 
      link: '/passord',
      subItems: [
        { title: 'Hvorfor er passord viktige?', link: '/passord/viktig' },
        { title: 'Unngå enkle passord', link: '/passord/enkle' },
        { title: 'Hva er et sterkt passord?', link: '/passord/sterke' },
        { title: 'Hvordan huske passordene dine', link: '/passord/huske' },
        { title: 'Hva er tofaktorautentisering?', link: '/passord/tofaktor' },
        { title: 'Hva gjør du hvis noen får tak i passordet ditt?', link: '/passord/mistet' },
        { title: 'Hvordan holder jeg passordene mine trygge?', link: '/passord/trygge' },
      ]
    },
  ];

  return (
    <>
      <Navbar />
      <div className="App" style={{ display: 'flex' }}>
        <Sidebar items={sidebarItems} />
        <div style={{ marginLeft: '240px', padding: '20px', width: '100%' }}>
          <h1 class>Læringsmateriale i DCST1002</h1>
          <p>Kurs for elever i 5-7 klasse</p>
          <Outlet /> 
        </div>
      </div>
    </>
  );
};

export default Layout;

