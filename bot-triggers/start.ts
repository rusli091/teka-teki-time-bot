import { Context } from "https://deno.land/x/grammy@v1.12.0/context.ts";
import { BotCommands } from "../constants/botCommands.ts";

export const start = (ctx: Context) => {
    ctx.reply(`Get a teka-teki with /${BotCommands.Teka}`);
} 
