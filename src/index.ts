import { Elysia } from "elysia";
import { autoload } from "elysia-autoload";

const app = new Elysia().use(autoload()).listen(3000);
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type ElysiaApp = typeof app;
