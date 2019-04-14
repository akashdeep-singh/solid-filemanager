import config from '../config.js';

export const defaultState = {
    path: [],
    pathSublist: [],
    host: null,
    isLoggedIn: false,
    webId: null,
    itemList: [],
    itemListSublist: [],
    fileListFilter: null,
    contextMenuVisible: null,
    contextMenuPosition: [],
    contextMenuPositionElement: null,
    selectedItems: [],
    selectedFolderSublist: null,
    loading: false,
    loadingSublist: false,
    errorMsg: null,
    visibleDialogSolidLogin: false,
    visibleDialogSolidLogout: false,
    visibleDialogCreateFolder: false,
    visibleDialogCreateFile: false,
    visibleDialogUploadFile: false,
    visibleDialogContent: false,
    visibleDialogMedia: false,
    visibleDialogEdit: false,
    visibleDialogMove: false,
    visibleDialogCopy: false,
    visibleDialogRename: false,
    fileContentBlobUrl: null,
    fileUploadProgress: 0,
    fileUploadList: []
};

/**
 * Main content reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const MainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_PATH':
            return Object.assign({}, state, {
                path: action.value
            });
        case 'SET_PATH_SUB_LIST':
            return Object.assign({}, state, {
                pathSublist: action.value
            });
        case 'SET_HOST':
            config.setHost(action.value);
            return Object.assign({}, state, {
                host: action.value
            });
        case 'SET_IS_LOGGED_IN':
            return Object.assign({}, state, {
                isLoggedIn: action.value
            });
        case 'SET_WEB_ID':
            return Object.assign({}, state, {
                webId: action.value
            });
        case 'ENTER_TO_DIRECTORY_SUB_LIST':
            return Object.assign({}, state, {
                pathSublist: [...state.pathSublist, action.value]
            });
        case 'SET_ITEM_LIST':
            return Object.assign({}, state, {
                itemList: action.value.sort((a, b) => a.type < b.type ? -1 : a.name.toLowerCase() > b.name.toLowerCase())
            });
        case 'SET_ITEM_LIST_SUB_LIST':
            return Object.assign({}, state, {
                itemListSublist: action.value.sort((a, b) => a.type < b.type ? -1 : a.name.toLowerCase() > b.name.toLowerCase())
            });
        case 'SET_FILE_LIST_FILTER':
            return Object.assign({}, state, {
                fileListFilter: action.value
            });
        case 'SET_CONTEXT_MENU_VISIBLE':
            return Object.assign({}, state, {
                contextMenuVisible: action.value
            });
        case 'SET_CONTEXT_MENU_POSITION':
            return Object.assign({}, state, {
                contextMenuPosition: action.value
            });
        case 'SET_CONTEXT_MENU_POSITION_ELEMENT':
            return Object.assign({}, state, {
                contextMenuPositionElement: action.value
            });
        case 'SET_SELECTED_ITEMS':
            return Object.assign({}, state, {
                selectedItems: (action.value).filter((f, i, self) => self.map(ff => ff.name).indexOf(f.name) === i)
            });
        case 'SET_SELECTED_FOLDER_SUB_LIST':
            return Object.assign({}, state, {
                selectedFolderSublist: action.value
            });

        case 'TOGGLE_SELECTED_FILE':
            return Object.assign({}, state, {
                selectedFiles: state.selectedFiles.find(f => f.name === action.value.name) ?
                    state.selectedFiles.filter(f => f.name !== action.value.name) :
                    [...state.selectedFiles, action.value]
            });
        case 'SET_FILE_UPLOAD_PROGRESS':
            return Object.assign({}, state, {
                fileUploadProgress: parseInt(action.value || 0)
            });
        case 'SET_LOADING':
            return Object.assign({}, state, {
                loading: action.value
            });
        case 'SET_LOADING_SUB_LIST':
            return Object.assign({}, state, {
                loadingSublist: action.value
            });
        case 'SET_ERROR_MSG':
            return Object.assign({}, state, {
                errorMsg: action.value
            });

        case 'SET_VISIBLE_DIALOG_SOLID_LOGIN':
            return Object.assign({}, state, {
                visibleDialogSolidLogin: !!action.value
            });

        case 'SET_VISIBLE_DIALOG_SOLID_LOGOUT':
            return Object.assign({}, state, {
                visibleDialogSolidLogout: !!action.value
            });

        case 'SET_VISIBLE_DIALOG_CREATE_FOLDER':
            return Object.assign({}, state, {
                visibleDialogCreateFolder: !!action.value
            });

        case 'SET_VISIBLE_DIALOG_CREATE_FILE':
            return Object.assign({}, state, {
                visibleDialogCreateFile: !!action.value
            });

        case 'SET_VISIBLE_DIALOG_UPLOAD_FILE':
            return Object.assign({}, state, {
                visibleDialogUploadFile: !!action.value
            });

        case 'SET_VISIBLE_DIALOG_CONTENT':
            return Object.assign({}, state, {
                visibleDialogContent: !!action.value
            });

        case 'SET_VISIBLE_DIALOG_MEDIA':
            return Object.assign({}, state, {
                visibleDialogMedia: !!action.value
            });

        case 'SET_VISIBLE_DIALOG_EDIT':
            return Object.assign({}, state, {
                visibleDialogEdit: !!action.value
            });

        case 'SET_VISIBLE_DIALOG_MOVE':
            return Object.assign({}, state, {
                visibleDialogMove: !!action.value
            });
        case 'SET_VISIBLE_DIALOG_COPY':
            return Object.assign({}, state, {
                visibleDialogCopy: !!action.value
            });
        case 'SET_VISIBLE_DIALOG_RENAME':
            return Object.assign({}, state, {
                visibleDialogRename: !!action.value
            });
        case 'SET_FILE_UPLOAD_LIST':
            return Object.assign({}, state, {
                fileUploadList: action.value
            });

        case 'SET_FILE_CONTENT':
            /**
             * Removing old blob url
             */
            state.fileContentBlobUrl && URL.revokeObjectURL(state.fileContentBlobUrl);
            return Object.assign({}, state, {
                fileContentBlobUrl: action.value ? URL.createObjectURL(action.value) : null
            });

        default:
            return state;
    }
};

export default MainReducer;
