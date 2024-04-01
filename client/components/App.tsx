import AddTodo from './AddTodo'
import DeleteTodo from './DeleteTodo'
import Todos from './Todos'

function App() {
  console.log('page loaded')
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
