module.exports = function(grunt){

    // Config
    grunt.initConfig({

        clearn: {
            src: ['dist/www/**/*'],
            filter: 'isFile'
        },

        concat: {
            js: {
                src: ['src/www/current/js/jquery.js', 'src/www/current/js/main.js'],
                dest: 'dist/www/js/scripts.min.js'
            },

            css: {
                src: ['src/www/current/css/*.css'],
                dest: 'src/www/current/style.css'
            }
        }

    });
}