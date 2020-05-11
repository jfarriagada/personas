import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserItem extends Component {
    render(){
        const { id, name, last_name, facebook } = this.props
        return(
            <div>
                <p>{ name }</p>
                <p>{ last_name }</p>
                <p>{ facebook }</p>
            </div>
        )
    }
}

UserItem.protoTypes = {
    name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    facebook: PropTypes.string
}

export default UserItem