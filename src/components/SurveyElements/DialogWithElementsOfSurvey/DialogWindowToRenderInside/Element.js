import React from 'react'
import Chip from 'material-ui/Chip';

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

const Element = (props) => (
        <Chip
            key={props.key}
            onRequestDelete={() => this.handleRequestDelete()}
            style={styles.chip}
        >
            {props.elementName}
        </Chip>
)

export default Element