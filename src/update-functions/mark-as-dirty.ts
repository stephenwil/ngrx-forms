import { MarkAsDirtyAction } from '../actions';
import { AbstractControlState } from '../state';
import { abstractControlReducer } from './util';

// export function markAsDirty<TValue extends FormControlValueTypes>(state: FormControlState<TValue>): FormControlState<TValue>;
// export function markAsDirty<TValue extends KeyValue>(state: FormGroupState<TValue>): FormGroupState<TValue>;

/**
 * Marks a given form control state as dirty. For groups and arrays also marks all children as dirty.
 */
export function markAsDirty<TValue>(state: AbstractControlState<TValue>) {
  return abstractControlReducer(state, new MarkAsDirtyAction(state.id));
}