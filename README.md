# MagicEight
a magic 8 ball to predict the future, made using jquery. The images are all a bit sloppy and nothing is quite lined up but who could have predicted that?

demo:
http://htmlpreview.github.io/?https://github.com/kelvinperrie/MagicEight/blob/master/demo.html

# example usage

You need the images, scripts and styles folders. Include the scripts/jquery-magic8.js (and you need jquery and jquery ui with draggable components in it) and the scripts/magic8.css on your page, then call $('Element to put the ball in').eightBallMe();

```
    <link rel="stylesheet" href="styles/magic8.css">
    
    <script src="scripts/jquery-3.3.1.min.js"></script>
    <script src="scripts/jquery-ui.min.js"></script>
    <script src="scripts/jquery-magic8.js"></script>

    <script type="text/javascript">
        $(document).ready(function () {
            $("body").eightBallMe();
        })
    </script>
```



![Example 1](Magic8BallExample2.gif?raw=true "Example 1")
