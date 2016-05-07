import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import './css/_input.sass'

export default class Input extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            _value: this.props.value || '',
            _type: this.props.type || 'text',
            _required: this.props.required || false,
            _active: false,
        }
    }
    static contextTypes = {
      formsy: React.PropTypes.object // What about required?
    }

    componentWillMount(){
        this.context.formsy.attachToForm(this);
    }
    componentWillUnmount () {
        this.context.formsy.detachFromForm(this);
    }
    setValue(value){
        this.setState({_value: value}, function(){
            this.isActive()
        })
    }

    getValue() {
        return this.state._value;
    }

    clearValue(){
        this.setValue('');
    }

    isActive(){
        !!this.getValue() ? this.setState({_active: true}) : this.setState({_active: false})
    }

    changeValue(e) {
        this.setValue(e.target.value);
    }

    iconType(type) {
        const iconList = ['phone', 'code', 'token', 'lock'];
        let concatName = classNames(
            'general-icon',
            {[`icon-${type}-active`]: this.state.active},
            {[`icon-${type}`]: !this.state.active}
        )
        return (
            iconList.indexOf(type) === -1 ?
            <div className = 'icon-none'>{type}</div>
            :
            <div className = {concatName}></div>
        )
    }

    switchInputType(){
        let type = this.state._type
        type = type == 'password' ? 'text': 'password';
        this.setState({_type: type})
    }
    operationType(type){
        switch (type) {
            case 'close':
                if(!!this.getValue()){
                    return <div className ='operation-clear general-operation' onClick = {() => this.clearValue()}></div>
                }
                break
            case 'eye':
                let concatName = classNames(
                    'general-operation',
                    {'operation-hide': this.state._type == 'password'},
                    {'operation-show': this.state._type == 'text'},
                )
                return (
                    <div className= {concatName} onClick = {() => this.switchInputType()}></div>
                )
            default:
        }
    }

    render() {
        const { placeholder, type, name, icon, operation, className }  = this.props;

        let concatName = classNames(
            'general-input',
            {'actives': this.state.active},
            {[className]: !!className}
        )

        return (
            <div className={ concatName }>
                { this.iconType(icon)}
                <input
                    type={this.state._type}
                    name={name}
                    value={this.getValue()}
                    onChange={(e) => this.changeValue(e)}
                    placeholder= { placeholder}
                />
                { this.operationType(operation)}
            </div>
        );
    }
};
