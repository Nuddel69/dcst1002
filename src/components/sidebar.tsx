
// src/components/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type SidebarProps = {
  items: Array<{ title: string; link: string }>;
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const location = useLocation(); // Get the current route location

  return (
    <aside
      className="menu is-fixed-left"
      style={{
        width: '250px',
        minHeight: '100vh', // Ensure it fills the height of the viewport
        paddingTop: '20px',
        backgroundColor: '#f5f5f5', // Light background color
        // Optional: add some box shadow for better separation
        // boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <p className="menu-label">Kapitler</p>
      <ul className="menu-list">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              style={{
                display: 'block',
                padding: '10px 15px',
                borderRadius: '4px', // Rounded corners for buttons
                color: location.pathname === item.link ? '#3273dc' : '#363636', // Active link color
                backgroundColor: location.pathname === item.link ? '#e6f7ff' : 'transparent', // Highlight color
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
