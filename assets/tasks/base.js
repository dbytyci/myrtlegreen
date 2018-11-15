export const base = {
    proxy: "dijar.ch",
    loadFile: "load.inc",
    //CSS Files to load
    css: [
        lib => "css/lib/",
        dist => "css/dist/"
    ],
    //JS Files to load
    js: [
        lib => "js/lib/",
        dist => "js/dist/bundle.js"
    ]
};

export default base;