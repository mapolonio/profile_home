const { init } = require('../db');
const { createVisitCounter, getTotalVisits } = require('../db/queries');

async function main() {
  try {
    const visitCounterExists = await counterAlreadyExists();

    if (!visitCounterExists) {
      await initializeVisitCounter();
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Seed finished');
  }
}

async function counterAlreadyExists() {
  const graphQLClient = init();
  const { totalVisits } = await graphQLClient.request(getTotalVisits);

  return totalVisits !== null;
}

async function initializeVisitCounter() {
  const graphQLClient = init();
  return graphQLClient.request(createVisitCounter);
}

main();
