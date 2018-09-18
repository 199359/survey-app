import React from 'react'
import TextField from 'material-ui/TextField'

class CustomTextField extends React.Component {
    state = {
        inputValue: ''
    }

    updateInputValue = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        this.props._onQuestionTextChange(event.target.value)
    }

    render() {
        return (
            <TextField
                style={{ width: '70%' }}
                value={this.state.inputValue}
                floatingLabelText={this.props.floatingLabelText}
                onChange={(event) => this.updateInputValue(event)}
                key={this.props.inputQuestionTextFieldKey}
            />
        )
    }
}

export default CustomTextField