import { Route, Switch } from 'wouter'
import Layout from './components/Layout'
import About from './pages/About'
import Counter from './pages/Counter'
import Home from './pages/Home'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/counter" component={Counter} />
        <Route path="*" component={Home} />
      </Switch>
    </Layout>
  )
}

export default App
