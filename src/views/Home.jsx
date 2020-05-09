import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions'

class Home extends Component {

    componentWillMount(){
        console.log("will");
        this.props.getUsers()
    }

    render(){
        console.log("render props", this.props);
        
        return(
            <div>home</div>
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