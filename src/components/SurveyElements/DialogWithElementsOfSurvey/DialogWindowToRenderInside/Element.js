import React from 'react'
import Chip from 'material-ui/Chip';
import { connect } from 'react-redux'
import {onRemoveElementFromDialogClick} from '../../../../state/mySurveys/createNewSetOfQuestions'


class Element extends React.Component {
    styles = {
        chip: {
            margin: 4,
        },
        wrapper: {
            display: 'flex',
            flexWrap: 'wrap',
        },
    }

    render() {
        return (
        <Chip
            key={this.props.key}
            onRequestDelete={() =>  this.props._onRemoveElementFromDialogClick(this.props.elementName)}
            style={this.styles.chip}
        >
            {this.props.elementName}
        </Chip>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    _onRemoveElementFromDialogClick: (key) => dispatch(onRemoveElementFromDialogClick(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(Element)