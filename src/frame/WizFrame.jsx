import { useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { WizFarLeftNav } from './WizFarLeftNav';
import { WizLeftNav } from './WizLeftNav';
import { WizHeader } from './WizHeader';

import './WizFrame.css';

const ALL_NAV = require('./nav.json');

library.add(fas, far);

export function WizFrame({ children, navHighlight, pageTitle }) {
  let defaultFar = 0;
  let defaultNav = 0;
  let defaultPage = null;
  const [dFar, dNav, dPage] = navHighlight || [];
  if (navHighlight) {
    defaultFar = ALL_NAV.findIndex(({ name }) => name === dFar);
    defaultNav = ALL_NAV[defaultFar]?.children?.findIndex(
      ({ name }) => name === dNav,
    );
    defaultPage = dPage;
  }
  const [currentFar, setCurrentFar] = useState(defaultFar);
  const [currentNav, setCurrentNav] = useState(defaultNav);
  const [currentPage, setCurrentPage] = useState(defaultPage);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <div className="bk-primary" style={{ flex: '0 0 80px' }}>
        <WizFarLeftNav
          nav={ALL_NAV}
          current={currentFar}
          setCurrent={(newIndex) => {
            console.log('New index is: ', newIndex);
            setCurrentFar(newIndex);
            setCurrentNav(0);
          }}
        />
      </div>
      <div style={{ backgroundColor: 'white', flex: '0 0 255px' }}>
        <WizLeftNav
          nav={ALL_NAV[currentFar]}
          current={currentNav}
          setCurrent={(newIndex) => {
            setCurrentNav(newIndex);
          }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <WizHeader />
        <div
          style={{ backgroundColor: '#e9ebf4', height: '100%', padding: 15 }}
        >
          {pageTitle && (
            <Breadcrumb>
              <Breadcrumb.Item active>{pageTitle}</Breadcrumb.Item>
            </Breadcrumb>
          )}
          {!pageTitle && dPage && (
            <Breadcrumb>
              <Breadcrumb.Item active>{dFar}</Breadcrumb.Item>
              <Breadcrumb.Item active>{dNav}</Breadcrumb.Item>
              <Breadcrumb.Item active>{dPage}</Breadcrumb.Item>
            </Breadcrumb>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
