import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'
import ListOfSetsOfQuestiones from '../../components/SurveyElements/ListOfSetsOfQuestiones'

class MySurveys extends React.Component {
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

export default MySurveys