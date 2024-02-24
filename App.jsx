const Link = ReactRouterDOM.Link
const Route = ReactRouterDOM.Route

function About() {
  return <h1>About Page</h1>
}
function Contact() {
  return <h1>Contact Page</h1>
}

function App() {
  return (
    <ReactRouterDOM.HashRouter>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </ReactRouterDOM.HashRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
