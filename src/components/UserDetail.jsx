import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserById } from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


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

class UserDetail extends Component {
    constructor(){
        super()
    }

    componentWillMount(){
      const id = this.props.match.params.id
      this.props.getUserById(id)
    }


    render(){
      let messages = []

      if(this.props.userDetail.type === "COMPLETE_GET_USER_BY_ID"){
        messages = this.props.userDetail.data.messages.map((item, index) => {
          return (
            <div key={index}>
              <p>{ item.title }</p>{ bull }<b>{ item.message }</b>
            </div>
          )
        })
      }
    
      return (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Mensajes
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              { messages }
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/">Volver</Link>
          </CardActions>
        </Card>
      );
    }
}


function mapStateToProps(state){
  return {
    userDetail: state.getUserById
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getUserById
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)