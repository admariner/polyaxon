import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../constants/types';
import { StatusModel } from '../models/status';

import { ACTIONS } from '../constants/actions';
import { getErrorsGlobal } from '../utils/errors';
import * as actions from '../actions/statuses';
import Statuses from '../components/statuses/statuses';
import { isTrue } from '../constants/utils';

export function mapStateToProps(state: AppState, params: any) {
  const useLastFetched = () => {
    const statusIds = state.statuses.lastFetched.ids;
    const count = state.statuses.lastFetched.count;
    const statuses: StatusModel[] = [];
    statusIds.forEach(
      (statusId: number, idx: number) => {
        statuses.push(state.statuses.byIds[statusId]);
      });
    return {statuses, count};
  };
  const results = useLastFetched();

  const isLoading = isTrue(state.loadingIndicators.statuses.global.fetch);
  return {
    statuses: results.statuses,
    count: results.count,
    isLoading,
    errors: getErrorsGlobal(state.errors.statuses.global, isLoading, ACTIONS.FETCH),
  };
}

export interface DispatchProps {
  fetchData?: () => actions.StatusesAction;
}

export function mapDispatchToProps(dispatch: Dispatch<actions.StatusesAction>, params: any): DispatchProps {
  return {
    fetchData: () => dispatch(actions.fetchStatuses(
        params.project, params.resource, params.id, params.subResource, params.sid))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Statuses);
