import { Table } from 'react-bootstrap';

export function WizTable({columns, data}) {
  return (
    <div style={{ width: '100%', padding: 15 }}>
      <Table striped hover size="sm">
        <thead>
        <tr>
          {columns.map(({title}, i)=>(
            <th key={i}>{title}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        {
          data.map((row, i) => (
            <tr>
              {columns.map(({key}, i)=>(
                <td key={i}>{row[key]}</td>
              ))}
            </tr>
          ))
        }
        </tbody>
      </Table>
    </div>
  );
}
