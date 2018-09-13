import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

const style = {
    margin: 5,
}

const CreateNewSetOfQuestions = props => (
    <div className='CreateNewSetOfQuestions-container'>
        <div>
            CreateNewSetOfQuestions
        </div>
        <div>
            <Link
                to={'/my-surveys/'}
            >
                <RaisedButton label="CANCEL" style={style} />
            </Link>
            <RaisedButton label="SEND" secondary={true} style={style} />
        </div>
    </div>
)

export default CreateNewSetOfQuestions