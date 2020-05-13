import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom'


const classes = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});
const bull = <span className={classes.bullet}>•</span>

class UserItem extends Component {
    constructor(){
        super()
        this.state = {
            isRedirected:false
        }
        this.handleDetail = this.handleDetail.bind(this)
    }

    handleDetail(e){
        this.setState({ isRedirected: !this.state.isRedirected})
    }

    render(){
        const { id, name, last_name, facebook } = this.props

        if(this.state.isRedirected) {
            return <Redirect to={'/detail/' + id} />
        }
      
        return (
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                { name}
              </Typography>
              <Typography variant="h5" component="h2">
                  { last_name }{bull}{ facebook }
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={this.handleDetail} size="small">Ver más</Button>
            </CardActions>
          </Card>
        );
    }
}


UserItem.protoTypes = {
    name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    facebook: PropTypes.string
}

export default UserItem