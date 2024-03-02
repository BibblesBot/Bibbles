const fs = require("fs");
const yaml = require("yaml");
const colors = require("colors");
const _ = require("lodash");
const logger = require("../utils/logger");

function parseYamlConfig(filePath) {
    const file = fs.readFileSync(filePath, "utf8");
    const data = yaml.parse(file);

    return data;
}

let config = () => {
    try {
        let data = parseYamlConfig("config.yaml");

        for (item in data) {
            logger.info(`Loaded ${item.green} from config`);
        }

        return data;
    } catch (err) {
        throw Error(`Error loading config: ${err}`);
    }
};

module.exports = { config: config() };
