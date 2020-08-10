module.exports = function(grunt){

    grunt.initConfig({

        clean: {

            tmp: {
                src: ['.tmp/**/*']
            },

            public: {
                src: ['public/**/*']
            },

            images: {
                src: ['.tmp/images/**/*']
            },

            js: {
                src: ['.tmp/js/**/*']
            },

            css: {
                src: ['.tmp/css/**/*']
            }

        },

        copy: {
            files: {
                expand: true,
                cwd: 'src',
                src: ['*'],
                dest: 'public',
                filter: 'isFile'
            },

            css:{
                expand: false,
                src: '.tmp/css/styles.min.css',
                dest: 'public/css/styles.min.css'
            },

            js: {
                expand: false,
                src: '.tmp/js/scripts.min.js',
                dest: 'public/js/scripts.min.js'
            },

            images: {
                expand: true,
                cwd: '.tmp/images',
                src: '*.{png,jpg,gif,svg}',
                dest: 'public/images/'
            }
        },

        concat: {

            js: {
                src: ['src/js/**/*'],
                dest: '.tmp/js/scripts.min.js'
            },

            css: {
                src: ['src/css/reset.css', 'src/css/global.css', 'src/css/index.css', 'src/css/produtos.css', 'src/css/contato.css', 'src/css/mediaqueries.css'],
                dest: '.tmp/css/styles.min.css'
            }
        },

        cssmin: {
            css: {
                files: {
                    '.tmp/css/styles.min.css': '.tmp/css/styles.min.css'
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
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: '.tmp/images/'
                }]
            }
        },

        watch: {
            scripts: {
                files: 'src/js/*.js',
                tasks: ['codificando'],
                options: {
                    event: ['added', 'changed', 'deleted'],
                }
            },

            styles: {
                files: 'src/css/*.css',
                tasks: ['estilizando'],
                options: {
                    event: ['added', 'changed', 'deleted'],
                }
            },

            html: {
                files: 'src/*.html',
                tasks: ['copy:html'],
                options: {
                    event: ['added', 'changed', 'deleted'],
                }
            },

            images: {
                files: 'src/images/*.{png,jpg,gif,svg}',
                tasks: ['compactando-images'],
                options: {
                    event: ['added', 'changed', 'deleted']
                }
            }
        }

    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-image');

    // Tarefas para limpeza
    grunt.registerTask('limpar-tmp', ['clean:tmp']);
    grunt.registerTask('limpar-public', ['clean:public']);
    grunt.registerTask('limpar-images', ['clean:images']);
    grunt.registerTask('limpar-tudo', ['limpar-public', 'limpar-tmp']);

    // Tarafa de compactação de imagens
    grunt.registerTask('compactando-images', ['clean:images', 'image:dynamic', 'copy:images']);

    // Tarefas para trabalhar no projeto
    grunt.registerTask('codificando', ['concat:js','uglify', 'copy:js']);
    grunt.registerTask('estilizando', ['concat:css','cssmin', 'copy:css']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('publicando-projeto', ['limpar-tudo','compactando-images','codificando','estilizando','copy:html']);
};