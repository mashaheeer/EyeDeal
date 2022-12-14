<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Eyedeal</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            body{
              padding: 0;
              margin: 0;
              box-sizing: border-box;
            }
        </style>
       <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,100&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="flex-center position-ref full-height">
                <div id='root'></div>
            
        </div>
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
