import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { TrashIcon } from '../../../icons/TrashIcon'
import CustomTextField from '../../../components/SurveyElements/CustomTextField'
import {
    toggleDialogWindow,
    addNewTextFieldToSetOfQuestions,
    onQuestionTextChange
} from '../../../state/mySurveys/createNewSetOfQuestions'
import DialogWithElementsOfSurvey from '../../../components/SurveyElements/DialogWithElementsOfSurvey'
import FlatButton from 'material-ui/FlatButton'
import Slider from 'material-ui/Slider'


const style = {
    margin: 10,
}

const min = 2
const max = 15

class CreateNewSetOfQuestions extends React.Component {
    state = {
        slider: 7,
    }

    handleSlider = (event, value) => {
        this.setState({ slider: Math.round(value) });
    }

    render() {
        return (
            <div className='CreateNewSetOfQuestions-container'>
                <div>
                    <form>
                        <CustomTextField
                            floatingLabelText='Name of new set of questions...'
                        />
                        <a onClick={() => alert('tash')} hoverColor='red100'>
                        </a>
                        <hr />
                        {this.props._elementsToSetOfQuestions.map((el, i, arr) => {
                            return (
                                <div>
                                    {el.isQuestionCompleted === true
                                        ?
                                        <div>
                                            <p>{`This is question ${i}: `}</p>
                                            <CustomTextField
                                                floatingLabelText='Your question: '
                                            />
                                            <TrashIcon />
                                        </div>
                                        :
                                        <div>
                                            {el.elementId === 0
                                                ?
                                                <div>
                                                    <p>{`Edit question ${i} below. `}</p>
                                                    <CustomTextField
                                                        floatingLabelText='Type your question...'
                                                        inputQuestionTextFieldKey={i}
                                                        _onQuestionTextChange={(text) => this.props._onQuestionTextChange(text, i)}
                                                    />
                                                    <FlatButton
                                                        label="ADD"
                                                        onClick={() => this.props._addNewTextFieldToSetOfQuestions(i)}
                                                    />
                                                    <TrashIcon />
                                                </div>
                                                :
                                                ''
                                            }
                                            {el.elementId === 1
                                                ?
                                                <div>
                                                    <p>{`Edit question ${i} below. `}</p>
                                                    <CustomTextField
                                                        floatingLabelText='Type your question...'
                                                    />
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Slider
                                                            min={min}
                                                            max={max}
                                                            step={max / 100}
                                                            value={this.state.slider}
                                                            onChange={this.handleSlider}
                                                            style={{ width: '60%' }}
                                                        />
                                                    </div>
                                                    <p>
                                                        <span>{'The range of scale for this question is: '}</span>
                                                        <span>{this.state.slider}</span>
                                                    </p>
                                                    <FlatButton
                                                        label="ADD"
                                                    />
                                                    <TrashIcon />
                                                </div>
                                                :
                                                ''
                                            }
                                        </div>
                                    }

                                    <hr />
                                </div>
                            )
                        })}
                    </form>
                </div>
                <div>
                    <FloatingActionButton mini={true} style={style} >
                        <ContentAdd onClick={() => this.props._toggleDialogWindow()} />
                    </FloatingActionButton>
                    <DialogWithElementsOfSurvey />
                </div>
                <div>
                    <Link
                        to={'/my-surveys/'}
                    >
                        <RaisedButton className='create_new_set_of_questions create_new_set_of_questions-cancel_button' label="CANCEL" style={style} />
                    </Link>
                    <RaisedButton className='create_new_set_of_questions create_new_set_of_questions-create_button' secondary={true} label="CREATE" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _isDialogWindowOpen: state.createNewSetOfQuestiones.isDialogWindowOpen,
    _elementsToSetOfQuestions: state.createNewSetOfQuestiones.elementsToSetOfQuestions
})

const mapDispatchToProps = dispatch => ({
    _toggleDialogWindow: () => dispatch(toggleDialogWindow()),
    _addNewTextFieldToSetOfQuestions: (key) => dispatch(addNewTextFieldToSetOfQuestions(key)),
    _onQuestionTextChange: (text, key) => dispatch(onQuestionTextChange(text, key))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewSetOfQuestions)