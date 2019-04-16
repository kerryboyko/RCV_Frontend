import { Moment } from 'moment';

export type VoteRecord = string[][];

export interface IElection {
  title: string;
  subtitle?: string;
  pollsOpen: Moment | string;
  pollsClose: Moment | string;
  electionID?: string;
  resultsVisibility: ElectionResultsVisibility;
  electionStatus: ElectionStatus;
  electionType: ElectionType;
  [key: string]: any;
}

export enum ElectionStatus {
  DRAFT = 'DRAFT',
  QUEUED = 'QUEUED',
  IN_PROGRESS = 'IN_PROGRESS',
  POLLS_CLOSED = 'POLLS_CLOSED',
}

export enum ElectionResultsVisibility {
  LIVE = 'LIVE',
  LIVE_FOR_VOTERS = 'LIVE_FOR_VOTERS',
  AFTER_CLOSE = 'AFTER_CLOSE',
}

export enum ElectionType {
  InstantRunoff = 'INSTANT_RUNOFF',
  MultiSeat = 'MULTI_SEAT',
  DemocraticPrimary = 'DEMOCRATIC_PRIMARY',
}

export enum CandidateAction {
  elected = 'ELECTED - MET QUOTA',
  assigned = 'ELECTED - OTHER CANDIDATES ELIMINATED',
  eliminated = 'ELIMINATED - FEWEST VOTES',
}
export enum Language {
  EN = 'EN',
}

