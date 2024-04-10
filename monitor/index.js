const { QueueEvents } = require('bullmq');

const main = async () => {
    const queueEvents = new QueueEvents('test-queue');

    let completed = 0;
    queueEvents.on("completed", () => {
        completed++;
    });

    setInterval(() => {
        console.log(`completed: ${completed}`);
    }, 5000);
}

main();
