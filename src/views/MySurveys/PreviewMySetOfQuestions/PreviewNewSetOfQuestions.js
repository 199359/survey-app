import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

const style = {
    margin: 5,
}

const PreviewNewSetOfQuestions = props => (
    <div className='PreviewNewSetOfQuestions-container'>
        <div>
            PreviewNewSetOfQuestions
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

export default PreviewNewSetOfQuestions