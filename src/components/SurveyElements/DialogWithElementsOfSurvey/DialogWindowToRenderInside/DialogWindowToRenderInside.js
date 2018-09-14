import React from 'react'
import ListOfElementsToAdd from './ListOfElementsToAdd'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux'
import { onChanegeValueOfDropdownMenuInDialog } from '../../../../state/mySurveys/createNewSetOfQuestions'


const styles = {
    customWidth: {
        width: 200,
    }
}

class DialogWindowToRenderInside extends React.Component {
    render() {
        return (
            <div>
                <ListOfElementsToAdd />
                Choose element from list below:
                <DropDownMenu
                    value={this.props._valueOfDropdownMenuInDialog}
                    onChange={(event, index, value) => this.props._onChanegeValueOfDropdownMenuInDialog(value)}
                    style={styles.customWidth}
                    autoWidth={false}
                >
                    <MenuItem value={0} primaryText={this.props._availableElements[0]} />
                    <MenuItem value={1} primaryText={this.props._availableElements[1]} />
                </DropDownMenu>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    _valueOfDropdownMenuInDialog: state.createNewSetOfQuestiones.valueOfDropdownMenuInDialog,
    _availableElements: state.createNewSetOfQuestiones.availableElements
})

const mapDispatchToProps = dispatch => ({
    _onChanegeValueOfDropdownMenuInDialog: (value) => dispatch(onChanegeValueOfDropdownMenuInDialog(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(DialogWindowToRenderInside)