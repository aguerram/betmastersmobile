import React, {Component} from 'react'
import {StyleSheet, Text, View, Dimensions, KeyboardAvoidingView} from 'react-native';
import { Input, CheckBox} from 'react-native-elements'
import LoadingButton from '../../data/form/LoadingButton'
import {ToastAndroid} from 'react-native';
import style from '../styles/'
import Icon from '@expo/vector-icons/Feather'
import {connect} from 'react-redux'
import {ID} from '../../utils/config'
import {getResponse} from '../../utils/helpers'
import {LoginForm, LoginSubmit} from '../../redux/actions/LoginAction'
let deviceWidth = Dimensions.get('window').width

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            checked: false
        }
        this.emailInputChange = this.emailInputChange.bind(this);
        this.passwordInputChange = this.passwordInputChange.bind(this);
        this.checkboxChange = this.checkboxChange.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        if (this.props.response[ID.LOGIN.EMAIL]) {
            console.log(this.props.response[ID.LOGIN.EMAIL].message)
        }
        else{
            console.log('Not recived')
        }
    }

    checkboxChange() {
        this.setState({
            checked: !this.state.checked
        }, () => {
            this.props.LoginForm({
                rememberMe: this.state.checked
            })
        })

    }

    emailInputChange(val) {
        this.props.LoginForm({
            email: val,
            password: this.props.login.password
        })
    }

    passwordInputChange(val) {
        this.props.LoginForm({
            password: val,
            email: this.props.login.email
        })
    }

    loginSubmit() {
        this.props.LoginSubmit({
            email: 'fsdfds'
        })

    }

    render() {
        let state = this.state;
        return (<KeyboardAvoidingView style={style.container} behavior="padding" enabled>
            <Input
                placeholder='Email'
                leftIcon={{type: 'feather', name: 'user'}}
                leftIconContainerStyle={{
                    paddingRight: 10
                }}
                shake
                style={{
                    fontSize: 14
                }}
                errorMessage={getResponse(this.props.response,ID.LOGIN.EMAIL)}
                textContentType='emailAddress'
                value={this.props.login.username}
                name="username"
                onChangeText={(val) => this.emailInputChange(val)}

            />
            <Input
                placeholder='Password'
                leftIcon={{type: 'feather', name: 'lock'}}
                leftIconContainerStyle={{
                    paddingRight: 10
                }}
                secureTextEntry
                textContentType='password'
                errorMessage={getResponse(this.props.response,ID.LOGIN.PASSWORD)}
                onChangeText={(val) => this.passwordInputChange(val)}
                value={this.props.login.password}
                name="password"
            />
            <View style={{width: deviceWidth}}>
                <View style={{position: 'absolute', left: 0}}>
                    <CheckBox
                        title="Remembre me"
                        checked={this.state.checked}
                        onPress={this.checkboxChange}
                    />
                </View>
                <View style={{
                    width: 100,
                    position: 'absolute',
                    right: 10,
                    top: 5
                }}>
                    <LoadingButton
                        loading={state.loading}
                        icon={
                            <Icon
                                name="log-in"
                                color="white"
                                size={19}
                            />
                        }
                        _onPress={this.loginSubmit} title=" Login"/>
                </View>
            </View>
        </KeyboardAvoidingView>);
    }
}

const stateMapToProps = (state) => ({
    login: state.login,
    response: state.response
});
const actionMapToProps = {
    LoginForm,
    LoginSubmit
}
export default connect(stateMapToProps, actionMapToProps)(Signin);