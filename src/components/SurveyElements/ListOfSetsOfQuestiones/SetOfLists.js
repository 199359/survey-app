import React from 'react'
import ListOfSetsOfQuestiones from './ListOfSetsOfQuestiones'
import {List} from 'material-ui/List';
import {connect} from 'react-redux'


const SetOfLists = (props) => (
    <List>
    {Object.entries(props._mySetsOfQuestiones).length ? '' : <p>Nothing to display</p>}
    {Object.entries(props._mySetsOfQuestiones).map((el, i, arr)=> {
        return (
            <ListOfSetsOfQuestiones
            primaryText={`${el[0]}`}
            secondaryText={`Number of questions: ${el[1].length}`}
            />
        )
    })}
    </List>
)

const mapStateToProps = state => ({
    _mySetsOfQuestiones: state.createNewSetOfQuestiones.mySetsOfQuestiones
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SetOfLists)