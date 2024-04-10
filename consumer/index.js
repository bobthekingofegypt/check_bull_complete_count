const { Worker } = require('bullmq');
const cluster = require('node:cluster');
const os = require('os');

const numCPUs = os.cpus().length;

const process = require('node:process');

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
    const worker = new Worker('test-queue', async job => {
        // no-op
    }, { connection: { host: "localhost" }});
    console.log(`Worker ${process.pid} started`);
}
