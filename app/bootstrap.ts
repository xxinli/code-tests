import loadRoutes from './config/routes.js';
import express from 'express';
import cluster from 'cluster';
import { cpus } from 'os';
import * as dontenv from 'dotenv';
dontenv.config();
import { Environment } from './common/environment.js';
const app = express();
const numCPUs = cpus().length;
/**
 * Build the application
 */
export default function build() {
    loadRoutes(app);
    serve();
}

function serve() {
    // to take advantage of multi-core systems for application performance 
    if (cluster.isPrimary) {
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
        
        cluster.on('exit', (worker) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    } else {
        app.listen(Environment.getPortNumber(), () => {
            console.log(`Delivering burgers on port ${Environment.getPortNumber()}`)
        })
    }
}