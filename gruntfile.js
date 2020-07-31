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

            base: {
                src: ['dist/www/*.html','dist/www/*.htm','dist/www/*.txt']
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

        copy: {
            html: {
                expand: false,
                src: 'src/www/*.html',
                dest: 'dist/www/*.html'
            },

            css: {
                expand: false,
                src: '.tmp/css/styles.min.css',
                dest: 'dist/www/css/styles.min.css'
            },

            js: {
                expande: false,
                src: './tmp/js/scripts.min.js',
                dest: 'dist/www/js/scripts.min.js'
            },

            images: {
                expand: true,
                cwd: '.tmp/images',
                src: '*.{png,jpg,gif,svg}',
                dest: 'dist/www/images/'
            }
        },

        cssmin: {
            css: {
                files: {
                    '.tmp/css/styles.min.css': '.tmp/css/css/styles.min.css'
                }
            }
        },

        watch: {
            scripts: {
                files: 'src/www/current/js/*.js',
                tasks: ['codificando'],
                options: {
                    event: ['added', 'ghanged']
                }
            },

            styles: {
                files: 'src/www/current/css/*.css',
                tasks: ['estilizando'],
                options: {
                    event: ['added', 'changed']
                }
            },

            html: {
                files: 'src/www/current/*.html',
                tasks: ['copy:html'],
                options: {
                    event: ['added', 'changed']
                }
            },

            images: {
                files: 'src/www/current/images/*.{png,jpg,gif,svg}',
                tasks: ['compactando-imagens'],
                options: {
                    event: ['added', 'changed']
                }
            }
        },

        uglify: {
            js: {
                files: [{
                    src: '.tmp/js/scripts.min.js',
                    dest: '.tmp/js/scripts.min.js'
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

    // Carregando os plug-ins
    grunt.loadNpmTasks('gurnt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt-loadNpmTasks('grunt-contrib-watch');
    grunt-loadNpmTasks('grunt-image');
}