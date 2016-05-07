import 'babel-polyfill';
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';

import {
    Form,
    Input,
    Button,
    CheckBox,
    ErrorPanel,
    Circle
} from './lib'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            canSubmit: false,
            validationError: '',
            percent: 30,
            color: '#3FC7FA',
        }
    }

    submit(model) {
      this.setState({canSubmit: true})
    }

    onSuccess(data) {
        if(data.isValid)
            this.setState({
                validationError: ''
            })
    }

    onError(data){
        if(!data.isValid)
            this.setState({
                validationError: data.message
            })
    }
    changeState() {
        const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
        this.setState({
            percent: parseInt(Math.random() * 100, 10),
            color: colorMap[parseInt(Math.random() * 3, 10)],
        });
    }

    render() {
        const circleContainerStyle = {
            width: '2.5rem',
            height: '2.5rem',
        };
        const style = {
            fontSize: '.5rem'
        }
        return (
            <div>
                <Form
                    onSuccess = {(data) => this.onSuccess(data)}
                    onError = {(data) => this.onError(data)}
                    onSubmit= {(model) => this.submit(model)}
                    >
                    <Input name="numbe1" icon='phone' operation='close' placeholder='请输入手机号' validations="isNumeric" validationError="请输入手机号" required/>
                    <Input name="numbe4" icon='lock' type='password' operation='eye' placeholder='请输入密码' validations="isNumeric" validationError="请输入正确的密码" required/>
                    <CheckBox validationError="勾2选checkbox" name='checkboxs' checked required>
                        checkbox
                    </CheckBox>
                    <ErrorPanel> {this.state.validationError}</ErrorPanel>
                    <Button className='' type= 'submit' disabled = {this.state.canSubmit}>下一步</Button>
                </Form>

                <div style={circleContainerStyle}>
                  <Circle percent={this.state.percent} strokeWidth="6" strokeColor={this.state.color} />
                </div>
                <p>
                  <button style={style} onClick={() => this.changeState()}>Change State</button>
                </p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
