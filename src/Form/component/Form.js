import React, { Component, PropTypes } from 'react'
import { validations } from '../../util/validationRules'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.attachToForm = this.attachToForm.bind(this)
        this.detachFromForm = this.detachFromForm.bind(this)
    }

    static defaultProps = {
        onSubmit: function(){},
        onError: function(){},
        onSuccess: function(){},
    }

    static childContextTypes = {
      formsy: React.PropTypes.object
    }

    getChildContext() {
        return {
            formsy: {
                attachToForm: this.attachToForm,
                detachFromForm: this.detachFromForm,
            }
        }
    }

    componentWillMount() {
      this.inputs = [];
    }

    attachToForm(component) {
        if (this.inputs.indexOf(component) === -1) {
          this.inputs.push(component);
        }
    }

    detachFromForm(component) {
        var componentPos = this.inputs.indexOf(component);

        if (componentPos !== -1) {
          this.inputs = this.inputs.slice(0, componentPos)
            .concat(this.inputs.slice(componentPos + 1));
        }
    }

    validation(){
        let resultComponent;
        resultComponent = this.inputs.filter((component, index) => {
            return (!validations[component.props.validations](component.state._value) && component.state._required);
        })

        resultComponent = resultComponent.length > 0 ? resultComponent[0]: resultComponent;

        if(resultComponent.length === 0){
            return { isValid: true, message: 'valid validation' }
        }else{
            return {isValid: false, message: resultComponent.props.validationError}
        }
    }
    getModel() {
        let data = {};
        this.inputs.forEach((component, index) => {
            data[component.props.name] = component.state._value
        })
        return data
    }

    submit(event) {
        event && event.preventDefault();

        let result = this.validation()
        if(result.isValid){
            let model = this.getModel()
            this.props.onSuccess.call(null, result, model);
            this.props.onSubmit.call(null, model)
        }else{
            this.props.onError.call(null, result)
        }
    }

    render() {
        var { ...nonFormsyProps } = this.props;
        return (
            <form {...nonFormsyProps} onSubmit={(e) => this.submit(e)}>
                {this.props.children}
            </form>
        );
    }
};
