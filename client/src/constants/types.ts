// import { FormReducer } from 'redux-form';

import { ProjectStateSchema, ProjectsEmptyState } from '../models/project';
import { ExperimentStateSchema, ExperimentsEmptyState } from '../models/experiment';
import { ExperimentJobStateSchema, ExperimentJobsEmptyState } from '../models/experimentJob';
import { JobStateSchema, JobsEmptyState } from '../models/job';
import { GroupStateSchema, GroupsEmptyState } from '../models/group';
import { TokenStateSchema, TokenEmptyState } from '../models/token';
import { ModalStateSchema } from '../models/modal';
import { UserEmptyState, UserStateSchema } from '../models/user';
import { PaginationStateSchema } from '../models/pagination';

export interface AppState {
  projects: ProjectStateSchema;
  experiments: ExperimentStateSchema;
  groups: GroupStateSchema;
  jobs: JobStateSchema;
  experimentJobs: ExperimentJobStateSchema;
  modal: ModalStateSchema;
  auth: TokenStateSchema;
  users: UserStateSchema;
  // form: FormReducer;
  pagination: PaginationStateSchema;
  logs: string;
}

export const AppEmptyState = {
  projects: ProjectsEmptyState,
  experiments: ExperimentsEmptyState,
  groups: GroupsEmptyState,
  jobs: JobsEmptyState,
  experimentJobs: ExperimentJobsEmptyState,
  auth: TokenEmptyState,
  user: UserEmptyState
};
