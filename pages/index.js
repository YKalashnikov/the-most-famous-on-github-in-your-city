import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import GithubMostPopularList from '../containers/GithubMostPopularList'
import { Provider } from 'react-redux'
import rootReducers from '../reducers'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles'
import globalTheme from '../GlobalTheme'
const store = createStore(rootReducers, {}, applyMiddleware(reduxThunk))


const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    width: '100%',
  },
  header: {
    height: '64px',
  },
  contentContainer: {
    height: 'calc(100% - 64px)',
  },
}))

const Home = () => {
  return (
    <Provider store={store} className="container" >
  <Layout >    
   <GithubMostPopularList/>
   <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
        }
      `}</style>
  </Layout>
  </Provider>
  )
}

export default Home
