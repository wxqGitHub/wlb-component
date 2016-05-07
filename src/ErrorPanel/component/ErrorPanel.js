import React, { Component } from 'react'
import classNames from 'classnames'
import './css/_errorPanel.sass'

export default class ErrorPanel extends Component{
    render() {
        const className = this.props.className
        let concatName = classNames(
            'error-panel',
            {[className]: !!className}
        )
        return <div className = {concatName}>{this.props.children}</div>
    }
}
