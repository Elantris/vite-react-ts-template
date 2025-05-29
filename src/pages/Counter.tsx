import { atom, useAtom } from 'jotai'

const countAtom = atom(0)

const Counter = () => {
  const [count, setCount] = useAtom(countAtom)

  return (
    <div>
      <h1 className="text-xl">Counter</h1>
      <div>Count: {count}</div>
      <div className="flex gap-2">
        <button className="cursor-pointer text-blue-500" onClick={() => setCount((prev) => prev + 1)}>
          Increment
        </button>
        <button className="cursor-pointer text-red-500" onClick={() => setCount((prev) => prev - 1)}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
