let _editorSDK;
let _token;
let compRef;
let controllerRef;
let applicationId;
let controllerConfig={city:'Tel Aviv',country:"IL",isCelsius:true,time:60}


const setControllerConfig=(newConfig)=>{
    controllerConfig=newConfig;
}

const connection=(role) => {
    return {
        connectToRef: compRef,
        controllerRef: controllerRef,
        role: role,
        connectionConfig: {},
        isPrimary: true
    }
}

async function addContainer(editorSDK, appToken, controllerRef, containerRef) {
    const componentDefinition = {
        componentType: 'mobile.core.components.Container',
        layout: {
            x: 310,
            y: 210,
            width: 300,
            height: 300,
        },
        'type': 'Container',
        "style": {
            componentClassName: "mobile.core.components.Container",
            metaData: {
                isHidden: false,
                isPreset: false,
                schemaVersion: "1.0"
            },
            skin: "wysiwyg.viewer.skins.area.AppleArea",
            styleType: "custom",
            type: "TopLevelStyle",
            style:{
                properties:{
                    bg: "color_18", rd: "10px 10px 10px 10px", shd: "0 1px 4px rgba(0, 0, 0, 0.6)", brw: "1px",
                    brd: "color_15", brw:"1px",rd:"10px 10px 10px 10px",shd:"0 1px 4px rgba(0, 0, 0, 0.6)"
                },
                propertiesSource:{
                    bg: "theme", rd: "value", shd: "value", brw: "value", brd: "theme",shd: "value"
                }
            }
        }
    }

    compRef = await editorSDK.components.add(appToken, {componentDefinition, pageRef: containerRef})
    editorSDK.controllers.connect(appToken,connection('container_role'));
    editorSDK.document.components.data.update(appToken, {
        componentRef: controllerRef,
        data: {
            settings: JSON.stringify(Object.assign({}, controllerConfig))
        }
    })
    return compRef;

}

async function addText(editorSDK, appToken, controllerRef,containerRef,role,x,y,text,hNumber) {
    const componentDefinition = {
        componentType: 'wysiwyg.viewer.components.WRichText',
        layout: {
            x: x,
            y: y,
            width: 300,
            height: 300,

        },
        data:{
            type: "StyledText",
            text: `<h${hNumber} class="font_${hNumber}" style="color:#FFFFFF">${text}</h${hNumber}>`,
            stylesMapId: "CK_EDITOR_PARAGRAPH_STYLES"

        },
        'type': 'Component',
        'props': {
            type: 'WRichTextProperties'
        },
        'style': 'txtNew',
    }

    compRef = await editorSDK.components.add(appToken, {componentDefinition, pageRef: containerRef})
    editorSDK.controllers.connect(appToken,connection(role));
    return compRef;
}

async function addImage(editorSDK, appToken, controllerRef,containerRef,role,x,y,icon) {
    const componentDefinition = {
        componentType: 'wysiwyg.viewer.components.WPhoto',
        layout: {
            x: x,
            y: y,
            width: 170,
            height: 170,


        },
        data:{
            type: "Image",
            metaData:{isPreset: false, schemaVersion: "1.0", isHidden: false},
            uri:'https://openweathermap.org/img/w/'+icon+'.png',
            stylesMapId: "CK_EDITOR_PARAGRAPH_STYLES"

        },
        'type': 'Component',
        'props': {
            type: 'WPhotoProperties',
        },
        'style': 'wp2',
    }

    compRef = await editorSDK.components.add(appToken, {componentDefinition, pageRef: containerRef})
    editorSDK.controllers.connect(appToken,connection(role));
    return compRef;
}

