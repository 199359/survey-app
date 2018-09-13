import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { TrashIcon } from '../../../icons/TrashIcon'
import CustomTextField from '../../../components/SurveyElements/CustomTextField'
import { toggleDialogWindow } from '../../../state/createNewSetOfQuestions'
import Dialog from 'material-ui/Dialog';


const style = {
    margin: 10,
}



class CreateNewSetOfQuestions extends React.Component {
    
    actions = [
        <RaisedButton
            label="CANCEL"
            onClick={() => this.props._toggleDialogWindow()}
        />,
        <RaisedButton
            label="ADD ELEMENT"
            secondary={true}
            style={style} />
    ];

    render() {
        return(
    <div className='CreateNewSetOfQuestions-container'>
        <div>
            <form>
                <CustomTextField />
                <a onClick={() => alert('tash')} hoverColor='red100'>
                    <TrashIcon />
                </a>
            </form>
        </div>
        <div>
            <FloatingActionButton mini={true} style={style} >
                <ContentAdd onClick={() => this.props._toggleDialogWindow()} />
            </FloatingActionButton>
            <Dialog
                title="Choose new element"
                actions={this.actions}
                modal={false}
                open={this.props._isDialogWindowOpen}
                onRequestClose={this.handleClose}
            >
                Open a Date Picker dialog from within a dialog.
            </Dialog>
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
)}}

const mapStateToProps = state => ({
    _isDialogWindowOpen: state.createNewSetOfQuestiones.isDialogWindowOpen
})

const mapDispatchToProps = dispatch => ({
    _toggleDialogWindow: () => dispatch(toggleDialogWindow())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewSetOfQuestions)