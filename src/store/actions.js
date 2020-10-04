import { UPDATE_VISITS } from './mutation-types';

export function getVisitNumber({ commit }) {
  return fetch('/.netlify/functions/getAndIncrementVisits')
    .then(res => res.json())
    .then(({ visits }) => {
      commit(UPDATE_VISITS, visits);
    })
    .catch(console.log);
}
