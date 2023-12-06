import * as cron from 'node-cron';
import { creditCardExpirationJob } from './jobs/credit-card-expiration.job';
import { savingExpirationJob } from './jobs/saving-expiration.job';

// Website to create cron expressions
// https://crontab.cronhub.io/

// Every Day at 00:00AM
cron.schedule(`0 0 * * *`, async () => {
  await creditCardExpirationJob();
});

// Every Day at 00:00AM
cron.schedule(`0 0 * * *`, async () => {
  await savingExpirationJob();
});