import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as actionTypes from '../constants/actionTypes';


function paperclipsGenerateEpic(action$) { 
    
    return action$
        .ofType(actionTypes.START_SELLING)
    
        .mergeMap(action => {
            return Observable.of(
                {type: actionTypes.MAKE_PAPERCLIP},
                {type: actionTypes.UPDATE_FUNDS, value: action.priceOfPaperclip},
                // {type: actionTypes.UPDATE_UNSOLD_INVENTORY}
            )
        })       
}

export default paperclipsGenerateEpic;
