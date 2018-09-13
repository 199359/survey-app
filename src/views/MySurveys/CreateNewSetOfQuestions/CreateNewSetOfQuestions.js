import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField';



const style = {
    margin: 5,
}

const CreateNewSetOfQuestions = props => (
    <div className='CreateNewSetOfQuestions-container'>
        <div>
            <form>
                <TextField
                    fullWidth
                    floatingLabelText="Floating Label Text"

                />
            </form>
        </div>
        <div>
            <Link
                to={'/my-surveys/'}
            >
                <RaisedButton className='create_new_set_of_questions create_new_set_of_questions-cancel_button' label="CANCEL" style={style} />
            </Link>
            <RaisedButton className='create_new_set_of_questions create_new_set_of_questions-create_button' secondary={true} label="CREATE" />
        </div>
    </div>
)

export default CreateNewSetOfQuestions