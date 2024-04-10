## Simple example of complete count

Start monitor and consumer
```
node monitor/index.js
node consumer/index.js
```

Then run producer to flood a lot of messages to the queue.

There should be 1million messages but I receive ~1million completed callbacks.  Usually its off by less than 100.
