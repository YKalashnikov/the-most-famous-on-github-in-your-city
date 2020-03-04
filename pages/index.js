import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import GithubMostPopularList from '../containers/GithubMostPopularList'
import { Provider } from 'react-redux'
import rootReducers from '../reducers'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(rootReducers, {}, applyMiddleware(reduxThunk))

const Home = () => (
  <Provider store={store}>
  <Layout>    
      <GithubMostPopularList/>
  </Layout>
  </Provider>
)

export default Home
