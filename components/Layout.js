  
import Head from 'next/head';
import Header from './Header';
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles'
import globalTheme from '../GlobalTheme'
import favicon from '../static/favicon.ico'

const Layout = (props) => (
  <div>
       <MuiThemeProvider theme={globalTheme}>
     <Head>
     <title>Popular GutHub user in your city</title>
     <link rel="icon" href={favicon} />
   </Head>
    <Header/>
    <div className="container">
      {props.children}
    </div>
    </MuiThemeProvider>
  </div>
);

export default Layout;