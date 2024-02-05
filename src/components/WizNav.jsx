import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function WizNav({ navItem, isOpen }) {
  const [open, setOpen] = useState(!!isOpen);
  const { name, icon, children } = navItem;
  return (
    <div style={{ paddingTop: 0 }} className="nav-main">
      <div
        className="navDropdown"
        style={{
          padding: '15px 0 0 0',
          fontSize: 15,
          fontWeight: 400,
          height: 40,
        }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div style={{ width: 20, float: 'left' }}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div style={{ width: 100, float: 'left' }}>{name}</div>
        <div style={{ width: 20, float: 'right' }}>
          {open ? (
            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          )}
        </div>
      </div>
      {open && (
        <div style={{ paddingTop: 10 }}>
          <ul
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: '#89879f',
              padding: 0,
              margin: 0,
            }}
          >
            {children.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  style={{ padding: '8px 30px', margin: 0, lineHeight: 1 }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
