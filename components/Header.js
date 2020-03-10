import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import favicon from '../static/favicon.ico' 

const useStyles = makeStyles(theme => ({
  container: {
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    backgroundColor: theme.background.headers,
    textAlign: 'center',
    height: '80px'
  },
  internalContainer: {
    position: 'relative',
    height: '100%',
    margin: 'auto',
    maxWidth: '1400px',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center !important',
    justifyContent: 'center',
  },
  iconContainer: {
    padding: theme.spacing(2),
    '& img': {
      position: 'absolute',
      top: theme.spacing(2),
      left: theme.spacing(2),
      height: '50px',
      width: '50px',
    },
  },
  textContainer: {
    margin: 0,
    height: '100% !important',
    textAlign: 'center !important',
    display: 'flex',
    alignItems: 'center',
    color:'white'
  },
}))

const Header = ({  }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.internalContainer}>
        <div className={classes.iconContainer}>
          <img src={favicon} alt="Cholo logo" />
        </div>
        <div className={classes.textContainer}>
          <Typography variant="h5"> Find Popular GutHub User </Typography>
        </div>
      </div>
    </div>
  )
}

/* Header.propTypes = {
  headerText: PropTypes.string.isRequired,
} */

export default Header