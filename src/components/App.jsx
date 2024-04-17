import { useState } from 'react'
import React from 'react'
import SignUp from './SignUp'
import { Container } from 'react-bootstrap'
import AuthProvider from '../context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100hv" }}>
        <div className='w-100' style={{ maxWidth: '420px' }}>
          <SignUp />
        </div>
      </Container>
    </AuthProvider>
    
  )
}

export default App
