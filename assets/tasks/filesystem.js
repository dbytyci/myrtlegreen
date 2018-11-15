import fs from 'node-fs'
import log from './log'
import base from './base'
import util from 'util'

const readdir = util.promisify(fs.readdir);
const existsSync = fs.existsSync;
const stat = util.promisify(fs.stat);

const fileEnding = /(?:\.([^.]+))?$/;
const version = Math.random().toString(36).substr(2, 5);
let include = "<?php\n";

const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

export const getFiles = async (dir) => {
    const dirExists = existsSync(dir);
    if (dirExists && (await stat(dir)).isDirectory()) {
        const subDirs = await readdir(dir);
        const files = await Promise.all(subDirs.map(async (subdir) => {
            let res = dir + subdir;
            if ((await stat(res)).isDirectory()) {
                res += "/";
                return getFiles(res);
            } else {
                return res;
            }
        }));
        return files.reduce((a, f) => a.concat(f), []);
    }
    return dirExists ? [dir] : [];
};

export const registerFiles = (folder, files) => {
    files.forEach(async path => {
        const name = path.replace('js/lib/', '').split("/").join("-");
        const reFile = fileEnding.exec(name);

        if (reFile && (reFile[0] === ".js" || reFile[0] === ".css")) {
            let fileName = name.replace(reFile[0], '');
            include += (reFile[0] === ".js") ?
                "wp_enqueue_script( '" + fileName + "', get_template_directory_uri() . '/assets/" + path + "', false, '" + version + "', true);\n" :
                "wp_enqueue_style( '" + fileName + "', get_template_directory_uri() . '/assets/" + path + "',false,'" + version + "','all');\n";

            log.info("/assets/" + path + " registered ");
        }
    });
    if (!files.length) log.warn("No files found in path /assets/" + folder);
};

export const registerCss = async (done) => {
    await asyncForEach(base.css, async path => {
        await getFiles(path()).then(files => registerFiles(path(), files));
    });
    done();
};

export const registerJs = async (done) => {
    await asyncForEach(base.js, async path => {
        await getFiles(path()).then(files => registerFiles(path(), files));
    });
    done();
};

export const generate = (done) => {
    fs.writeFile(base.loadFile, include, (err) => {
        if (err) throw err;
        log.success(base.loadFile + ' generated!');
        done();
    });
};