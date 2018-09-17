import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'
import ListOfSetsOfQuestiones from '../../components/SurveyElements/ListOfSetsOfQuestiones'
import {connect} from 'react-redux'
import {initChannelsSync} from '../../state/mySurveys/createNewSetOfQuestions'

class MySurveys extends React.Component {
    componentWillMount(){
        console.log(this.props._mySetsOfQuestiones)
        this.props._initChannelsSync(this.props._mySetsOfQuestiones)
    }

    render() {
        return (
            <div>
                <Link
                    to={'/create-new-set-of-questions/'}
                >
                    <RaisedButton className='my_surveys-menu_option_button' label="CREATE NEW SET OF QUESTIONS" />
                </Link>
                <ListOfSetsOfQuestiones />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _mySetsOfQuestiones: state.createNewSetOfQuestiones.mySetsOfQuestiones
})

const mapDispatchToProps = dispatch => ({
    _initChannelsSync: () => dispatch(initChannelsSync())
})

export default connect(mapStateToProps, mapDispatchToProps)(MySurveys)