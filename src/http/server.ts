import fastify from "fastify";
import fastifyCookie from "@fastify/cookie";

import { getPoll } from "../routes/get-poll";
import { createPoll } from "../routes/create-poll";
import { voteOnPoll } from "../routes/vote-on-poll";

const app = fastify();

app.register(fastifyCookie, {
  secret: "nlw-expert",
  hook: "onRequest",
});

app.register(getPoll);
app.register(createPoll);
app.register(voteOnPoll);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running");
});
