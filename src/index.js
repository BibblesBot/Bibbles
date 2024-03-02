const { logger } = require("./common");

try {
    logger.info(`${"Starting".green} Bot!`);
    require("./bot/bot");
} catch (err) {
    logger.error(`${"Error".red} encountered: ${err}`);
}
