import { Bot } from "https://deno.land/x/grammy@v1.12.0/mod.ts";
import { CommandTriggers } from "./bot-triggers/index.ts";
import { appConfig } from "./configs/appConfig.ts";
import { BotCommands, commandDescriptions } from "./constants/botCommands.ts";

export const bot = new Bot(appConfig.botApiKey);

// =============================================================================
// Commands
// =============================================================================

bot.api.setMyCommands([
    { command: BotCommands.Teka, description: commandDescriptions[BotCommands.Teka] }

]);

bot.command("start", (ctx) => CommandTriggers.start(ctx));
bot.command(BotCommands.Teka, (ctx) => CommandTriggers.tekaTeki(ctx));

bot.start();

