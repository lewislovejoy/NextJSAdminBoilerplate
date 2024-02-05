'use client'

import { Col, Container, Row } from 'react-bootstrap';
import { WizFrame } from '@/frame';
import { WizCard, WizTable } from '@/components';
import { useSession } from 'next-auth/react';

async function Dashboard() {
  const reply = await fetch('/api/users', { cache: 'no-store' })
  const json = await reply.json();
  console.log('Reply', json)
  return (
    <WizFrame navHighlight={['HOME', 'Bootstrap', 'Light']} pageTitle={"List of all users in the system"}>
      <Container style={{ padding: 0 }}>
        <Row className="no-gutters">
          <Col>
            <WizCard title="All Users">
              <WizTable
                columns = {[{
                  title: 'ID',
                  key: '_id'
                }, {
                  title: 'Username',
                  key: 'username'
                }]}
                data={json?.data}
              />
            </WizCard>
          </Col>
        </Row>
      </Container>
    </WizFrame>
  );
}

export default Dashboard;
