import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class CheckBox extends Component {

    constructor(props){
        super(props)
        this.state = {
            _checked: this.props.checked || false,
            _value: this.props.checked || false,
            _required: this.props.required || false
        }
    }

    static contextTypes = {
      formsy: React.PropTypes.object // What about required?
    }

    static defaultProps = {
        validations: 'isTrue',
    }

    componentWillMount(){
        this.context.formsy.attachToForm(this);
    }
    componentWillUnmount () {
        this.context.formsy.detachFromForm(this);
    }

    setValue(value){
        this.setState({_value: value, __required: value})
    }

    getValue() {
        return this.state._value;
    }

    changeValue(e) {
        this.setValue(e.target.checked);
    }

    render() {
        const { name, className }  = this.props;
        const concatName = classNames(
            'general-checkbox',
            {'actives': this.state.active},
            {[className]: !!className}
        )

        return (
            <label className={ concatName }>
                <input
                    type='checkbox'
                    name={name}
                    onChange={(e) => this.changeValue(e)}
                    defaultChecked={this.state._checked}
                />
                <span>{this.props.children}</span>
            </label>
        );
    }
};
