const gulp = require('gulp');
const browserSync = require('browser-sync').create(); // подключаем browser sync

gulp.task("simple_task", function (callback) {
    console.log("I am simple task!")
    callback()
})

// Задача для запуска сервера BrowserSync
gulp.task('start-server', function() {
    // Инициализация BrowserSync
    browserSync.init({
        server: {
            baseDir: './app/', // Корневая директория вашего проекта
        },
    });

    // Следим за изменениями файлов и обновляем браузер при изменениях
    gulp.watch('./app/**/*.*').on('change', browserSync.reload);
});