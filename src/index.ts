import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { onInteraction } from "./events/onInteraction";
import { validateEnv } from "./utils/validateEnv";


(async () => {
    if (!validateEnv()) return;

    const BOT = new Client({intents: IntentOptions});
    BOT.on("ready", () => console.log("I'm back"));
    BOT.on("interactionCreate", async (interaction) => await onInteraction(interaction));
    await BOT.login(process.env.BOT_TOKEN);
})();