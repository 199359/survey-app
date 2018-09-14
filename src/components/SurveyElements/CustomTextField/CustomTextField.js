import React from 'react'
import TextField from 'material-ui/TextField'

const CustomTextField = (props) => (
        <TextField
            style={{ width: '70%' }}
            floatingLabelText={props.floatingLabelText}
        />
)

export default CustomTextField