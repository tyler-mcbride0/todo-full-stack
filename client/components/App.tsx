import AddTodo from './AddTodo'
import Todos from './Todos'

function App() {
  return (
    <>
      <header className="header">
        <h1>List of to-dos</h1>
        <AddTodo />
        <Todos />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
