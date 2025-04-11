import { Route, Switch } from 'wouter'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Layout>
  )
}

export default App
