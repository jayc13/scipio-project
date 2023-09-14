import 'module-alias/register';
import { join } from 'path';
import AutoLoad from '@fastify/autoload';
import cors from '@fastify/cors';
import mongoose from 'mongoose';
import { config } from "./config";


// Pass --options via CLI arguments in command to enable these options.
const options: any = {
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'mm/dd/yyyy HH:MM:ss',
        ignore: 'pid,hostname,reqId',
      },
    },
  }
}

const app: any = async (
    fastify: any,
    opts: any
): Promise<void> => {

  mongoose
    .connect(`${config.db.protocol}://${config.db.host}${config.db.port ? `:${config.db.port}` : ''}/${!!config.db.name && config.db.name}${!!config.db.params && config.db.params}`, {
      user: config.db.user,
      pass: config.db.password,
      autoCreate: true,
    })
    .then(() => fastify.log.info('MongoDB connected...'))
    .catch(err => fastify.log.error(err));

  await fastify.register(cors, {
    // put your options here
  })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts
  })

};

export default app;
export { app, options }
