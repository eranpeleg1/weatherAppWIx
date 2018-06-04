import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Button, ButtonGroup,FormControl,ButtonToolbar,ToggleButtonGroup,ToggleButton} from 'react-bootstrap'
const ROLE_BUTTON = 'button';
const ROLE_IMAGE = 'image';

const {editorSDK,token} = window;


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isCelsius: this.props.initialState.isCelsius!==undefined?this.props.initialState.isCelsius: true,
            city: this.props.initialState.city!==undefined?this.props.initialState.city:"Tel Aviv",
            time: this.props.initialState.time!==undefined?this.props.initialState.time:60,
            country: this.props.initialState.country!==undefined?this.props.initialState.country:"IL",
        }
    }

    static propTypes = {
        toggle: PropTypes.func.isRequired
    };


    render() {
        let applicationId=this.props.data.applicationId;
        let compRef=this.props.data.componentRef;
        let controllerRef=this.props.data.controllerRef;
        let controllerConfig=Object.assign({},this.state);
        return (
            <div>
                <div style={{margin:10}}>
                    <h4 style={{marginBottom:10}}>city:</h4>
                    <FormControl type='text' placeholder='enter city' value={this.state.city} onChange={(event)=>{
                        controllerConfig.city=event.target.value;
                        editorSDK.document.components.data.update(applicationId, {
                            componentRef: controllerRef,
                            data: {
                                settings: JSON.stringify(Object.assign({}, controllerConfig))
                            }
                        })
                        this.props.api.setControllerConfig(controllerConfig);
                        this.setState({city:event.target.value})}}/>
                </div>
                <div style={{margin:10}}>
                    <h4 style={{marginBottom:10}}>country:</h4>
                    <FormControl type='text' placeholder='enter country' value={this.state.country} onChange={(event)=>{
                        controllerConfig.country=event.target.value;
                        editorSDK.document.components.data.update(applicationId, {
                            componentRef: controllerRef,
                            data: {
                                settings: JSON.stringify(Object.assign({}, controllerConfig))
                            }
                        })
                        this.props.api.setControllerConfig(controllerConfig);
                        this.setState({country:event.target.value})}}/>
                </div>
                <div style={{margin:10}}>
                    <h4 style={{marginBottom:10}}>degree:</h4>
                    <ButtonToolbar>
                        <ToggleButtonGroup type="radio" name="degree" defaultValue={this.state.isCelsius===true? 1:2}>
                            <ToggleButton bsStyle='primary' value={1} onClick={()=>{
                                controllerConfig.isCelsius=true;
                                editorSDK.document.components.data.update(applicationId, {
                                    componentRef: controllerRef,
                                    data: {
                                        settings: JSON.stringify(Object.assign({}, controllerConfig))
                                    }
                                })
                                this.props.api.setControllerConfig(controllerConfig);
                                this.setState({isCelsius:true})}}>Celsius</ToggleButton>
                            <ToggleButton bsStyle='primary' value={2} onClick={()=>{
                                controllerConfig.isCelsius=false;
                                editorSDK.document.components.data.update(applicationId, {
                                    componentRef: controllerRef,
                                    data: {
                                        settings: JSON.stringify(Object.assign({}, controllerConfig))
                                    }
                                })
                                this.props.api.setControllerConfig(controllerConfig);
                                this.setState({isCelsius:false})}}>Fahrenheit</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </div>
                <div style={{margin:10}}>
                    <h4>time:</h4>
                    <FormControl type='number' placeholder='enter time in sec' value={this.state.time} onChange={(event)=>{
                        controllerConfig.time=parseInt(event.target.value);
                        editorSDK.document.components.data.update(applicationId, {
                            componentRef: controllerRef,
                            data: {
                                settings: JSON.stringify(Object.assign({}, controllerConfig))
                            }
                        })
                        this.props.api.setControllerConfig(controllerConfig);
                        this.setState({time:parseInt(event.target.value)})}}/>
                </div>
            </div>
        );
    }
}




const enableApp = async ({token, editorSDK, controllerRef}) => {
    const components = await editorSDK.components.getAllComponents(token);
    const buttons = [];
    const images = [];

    for (const componentRef of components) {
        const type = await editorSDK.components.getType(token, {componentRef});
        if (type === 'wysiwyg.viewer.components.SiteButton') {
            buttons.push(componentRef);
        }
        if (type === 'wysiwyg.viewer.components.WPhoto') {
            images.push(componentRef);
        }
    }

    buttons.map(componentRef =>
        editorSDK.controllers.connect(token, {
            controllerRef,
            connectToRef: componentRef,
            role: ROLE_BUTTON
        })
    );

    images.map(componentRef =>
        editorSDK.controllers.connect(token, {
            controllerRef,
            connectToRef: componentRef,
            role: ROLE_IMAGE
        })
    );

};

const disableApp = async ({token, editorSDK, controllerRef}) => {
    const connectedComponents = await editorSDK.controllers.listConnectedComponents(token, {controllerRef});
    connectedComponents.map(componentRef =>
        editorSDK.controllers.disconnect(token, {
            controllerRef,
            connectToRef: componentRef,
            role: null
        })
    );
};


editorSDK.panel.onEvent(async ({eventType, eventPayload}) => {
    if (eventType === 'startConfiguration') {
       let initialState =Object.assign({},eventPayload.initialData.controllerConfig)
        const appAPI = await editorSDK.editor.getAppAPI();
        ReactDOM.render(
            <App initialState={initialState}
                 data={eventPayload.initialData}
                 api={appAPI}
            />,
            document.getElementById('root')
        );
    }
});
