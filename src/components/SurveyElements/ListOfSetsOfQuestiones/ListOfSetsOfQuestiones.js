import React from 'react'
import {ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500} from 'material-ui/styles/colors';


const ListOfSetsOfQuestiones = (props) => (
        <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
            rightIcon={<ActionInfo />}
            primaryText={props.primaryText}
            secondaryText={props.secondaryText}
        />
)

export default ListOfSetsOfQuestiones