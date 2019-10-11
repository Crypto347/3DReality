import { combineEpics } from 'redux-observable';
// import fetchWhiskiesEpic from '../epics/exEpic1'

import checkButtonsEpic from './checkButtonsEpic';
import checkWireEpic from './checkWireEpic';
import paperclipsGenerateEpic from './PaperclipsGenerateEpic';
import makePaperClipEpic from './makePaperClipEpic';
import raisePriceEpic from './raisePriceEpic';
import marketingNextLevelEpic from './marketingNextLevelEpic';
import buyWireEpic from './buyWireEpic';
import autoPaperclipsStartEpic from './autoPaperclipsStartEpic';
// import repeatAutoPaperClippersEpic from '../epics/repeatAutoPaperClippersEpic';
import autoPaperClippersAddOneEpic from './autoPaperClippersAddOneEpic';
import startCreativityEpic from '../epicsProject/startCreativityEpic';
// import throwProjectEpic from '../epicsProject/throwProjectEpic';
import throwLexicalProcessingEpic from '../epicsProject/throwLexicalProcessingEpic';
import throwCombinatoryHarmonicsEpic from '../epicsProject/throwCombinatoryHarmonicsEpic';
import throwTheHadwingerProblemEpic from '../epicsProject/throwTheHadwingerProblemEpic';
import throwTheTothSausageConjectureEpic from '../epicsProject/throwTheTothSausageConjectureEpic';
import throwDonkeySpaceEpic from '../epicsProject/throwDonkeySpaceEpic';
import startAddingQOpsEpic from './startAddingQOpsEpic';
import startSubtractingQOpsEpic from './startSubtractingQOpsEpic';
import addChipEpic from './addChipEpic';
import toggleChipEpic from './toggleChipEpic';
import decreaseOpsEpic from './decreaseOpsEpic';
import startDecreasingOperationsEpic from './startDecreasingOperationsEpic';
import wireButtonBufferEpic from './wireButtonBufferEpic';
import autoWireBuyerEpic from './autoWireBuyerEpic';
import throwMegaClippersEpic from '../epicsProject/throwMegaClippersEpic';
import startUpdatingUnsoldInventoryEpic from './startUpdatingUnsoldInventoryEpic';
import startImprovingMarketingEpic from './startImprovingMarketingEpic';
import catchPaperclipsEpic from './catchPaperclipsEpic';
import startInvestmentsEpic from './startInvestmentsEpic';
import startUpdatingScreenEpic from './startUpdatingScreenEpic';
import startUpdatingInvestmentLinesEpic from './startUpdatingInvestmentLinesEpic';
import startCountingRiskEpic from './startCountingRiskEpic';
import startApplyingProfitLossEpic from './startApplyingProfitLossEpic';


export const rootEpic = combineEpics(
    checkButtonsEpic,
    checkWireEpic,
    paperclipsGenerateEpic,
    makePaperClipEpic,
    raisePriceEpic,
    marketingNextLevelEpic,
    buyWireEpic,
    autoPaperclipsStartEpic,
    // repeatAutoPaperClippersEpic,
    autoPaperClippersAddOneEpic,
    startCreativityEpic,
    // throwProjectEpic,
    throwLexicalProcessingEpic,
    throwCombinatoryHarmonicsEpic,
    throwTheHadwingerProblemEpic,
    throwTheTothSausageConjectureEpic,
    throwDonkeySpaceEpic,
    startAddingQOpsEpic,
    startSubtractingQOpsEpic,
    addChipEpic,
    toggleChipEpic,
    decreaseOpsEpic,
    startDecreasingOperationsEpic,
    wireButtonBufferEpic,
    autoWireBuyerEpic,
    throwMegaClippersEpic,
    startUpdatingUnsoldInventoryEpic,
    startImprovingMarketingEpic,
    catchPaperclipsEpic,
    startInvestmentsEpic,
    startUpdatingScreenEpic,
    startUpdatingInvestmentLinesEpic,
    startCountingRiskEpic,
    startApplyingProfitLossEpic
);
