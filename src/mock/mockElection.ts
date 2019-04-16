import range from "lodash/range";
import moment from "moment";
import {
  ElectionResultsVisibility,
  ElectionStatus,
  ElectionType,
  IElection,
  VoteRecord
} from "../types";

export const election: IElection = {
  title: "Mock Election",
  subtitle: "To test the frontend",
  pollsOpen: moment()
    .subtract({ minutes: 20 })
    .toISOString(),
  pollsClose: moment()
    .add({ hours: 8 })
    .toISOString(),
  electionID: "SOME_RANDOM_STRING",
  resultsVisibility: ElectionResultsVisibility.AFTER_CLOSE,
  electionType: ElectionType.MultiSeat,
  electionStatus: ElectionStatus.IN_PROGRESS
};

export const candidates = [
  "ALPHA",
  "BETA",
  "GAMMA",
  "DELTA",
  "EPSILON",
  "ZETA"
];

const genVotes = (): VoteRecord => {
  const voteList: VoteRecord = [];
  range(40).forEach(() => {
    voteList.push(["ALPHA", "BETA", "GAMMA"]);
  });
  range(42).forEach(() => {
    voteList.push(["ALPHA", "GAMMA", "BETA"]);
  });
  range(44).forEach(() => {
    voteList.push(["BETA", "ALPHA", "GAMMA"]);
  });
  range(46).forEach(() => {
    voteList.push(["GAMMA", "ALPHA", "BETA"]);
  });
  range(48).forEach(() => {
    voteList.push(["GAMMA", "BETA", "ALPHA"]);
  });
  return voteList;
};

export const votes = genVotes();

export const results = [
  {
    round: 1,
    results: {
      ALPHA: 1640,
      BETA: 1320,
      GAMMA: 2820,
      DELTA: 1640,
      EPSILON: 440,
      ZETA: 940
    },
    outcome: {
      candidate: "GAMMA",
      action: "ELECTED - MET QUOTA",
      round: 1,
      seats: 1,
      votesTransferred: 619
    }
  },
  {
    round: 2,
    results: {
      ALPHA: 1740.9716312056798,
      BETA: 1530.7234042553318,
      DELTA: 1841.9432624113597,
      EPSILON: 545.3617021276659,
      ZETA: 940
    },
    outcome: {
      candidate: "EPSILON",
      action: "ELIMINATED - FEWEST VOTES",
      votesTransferred: 545.3617021276659,
      round: 2,
      seats: 0
    }
  },
  {
    round: 3,
    results: {
      ALPHA: 1740.9716312056798,
      BETA: 1530.7234042553318,
      DELTA: 2387.304964538812,
      ZETA: 940
    },
    outcome: {
      candidate: "DELTA",
      action: "ELECTED - MET QUOTA",
      round: 3,
      seats: 1,
      votesTransferred: 186.30496453881187
    }
  },
  {
    round: 4,
    results: {
      ALPHA: 1740.9716312056798,
      BETA: 1602.595908875287,
      ZETA: 940
    },
    outcome: {
      candidate: "ZETA",
      action: "ELIMINATED - FEWEST VOTES",
      votesTransferred: 940,
      round: 4,
      seats: 0
    }
  },
  {
    round: 5,
    results: { ALPHA: 2200.97163120568, BETA: 2082.595908875287 },
    outcome: {
      candidate: "BETA",
      action: "ELIMINATED - FEWEST VOTES",
      votesTransferred: 2082.595908875287,
      round: 5,
      seats: 0
    }
  },
  {
    round: 6,
    results: { ALPHA: 3666.3333333333458 },
    outcome: {
      candidate: "ALPHA",
      action: "ELECTED - OTHER CANDIDATES ELIMINATED",
      round: 6,
      seats: 1,
      votesTransferred: 0
    }
  },
  { round: 7, results: {} }
];

export default {
  votes,
  results,
  election,
  candidates
};
