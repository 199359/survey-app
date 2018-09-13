import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'


class MySurveys extends React.Component {
    render() {
        return (
            <div>
                <Link
                    to={'/create-new-set-of-questions/'}
                >
                    <RaisedButton className='my_surveys-menu_option_button' label="CREATE NEW SET OF QUESTIONS" />
                </Link>
                <Link 
                to={'/preview-my-set-of-questions/'}
                >
                <RaisedButton className='my_surveys-menu_option_button' label="PREVIEW MY SETS OF QUESTIONS" />
                </Link>
            </div>
        )
    }
}

export default MySurveys