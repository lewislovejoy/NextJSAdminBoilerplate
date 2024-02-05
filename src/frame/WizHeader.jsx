import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'next-auth/react';

import { WizIconBox, WizPersonBox } from '../components';

export function WizHeader() {
  return (
    <div
      style={{
        height: 80,
        backgroundColor: '#fff',
        boxShadow: 'inset 0 0 20px 0 #523f690f',
      }}
    >
      <div style={{ padding: 20 }}>
        <div style={{ width: 170, float: 'left' }}>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="basic-addon1"
              style={{ backgroundColor: '#ebeef6', border: 'none' }}
            >
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </InputGroup.Text>
            <Form.Control
              style={{ backgroundColor: '#ebeef6', border: 'none' }}
              placeholder="search.."
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div style={{ width: 300, float: 'right' }}>
          <WizIconBox icon="fa-solid fa-right-from-bracket" onClick={async ()=> { await signOut() }}/>
          <WizPersonBox />
          <WizIconBox icon="fa-regular fa-bell" />
        </div>
      </div>
    </div>
  );
}
