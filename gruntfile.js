module.exports = function(grunt){

    // Config
    grunt.initConfig({

        clean: {
            dist:{
                src: ['dist/**/*']
            },

            tmp: {
                src: ['.tmp/**/*']
            },

            base: {
                src: ['dist/*.html','dist/*.txt']
            },

            imagesTmp: {
                src: ['.tmp/images/**/*']
            },

            images: {
                src: ['dist/images/**/*']
            }
        },

        concat: {
            js: {
                src: ['src/current/js/jquery.js', 'src/current/js/main.js'],
                dest: 'dist/js/scripts.min.js'
            },

            css: {
                src: ['src/www/current/css/*.css'],
                dest: '.tmp/css/styles.min.css'
            }
        },

        copy: {
            base: {
                expand: false,
                cwd: 'src',
                src: '*.{html,txt}',
                dest: 'dist/'
            },

            css: {
                expand: false,
                src: '.tmp/css/styles.min.css',
                dest: 'dist/css/styles.min.css'
            },

            js: {
                expande: false,
                src: './tmp/js/scripts.min.js',
                dest: 'dist/js/scripts.min.js'
            },

            images: {
                expand: true,
                cwd: '.tmp/images',
                src: '*.{png,jpg,gif,svg}',
                dest: 'dist/images/'
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
                files: 'src/js/*.js',
                tasks: ['codificando'],
                options: {
                    event: ['added', 'ghanged']
                }
            },

            styles: {
                files: 'src/css/*.css',
                tasks: ['estilizando'],
                options: {
                    event: ['added', 'changed']
                }
            },

            html: {
                files: 'src/*.html',
                tasks: ['copy:html'],
                options: {
                    event: ['added', 'changed']
                }
            },

            images: {
                files: 'src/images/*.{png,jpg,gif,svg}',
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
                    cwd: 'src/images',
                    src: ['**/*.{png,jpg,gif,svg'],
                    dest: 'dist/images'
                }]
            }
        }

    });

    // Carregando os plug-ins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-image');

    // Tarefas de copias
    grunt.registerTask('copiando-base', ['copy:base']);
}