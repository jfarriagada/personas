import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions'
import UserItem from '../components/UserItem'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'


class Home extends Component {
    constructor(){
        super()
    }

    componentWillMount(){
        this.props.getUsers()
    }

    
    render(){
        console.log("render props", this.props);
        let users = []

        if(this.props.users.data){
            users = this.props.users.data.map((item, index, array) => {
                return (
                    <UserItem 
                        key={index}
                        id={item.id}
                        name={item.name}
                        last_name={item.last_name}
                        facebook={item.facebook}
                    />                
                )
            })
        }

        if(this.props.users.type === "START_GET_USERS"){
            return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <CircularProgress color="primary" />
            </Grid>
            )
        }

        return(
            <div className="home">
                { users }
           </div>
        )
    }
}

function mapStateToProps(state){
    return {
        users: state.getUsers
    }
}

function mapDispatchToProps(dispatch){
    /**
     * bindActionCreators se utiliza para que las funciones de los
     * actions(getUsers) se puedan utulizar dentro del componente
     */
    return bindActionCreators({
        getUsers
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)