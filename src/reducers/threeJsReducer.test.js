/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Reducer
*/

import reducer from './threeJsReducer';

/**
* Initial State
*/

import { 
    initialState 
} from './threeJsReducer'


describe('threeJsReducer', () => {

    // it("should return the initial state", () => {
    //     const action = { type: "NONE" }
    //     expect(reducer(undefined, action)).toEqual(initialState);
    // });

    // it("should update menuButtonIsPressed with opposite boolean value and set sidebarOnInit to true", () => {
    //     const action = { 
    //         type: actionTypes.TOGGLE_MENU_BUTTON
    //     }
    //     const initState = {
    //         ...initialState, 
    //         menuButtonIsPressed: false,
    //         sidebarOnInit: false
    //     }
    //     const state = {
    //         ...initialState, 
    //         menuButtonIsPressed: true,
    //         sidebarOnInit: true
    //     }
    //     expect(reducer(initState, action)).toEqual(state);
    // });
});
