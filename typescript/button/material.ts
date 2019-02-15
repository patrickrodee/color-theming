import {PrimaryColorSet, DisabledColorSet} from '../themes/material';
import {TextButton, FillButton} from './component';

const primaryColorSet = new PrimaryColorSet();
const disabledColorSet = new DisabledColorSet();

export const PrimaryTextButton = TextButton.withColorSets(primaryColorSet, disabledColorSet);
export const PrimaryFillButton = FillButton.withColorSets(primaryColorSet, disabledColorSet);
