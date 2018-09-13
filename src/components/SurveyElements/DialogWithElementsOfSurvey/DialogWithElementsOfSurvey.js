import React from 'react'
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux'
import { toggleDialogWindow } from '../../../state/createNewSetOfQuestions'
import RaisedButton from 'material-ui/RaisedButton';
import DialogWindowToRenderInside from './DialogWindowToRenderInside'

const style = {
    margin: 10,
}

class DialogWithElementsOfSurvey extends React.Component {
    
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
        return (
            <div>
                <Dialog
                    title="Choose new element"
                    actions={this.actions}
                    modal={false}
                    open={this.props._isDialogWindowOpen}
                    onRequestClose={this.handleClose}
                >
                <DialogWindowToRenderInside/>
            </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _isDialogWindowOpen: state.createNewSetOfQuestiones.isDialogWindowOpen
})

const mapDispatchToProps = dispatch => ({
    _toggleDialogWindow: () => dispatch(toggleDialogWindow())
})

export default connect(mapStateToProps, mapDispatchToProps)(DialogWithElementsOfSurvey)