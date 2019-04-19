import React, {Component} from 'react'

import {Button} from 'react-native-elements'
import PropTypes  from 'prop-types'
class LoadingButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
        this.handelPress = this.handelPress.bind(this);
    }

    handelPress = () => {
        this.setState({
            loading: true
        })
        props._onPress()
    }

    render() {
        return (
            <Button onPress={handelPress} loading={state.loading} title={props.title} {...props} />
        )
    }
}
LoadingButton.prototype = {
    _onPress: PropTypes.func.isRequired
}
export default LoadingButton