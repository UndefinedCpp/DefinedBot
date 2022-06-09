import { EmpirePrototype } from "./bot/EmpirePrototype";
import { BotWrapper, Profiler } from "./modules";

import config from "./config";

BotWrapper.resetLog();

export const loop = BotWrapper.wrapLoop(() => {
    // Prepare =================================================
    Profiler.timeWarn(() => {
        global.Empire = new EmpirePrototype;
        Empire.build();
    }, config.maxiumPrepareTime);
    // Execute =================================================
    Empire.run();
    // After work ==============================================
    Empire.clean();
    Empire.visualize();
});