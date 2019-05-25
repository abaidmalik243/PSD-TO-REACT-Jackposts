import constants from '../constants';
const { types, initialState } = constants;


export function fetchLatestWaitList() {
  const { waitList } = initialState;
  var initial = waitList.length - 4;

  var latestWaitList = [];
  for (let i = initial; i < waitList.length; i++) {
    const element = waitList[i];
    latestWaitList.push(element);
  }
  return {
    type: types.FETCH_LATEST_WAIT_LIST,
    payload: latestWaitList,
  };
}

export function fetchLatestResults() {
  const { results } = initialState;
  var initial = results.length - 4;

  var latestResults = [];
  for (let i = initial; i < results.length; i++) {
    const element = results[i];
    latestResults.push(element);
  }
  return {
    type: types.FETCH_LATEST_RESULTS,
    payload: latestResults,
  };
}
