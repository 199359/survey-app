import React from 'react'
import ListOfSetsOfQuestiones from './ListOfSetsOfQuestiones'
import {List} from 'material-ui/List';
import {connect} from 'react-redux'


const SetOfLists = (props) => (
    <List>
            <ListOfSetsOfQuestiones
            primaryText='Template of task'
            secondaryText='Number of questions: 4'
            />
    </List>
)

const mapStateToProps = state => ({
    _mySetsOfQuestiones: state.createNewSetOfQuestiones.mySetsOfQuestiones
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SetOfLists)