import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { TrashIcon } from '../../../icons/TrashIcon'
import CustomTextField from '../../../components/SurveyElements/CustomTextField'

const style = {
    margin: 10,
}

const icons = {
    trash: "M 11 -0.03125 C 10.164063 -0.03125 9.34375 0.132813 8.75 0.71875 C 8.15625 1.304688 7.96875 2.136719 7.96875 3 L 4 3 C 3.449219 3 3 3.449219 3 4 L 2 4 L 2 6 L 24 6 L 24 4 L 23 4 C 23 3.449219 22.550781 3 22 3 L 18.03125 3 C 18.03125 2.136719 17.84375 1.304688 17.25 0.71875 C 16.65625 0.132813 15.835938 -0.03125 15 -0.03125 Z M 11 2.03125 L 15 2.03125 C 15.546875 2.03125 15.71875 2.160156 15.78125 2.21875 C 15.84375 2.277344 15.96875 2.441406 15.96875 3 L 10.03125 3 C 10.03125 2.441406 10.15625 2.277344 10.21875 2.21875 C 10.28125 2.160156 10.453125 2.03125 11 2.03125 Z M 4 7 L 4 23 C 4 24.652344 5.347656 26 7 26 L 19 26 C 20.652344 26 22 24.652344 22 23 L 22 7 Z M 8 10 L 10 10 L 10 22 L 8 22 Z M 12 10 L 14 10 L 14 22 L 12 22 Z M 16 10 L 18 10 L 18 22 L 16 22 Z "
}

const CreateNewSetOfQuestions = props => (
    <div className='CreateNewSetOfQuestions-container'>
        <div>
            <form>
                <CustomTextField/>
                <a onClick={()=> alert('tash')} hoverColor='red100'>
                <TrashIcon/>
                </a>
            </form>
        </div>
        <div>
            <FloatingActionButton mini={true} style={style}>
                <ContentAdd />
            </FloatingActionButton>
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