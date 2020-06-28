module.exports = function(grunt){

    // Config
    grunt.initConfig({

        clean: {
            dist:{
                src: ['dist/www/**/*']
            },

            tmp: {
                src: ['.tmp/**/*']
            },

            index: {
                src: ['dist/www/index.html']
            },

            imagesTmp: {
                src: ['.tmp/images/**/*']
            },

            images: {
                src: ['dist/app/images/**/*']
            }
        },

        concat: {
            js: {
                src: ['src/www/current/js/jquery.js', 'src/www/current/js/main.js'],
                dest: 'dist/www/js/scripts.min.js'
            },

            css: {
                src: ['src/www/current/css/*.css'],
                dest: '.tmp/css/styles.min.css'
            }
        },

        less: {
            dist: {
                src: 'src/www/current/less/*.less',
                dest: 'dist/www/css/style.min.css'
            }
        },

        copy: {
            main: {
                expand: false,
                src: 'src/www/*.html',
                dest: 'dist/www/*.html'
            }
        },

        cssmin: {
            css: {
                files: {
                    '.tmp/css/styles.min.css': '.tmp/css/css/styles.min.css'
                }
            }
        },

        uglify: {
            dist: {
                files: [{
                    src: 'dist/www/js/scripts.min.js',
                    dest: 'dist/www/js/scripts.min.js'
                }]
            }
        },

        image: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/www/current/images',
                    src: ['**/*.{png,jpg,gif,svg'],
                    dest: 'dist/www/images'
                }]
            }
        }

    });
}