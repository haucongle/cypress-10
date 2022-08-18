import { useState } from 'react'

export default function Stepper({ initial = 0, onChange = (value: number) => { console.log(value) } }) {
  const [count, setCount] = useState(initial)
  const increment = () => {
    const newCount = count + 1
    setCount(newCount)
    onChange(newCount)
  }
  const decrement = () => {
    const newCount = count - 1
    setCount(newCount)
    onChange(newCount)
  }

  return (
    <div>
      <button aria-label="decrement" onClick={decrement}>
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button aria-label="increment" onClick={increment}>
        +
      </button>
    </div>
  )
}
