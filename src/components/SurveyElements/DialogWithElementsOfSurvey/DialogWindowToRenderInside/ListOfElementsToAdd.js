import React from 'react'
import Element from './Element'
import { connect } from 'react-redux'

const ListOfElementsToRender = (props) => (
    <div>
        {props._choosenValues.map((el) => {
            return (
                <Element
                key={el.key}
                elementName={el.elementName}
                />
            )
        })}
    </div>

)

const mapStateToProps = state => ({
    _choosenValues: state.createNewSetOfQuestiones.choosenValues,
    _availableElements: state.createNewSetOfQuestiones.availableElements
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ListOfElementsToRender)