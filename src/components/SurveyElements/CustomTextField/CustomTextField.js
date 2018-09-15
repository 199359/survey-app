import React from 'react'
import TextField from 'material-ui/TextField'

const CustomTextField = (props) => (
        <TextField
            style={{ width: '70%' }}
            floatingLabelText={props.floatingLabelText}
            onChange={props._onQuestionTextChange}
            key={props.inputQuestionTextFieldKey}
            _onQuestionTextChange={() => this.props._onQuestionTextChange(props.inputQuestionTextFieldKey)}
        />
)

export default CustomTextField