async function addButton(editorSDK, appToken, controllerRef,containerRef,role,x,y,icon) {
    const componentDefinition = {
        componentType: 'wysiwyg.viewer.components.SiteButton',
        layout: {
            x: x,
            y: y,
            width: 128,
            height: 40,
        },
        data:{
            label:"fetch weather",
            link:"",
            metaData:{isPreset: false, schemaVersion: "1.0", isHidden: false},
            type:"LinkableButton"
        },
        'type': 'Component',
        'props': {
            margin:0,
            align:'center',
             metaData:  {isPreset: false, schemaVersion: "1.0", isHidden: false},
            type: 'ButtonProperties',
        },
        style:{
            metaData:  {isPreset: false, schemaVersion: "1.0", isHidden: false},
            skin:'wysiwyg.viewer.skins.button.BasicButton',
            componentClassName:'wysiwyg.viewer.components.SiteButton',
            style:{
                properties:{'alpha-bg':"1", 'alpha-bgh':"1",'alpha-brd':"1",'alpha-brdh': "1",
                    bg: "#566FB8",bgh:'#3E569E' ,rd: "20px", shd: "0.00px 3.00px 0px 0px rgba(86,111,184,0.6)", brw: "0px",
                    fnt: "normal normal normal 14px/1.4em clarendon-w01-medium-692107",
                    brd:"#2B689C", brdh: "#536EB7",rd:"10px 10px 10px 10px",shd:"0 1px 4px rgba(0, 0, 0, 0.6)",'boxShadowToggleOn-shd':"true"
                    ,txt:'#FFFFFF',txth:'#FFFFFF'
                },
                propertiesSource:{
                    'alpha-bg':'value', 'alpha-bgh':'value','alpha-brd':'value','alpha-brdh': 'value',
                    bg: 'value',bgh:'value' ,rd: 'value', shd:'value', brw: 'value', fnt:'value',
                    brd:'value', brdh:'value',rd:'value',shd:'value','boxShadowToggleOn-shd':'value',txt:'value',txth:'value'
                }
            },
            styleType: "custom",
            type: "TopLevelStyle",
        }

    }

    compRef = await editorSDK.components.add(appToken, {componentDefinition, pageRef: containerRef})
    editorSDK.controllers.connect(appToken,connection(role));
    return compRef;
}


module.exports = {

    editorReady: async (editorSDK, token, {firstInstall}) => {
        _editorSDK = editorSDK;
        _token = token;
        if (firstInstall || !await controllerAlreadyExists('containerController')) {
            console.log('Creating missing controller!');
            applicationId = await editorSDK.info.getAppDefinitionId(token);
            const pageRef = await editorSDK.document.pages.getCurrent(token);
            controllerRef= await editorSDK.components.add(token, {
                componentDefinition: {
                    componentType: 'platform.components.AppController',
                    data: {
                        type: 'AppController',
                        controllerType: 'containerController',
                        applicationId,
                        settings: JSON.stringify(Object.assign({}, controllerConfig))
                    }
                },
                pageRef
            });
            let date=new Date();
            date=date.toDateString();
            await editorSDK.editor.setAppAPI(applicationId,{setControllerConfig});
            const containerRef = await addContainer(editorSDK, applicationId, controllerRef, pageRef)
            const cityText = await addText(editorSDK, applicationId, controllerRef,containerRef,'city_role',10,10,controllerConfig.city+", "+controllerConfig.country,4);
            const dateText = await addText(editorSDK, applicationId, controllerRef,containerRef,'date_role',10,48,date,5);
            const weather_icon = await addImage(editorSDK, applicationId, controllerRef,containerRef,'icon_role',-7,55,'01d');
            const degreeText = await addText(editorSDK, applicationId, controllerRef,containerRef,'degree_role',10,195,controllerConfig.isCelsius? "C":"F",4);
            const descriptionText = await addText(editorSDK, applicationId, controllerRef,containerRef,'description_role',10,238,'Fair',5);
            const fetchButton = await addButton(editorSDK, applicationId, controllerRef,containerRef,'button_role',163,196);

        }
    },

    onEvent: async ({eventType, eventPayload}) => {
        const {componentRef} = eventPayload;
        if (eventType ==='componentGfppClicked' ) {
            const options = {
                title: 'weather-app settings',
                url: './settings.html',
                initialData: {
                    componentRef,
                    controllerRef,
                    controllerConfig,
                    applicationId
                },
                width: 400,
                height: 530,
            };
            await _editorSDK.editor.openComponentPanel(_token, {
                ...options,
                componentRef: componentRef
            });
        }
    },

    getAppManifest: () => {

        const containerManifest = {
            gfpp: {
                desktop: {
                    mainAction1:{label:'settings', actionId:"SETTINGS"},
                    iconButtons: {
                        layout:'HIDE',
                        design: 'HIDE',
                        animation: 'HIDE',
                        help: 'HIDE',
                        customizeDesign: 'HIDE',
                    },
                }
            }};

        return {
            controllersStageData: {
                containerController: {
                    default: {
                        connections: {
                            container_role: containerManifest
                        },

                    }
                }
            },
            exports: {
                containerController: {
                    tagname: 'containerController',
                    widgetDisplayName: '',
                    eventHandlers: {},
                    synthetic: false,
                    inherits: {},
                    members: {
                        randomize: {
                            description: 'Randomize image sources',
                            kind: 'function'
                        }
                    }
                }
            }
        };
    }

};

async function controllerAlreadyExists(controllerType) {
    const controllers = await _editorSDK.controllers.listAllControllers(_token);
    for (const controller of controllers) {
        const data = await _editorSDK.controllers.getData(_token, controller);
        if (data.controllerType === controllerType) {
            return true;
        }
    }
    return false;
}
