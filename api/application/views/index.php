<?php
/**
 * Created by PhpStorm.
 * User: Poka
 * Date: 11/29/2015
 * Time: 12:27 PM
 */
?>
<!DOCTYPE html>
<html>
<head>
    <title>Angular 2 QuickStart</title>
    <script src="../node_modules/systemjs/dist/system.src.js"></script>
    <script src="../node_modules/angular2/bundles/angular2.dev.js"></script>
    <script>
        System.config({
            packages: {'app': {defaultExtension: 'js'}}
        });
        System.import('app/app');
    </script>
</head>
<body>
<my-app>Loading...</my-app>
</body>
</html>