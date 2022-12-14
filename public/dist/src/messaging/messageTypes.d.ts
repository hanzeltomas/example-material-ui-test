export declare const CLONE_ELEMENT = "CLONE_ELEMENT";
export declare const CLONE_AND_RENAME_ELEMENT = "CLONE_AND_RENAME_ELEMENT";
export declare const NAVIGATE_TO_SOURCE_CODE = "NAVIGATE_TO_SOURCE_CODE";
export declare const REMOVE_ELEMENT = "REMOVE_ELEMENT";
export declare const GENERATE_PAGE = "GENERATE_PAGE";
export declare const CHANGE_GRAPHQL_ENDPOINT = "CHANGE_GRAPHQL_ENDPOINT";
export declare const REORDER_ELEMENT = "REORDER_ELEMENT";
export declare const CHANGE_THEME = "CHANGE_THEME";
export declare const FILE_WRITE = "FILE_WRITE";
export declare const MULTIPLE_FILE_WRITE = "MULTIPLE_FILE_WRITE";
export declare const MULTIPLE_FILE_DELETE = "MULTIPLE_FILE_DELETE";
export declare const FRONTEND_FILE_WRITE = "FRONTEND_FILE_WRITE";
export declare const CHANGE_ACTIVE_FILE_PATH = "CHANGE_ACTIVE_FILE_PATH";
export declare const GET_PROJECT_FROM_ARCHIVE = "GET_PROJECT_FROM_ARCHIVE";
export declare const PROJECT_LOADED = "PROJECT_LOADED";
export declare const BUNDLE_FILES = "BUNDLE_FILES";
export declare const TRANSPILE_FILES = "TRANSPILE_FILES";
export declare const TRANSPILE_SINGLE_FILE = "TRANSPILE_SINGLE_FILE";
export declare const TRANSPILE_MULTIPLE_FILES = "TRANSPILE_MULTIPLE_FILES";
export declare const UPDATE_TRANSPILED_FILES = "UPDATE_TRANSPILED_FILES";
export declare const REFRESH_IFRAME = "REFRESH_IFRAME";
export declare const PERFORM_REACT_REFRESH = "PERFORM_REACT_REFRESH";
export declare const IFRAME_REFRESHED = "IFRAME_REFRESHED";
export declare const CONNECT_DEVTOOLS = "CONNECT_DEVTOOLS";
export declare const CONNECT_ELEMENT_HIGHLIGHT = "CONNECT_ELEMENT_HIGHLIGHT";
export declare const GRAPHQL_CODEGEN = "GRAPHQL_CODEGEN";
export declare const SAVE_ZIP = "SAVE_ZIP";
export declare const SHOW_USER_FEEDBACK = "SHOW_USER_FEEDBACK";
export declare const LOWCODE_INITIALIZED = "LOWCODE_INITIALIZED";
export declare const BUNDLER_ERROR = "BUNDLER_ERROR";
export declare const TRANSPILER_ERROR = "TRANSPILER_ERROR";
export declare const SET_REPO = "SET_REPO";
export declare const COMMIT_ALL_CHANGES = "COMMIT_ALL_CHANGES";
export declare const COMMIT_CHANGES = "COMMIT_CHANGES";
export declare const LOGIN_GITHUB = "LOGIN_GITHUB";
export declare type MessageType = typeof FILE_WRITE | typeof FRONTEND_FILE_WRITE | typeof MULTIPLE_FILE_WRITE | typeof MULTIPLE_FILE_DELETE | typeof CHANGE_ACTIVE_FILE_PATH | typeof GET_PROJECT_FROM_ARCHIVE | typeof PROJECT_LOADED | typeof TRANSPILE_FILES | typeof TRANSPILE_SINGLE_FILE | typeof TRANSPILE_MULTIPLE_FILES | typeof GRAPHQL_CODEGEN | typeof UPDATE_TRANSPILED_FILES | typeof BUNDLE_FILES | typeof REFRESH_IFRAME | typeof PERFORM_REACT_REFRESH | typeof IFRAME_REFRESHED | typeof CONNECT_DEVTOOLS | typeof CONNECT_ELEMENT_HIGHLIGHT | typeof BUNDLER_ERROR | typeof TRANSPILER_ERROR | typeof GRAPHQL_CODEGEN | typeof SAVE_ZIP | typeof SHOW_USER_FEEDBACK | typeof COMMIT_ALL_CHANGES | typeof COMMIT_CHANGES | typeof LOGIN_GITHUB | typeof LOWCODE_INITIALIZED | ElementHighlightMessageType;
export declare type ElementHighlightMessageType = typeof CLONE_ELEMENT | typeof NAVIGATE_TO_SOURCE_CODE | typeof REMOVE_ELEMENT | typeof GENERATE_PAGE | typeof CHANGE_GRAPHQL_ENDPOINT | typeof CHANGE_THEME | typeof CLONE_AND_RENAME_ELEMENT | typeof REORDER_ELEMENT | typeof COMMIT_CHANGES | typeof LOGIN_GITHUB;
