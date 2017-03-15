import React, { Component } from 'react'
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


class Topics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            finished: false,
            stepIndex: 0,
        };

        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    };

    handlePrev() {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    }

    handleNext() {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return 'Edit account info...';
            case 1:
                return 'Add Personal details';
            case 2:
                return 'Final details!';
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }


    render() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };

        return (
            <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Account</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Personal</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Finish</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished ?
                        (<p>
                            <a
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({ stepIndex: 0, finished: false });
                                }}>Click here</a> to reset the example.</p>
                        ) : (
                            <div>
                                <p>{this.getStepContent(stepIndex)}</p>
                                <div style={{ marginTop: 12 }}>
                                    <FlatButton
                                        label="Back"
                                        disabled={stepIndex === 0}
                                        onTouchTap={this.handlePrev}
                                        style={{ marginRight: 12 }}
                                    />
                                    <RaisedButton
                                        label={stepIndex === 2 ? 'Finish' : 'Next'}
                                        primary={true}
                                        onTouchTap={this.handleNext}
                                    />
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}


export default Topics