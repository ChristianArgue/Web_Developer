const { src, dest, watch, parallel } = require("gulp");

// CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

// IMAGENES
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = import("gulp-webp");
const avif = require("gulp-avif");

function css(done) {
    
    src('src/scss/**/*.scss') // Identificar el archivo de SASS
        .pipe(plumber())
        .pipe(sass()) // Compilarlo
        .pipe(dest('build/css')) // Almacenarlo en el disco duro

    done(); // Callback que avisa a gulp cuando llegamos al final
}

function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    
    done();
}

async function versionWebp(done) {
    const opciones = {
        quality: 50
    };

    const webpModule = await webp;

    src('src/img/**/*.{png,jpg}')
        .pipe(webpModule.default(opciones))
        .pipe(dest('build/img'))
    
    done();
}

function versionAvif(done) {
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'))
    
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css)
    done();
}


exports.css = css;
exports.imagenes = imagenes; 
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, dev);