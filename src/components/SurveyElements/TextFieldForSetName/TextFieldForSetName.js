import React from 'react'
import TextField from 'material-ui/TextField'
import {connect} from 'react-redux'
import {handleNameOfTheInput} from '../../../state/mySurveys/createNewSetOfQuestions'

class TextFieldForSetName extends React.Component {
    state = {
        inputValue: ''
    }

    updateInputValue = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        this.props._handleNameOfTheInput(this.state.inputValue)
    }

    render() {
        return (
            <TextField
                style={{ width: '70%' }}
                value={this.state.inputValue}
                floatingLabelText={this.props.floatingLabelText}
                onChange={(event) => this.updateInputValue(event)}
            />
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    _handleNameOfTheInput: (text) => dispatch(handleNameOfTheInput(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TextFieldForSetName)