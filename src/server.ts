import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { getAllPromptsRout } from "./routes/get-all-prompts";
import { UploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";

const app = fastify()

app.register(getAllPromptsRout)
app.register(UploadVideoRoute)
app.register(createTranscriptionRoute)

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server Running!")
})