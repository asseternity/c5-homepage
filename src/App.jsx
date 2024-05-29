import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>
        Introductions
      </h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hello, world!
        </p>
      </div>
      <p className="read-the-docs">
        Hello, underworld!
      </p>
    </>
  )
}

export default App
