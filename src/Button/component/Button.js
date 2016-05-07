import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import './css/_button.sass'

export default class Button extends Component {

    static defaultProps = {
        children: 'default',
        disabled: false,
        type: 'submit',
    }

    static contextTypes = {
        children: PropTypes.string,
        disabled: PropTypes.bool,
        type: PropTypes.string,
    }

    onclick() {
        if(this.props.onClick)
            this.props.onClick()
    }
    render() {
        const { className, type, disabled } = this.props;

        let concatClassName = classNames(
            'general-button',
            {[className]: !!className}
        )
        return (
            <div className = {concatClassName}>
                <button
                    type = {type}
                    onClick = { () => this.onclick()}
                    disabled = {disabled} >
                        <span>
                            {this.props.children}
                        </span>
                        {disabled ?  <LoadingIndicator /> : null}
                </button>
            </div>
        )
    }
}


function LoadingIndicator() {
    return (
        <div className="sk-fading-circle">
            <div className="sk-circle1 sk-circle"></div>
            <div className="sk-circle2 sk-circle"></div>
            <div className="sk-circle3 sk-circle"></div>
            <div className="sk-circle4 sk-circle"></div>
            <div className="sk-circle5 sk-circle"></div>
            <div className="sk-circle6 sk-circle"></div>
            <div className="sk-circle7 sk-circle"></div>
            <div className="sk-circle8 sk-circle"></div>
            <div className="sk-circle9 sk-circle"></div>
            <div className="sk-circle10 sk-circle"></div>
            <div className="sk-circle11 sk-circle"></div>
            <div className="sk-circle12 sk-circle"></div>
        </div>
    )
}
