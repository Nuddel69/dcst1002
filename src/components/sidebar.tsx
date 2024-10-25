import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type SidebarItem = {
  title: string;
  link: string;
  subItems?: Array<{ title: string; link: string }>; // Sub-routes
};

type SidebarProps = {
  items: SidebarItem[];
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const location = useLocation(); // Get the current route location

  // Modify `isActive` to only return true when the current path exactly matches the item's link
  const isActive = (link: string) => location.pathname === link;

  return (
    <aside
      className="menu "
      style={{
        width: '250px',
        minHeight: '100vh', // Ensure it fills the height of the viewport
        paddingTop: '20px',
        paddingLeft: '10px',
        paddingRight: '10px',
        backgroundColor: 'var(--sidebar-background-colour)',
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
                borderRadius: '4px',
                color: isActive(item.link) ? '#3273dc' : '', // Active link color
                backgroundColor: isActive(item.link) ? '#e6f7ff' : 'transparent', // Highlight color
              }}
            >
              {item.title}
            </Link>
            {/* Render subItems if they exist */}
            {item.subItems && (
              <ul>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={subItem.link}
                      style={{
                        display: 'block',
                        borderRadius: '4px',
                        color: isActive(subItem.link) ? '#3273dc' : '', // Active sublink color
                        backgroundColor: isActive(subItem.link) ? '#e6f7ff' : 'transparent', // Highlight sublink
                      }}
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
