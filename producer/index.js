const { Queue } = require('bullmq');

const main = async () => {
    const queue = new Queue('test-queue');

    for (let i = 0; i < 10; i++) {
        const jobs = [];
        for (let i = 0; i < 100000; i++) {
            jobs.push({
                name: "add-job",
                data: {
                    event: i,
                }
            });
        }
        await queue.addBulk(jobs);
        console.log(`added ${jobs.length} items to queue`);
    }


    process.exit();
}

main();
