import { Context } from "https://deno.land/x/grammy@v1.12.0/mod.ts";
import { tekaTekis } from "../constants/tekaTeki.ts";
import { TekaTeki } from "../types/index.ts";
import { getRandom } from "../utils/getRandom.ts";

export const tekaTeki = (ctx: Context) => {
    const { question, answer } = getRandom(tekaTekis) as TekaTeki

    const text = `<b>Teka Teki Time! 🤡</b>

${question}

<tg-spoiler>${answer}</tg-spoiler>
`
    ctx.reply(text, {
        parse_mode: "HTML"
    });
} 
