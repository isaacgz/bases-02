"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_plugin_1 = require("../../src/plugins/logger.plugin");
describe('plugins/logger.plugin.ts', () => {
    test('buildLogger should return a function logger', () => {
        const logger = (0, logger_plugin_1.buildLogger)('test');
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });
    test('logger.log should log a message', () => {
        const winstonLoggerMock = jest.spyOn(logger_plugin_1.logger, 'log');
        const message = 'test message';
        const service = 'test service';
        const logger = (0, logger_plugin_1.buildLogger)(service);
        logger.log(message);
        expect(winstonLoggerMock).toHaveBeenCalledWith('info', expect.objectContaining({
            level: 'info',
            message,
            service,
        }));
    });
});
