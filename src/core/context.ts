import { Context } from "grammy";
import { FluentContextFlavor } from "@grammyjs/fluent";

// Extend your application context type with the provided flavor interface.
export type MyAppContext = Context & FluentContextFlavor;