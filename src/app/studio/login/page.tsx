'use client'

import React, { FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signIn, signOut, useSession } from 'next-auth/react';

// import rainbow from '@/src/images/rainbow.gif';
import { useRouter } from 'next/navigation';

function Login(props: any) {
  const router = useRouter();
  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    const response = await fetch('/api/session/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (response.ok) {
      router.push('/studio/home/dashboard')
    } else {
      // Handle errors
    }
  }

  return (
    <div>
      <div style={{ padding: 50, height: '100vh' }}>
        <div style={{ width: '50%', float: 'left', height: '100%' }}>
          <div
            className="bk-primary"
            style={{
              // backgroundImage: `url(${rainbow.src})`,
              borderRadius: '2.5rem',
              height: '100%',
              textAlign: 'center',
            }}
          >
            <div style={{ color: 'white', padding: 40 }}>
              <p
                style={{
                  fontSize: 18,
                  marginBottom: 15,
                  fontWeight: 500,
                  lineHeight: 1.3,
                  marginTop: 60,
                }}
              >
                Log in to your admin dashboard with your credentials
              </p>
              <h1
                style={{
                  fontSize: 50,
                  lineHeight: 1.2,
                  fontWeight: 700,
                  marginBottom: '1.4rem',
                }}
              >
                Electron Wizard Admin
              </h1>
              <p style={{ opacity: 0.8 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit
              </p>
            </div>
          </div>
        </div>

        <div style={{ width: '50%', float: 'left' }}>
          <div style={{ padding: 20, paddingTop: 40 }}>
            <div style={{ textAlign: 'center' }}>
              <h3>Welcome</h3>
              <p>Login below to access the Admin Console.</p>
              <h6 className="text-bar">
                <span style={{ padding: '0 20px' }}>
                  Login
                </span>
              </h6>
            </div>

            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control size="lg" type="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control size="lg" type="password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <div className="text-center mb-4">
                <Button variant="primary" type="submit">
                  Sign In
                </Button>
              </div>
              <div className="text-center mb-4">
                <Button
                  variant="primary"
                  onClick={async (e)=>{
                    e.preventDefault();
                    await signIn();
                  }}>
                  Github Signin
                </Button>
              </div>


            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login

