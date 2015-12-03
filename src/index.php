<?php
?>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">
    <title>WOOD PEOJECTS</title>



</head>
<body>
<my-app>Loading....</my-app>


<script src="./node_modules/systemjs/dist/system.src.js"></script>
<script src="./node_modules/angular2/bundles/angular2.dev.js"></script>
<script>
    System.config({
        packages: {
            './src/app': {defaultExtension: 'js'},
            './src/utils': {defaultExtension: 'js'},
        }
        //defaultJSExtensions: true
    });
    System.import('./src/app/app');
</script>
</body>
</html>