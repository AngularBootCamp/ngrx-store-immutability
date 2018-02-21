import { Action, combineReducers } from '@ngrx/store';
import { EmployeeState, ACK_EMPLOYEE, employeeReducer } from './employees.state';
import { PositionState, ACK_POSITION, positionReducer } from './positions.state';

export const ACK_ALL = 'ACK_ALL';
export class AckAllAction {
  readonly type = ACK_ALL;
}
export const DATA_RECEIVED = 'DATA_RECEIVED';
export class DataReceivedAction {
  readonly type = DATA_RECEIVED;
  constructor(public readonly data: AppState) { }
}

export interface AppState {
  employees: EmployeeState;
  positions: PositionState;
}
