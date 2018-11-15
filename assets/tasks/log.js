import gulplog from 'gulplog'

export const log = {
    info: (message) => {
        gulplog.info("\u001b[1m\u001b[34;1m[INFO] " + message + "\u001b[m");
    },
    success: (message) => {
        gulplog.info("\u001b[1m\u001b[32m[SUCCESS] " + message + " 🎉\u001b[m");
    },
    error: (message) => {
        gulplog.info("\u001b[1m\u001b[31m[ERROR] " + message + "\u001b[m");
    },
    warn: (message) => {
        gulplog.info("\u001b[1m\u001b[33;1m[WARNING] " + message + "\u001b[m");
    }
};

export default log;