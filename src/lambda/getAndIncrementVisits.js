import { config } from 'dotenv';
import { init } from '../../db';
const { getTotalVisits, incrementVisitCount } = require('../../db/queries');

config();

exports.handler = async (event, context, callback) => {
  let statusCode;
  let result;

  try {
    let count = 0;
    const graphQLClient = init();
    const { totalVisits = {} } = await graphQLClient.request(getTotalVisits);
    const { _id, total } = totalVisits;

    if (total === undefined) {
      console.error('DB has not been initialized');
    } else {
      count = total + 1;
      graphQLClient.request(incrementVisitCount(_id, count));
    }

    statusCode = 200;
    result = { visits: count };
  } catch (err) {
    statusCode = 500;
    result = err;
  }

  return callback(null, {
    statusCode,
    body: JSON.stringify(result)
  });
};
