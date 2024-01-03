import { setupWorker } from "msw/browser";
import { userHandler } from "./user/userHandler";

export const worker = setupWorker(...userHandler);
