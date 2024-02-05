import { Card } from 'react-bootstrap';

export function WizCard({children, title}) {
  return (
    <div style={{ width: '100%', padding: 15 }}>
      <Card style={{ width: '100%', border: 'none' }}>
        <Card.Body>
          <Card.Title>{title || 'Card Title'}</Card.Title>
          <Card.Text style={{ color: '#89879f', fontSize: 14 }}>
            {children}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
