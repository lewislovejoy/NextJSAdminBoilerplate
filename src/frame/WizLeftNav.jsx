import { WizNav } from '../components';

export function WizLeftNav({ nav, current }) {
  return (
    <div>
      <div
        style={{
          height: 80,
          borderBottom: '1px solid #ebeef6',
          fontSize: 28,
          fontWeight: 500,
          padding: '20px 30px',
        }}
      >
        Wizard
      </div>

      <div style={{ padding: 30 }}>
        <div
          style={{
            borderBottom: '1px solid #ebeef6',
            fontSize: 16,
            fontWeight: 600,
            paddingBottom: 10,
          }}
        >
          {nav.name}
        </div>
        {nav.children.map((navItem, i) => (
          <WizNav
            key={`${nav.name}_${navItem.name}`}
            navItem={navItem}
            isOpen={current === i}
          />
        ))}
      </div>
    </div>
  );
}
