import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function WizFarLeftNav({ nav, current, setCurrent }) {
  return (
    <div className="far-left-scroll">
      <div
        style={{
          height: 80,
          fontSize: 40,
          color: 'white',
          padding: '15px 2px 0px 23px',
        }}
      >
        <FontAwesomeIcon icon="fa-solid fa-cloud-meatball" />
      </div>
      <ul className="nav menu-tabs nav" role="tablist" style={{ fontSize: 23 }}>
        {nav.map((navItem, i) => (
          <li
            className="nav-item"
            key={navItem.name}
            onClick={() => {
              setCurrent(i);
            }}
          >
            <a
              role="tab"
              data-rr-ui-event-key="Dashboard"
              id="react-aria8054173150-:r2o:-tab-Dashboard"
              aria-controls="react-aria8054173150-:r2o:-tabpane-Dashboard"
              aria-selected="true"
              className={
                i === current ? 'ai-icon nav-link active' : 'ai-icon nav-link'
              }
              href="#"
            >
              <FontAwesomeIcon icon={navItem.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
