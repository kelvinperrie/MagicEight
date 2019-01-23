(function ($) {

    $.fn.eightBallMe = function (settings) {

        // the id associated with our eightball
        var id = "my-eightball";

        // add the required elements
        $(this).append('<div class="eightball-moveable-area" id="' + id + '"><!--content = everything in the window of the ball--><div id="eightball-content"><!-- the animation while the ball is \'thinking\' --><div id="eightball-blur-container"></div><!-- the message to show the user --><div id="eightball-response"><div id="eightball-blue-thing-container"><img src="images/BlueBacking.png" alt="blue background" /></div><div id="eightball-message"></div></div></div><img src="images/ballbase.png" alt="ball base" /></div >');

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // tracks the status of 'thinking'; dragging, stopping, stopped,
        var status = "stopped";
        var possibleResponses = ["ANSWER UNCLEAR", "I HAVE NO IDEA", "IT MAY BE SO", "SO REALLY HARD TO KNOW"];

        // user jqueryui to make the ball draggable & link it to the events we need
        $("#" + id).draggable({
            start: function () {
                StartDragAnimation();
            },
            drag: function () {
            },
            stop: function () {
                StopDragAnimation();
            }
        });
        // triggered when the ball is started being dragged; initialises the animation
        function StartDragAnimation() {
            $("#eightball-response").stop().hide();
            status = "dragging";
            DoAnimation();
        }
        // triggered when the ball is stopped being dragged/moved
        function StopDragAnimation() {
            status = "stopping";
            // the animation doesn't finish as soon as they stop dragging, there is a delay
            setTimeout(function () { if (status === "stopping") status = "stopped"; }, 1000);
        }
        function DoAnimation() {
            if (status !== "stopped") {
                setTimeout(function () { DoAnimation(); }, 100);
            } else {
                ShowResponse();
            }
        }
        // outputs a response to the browser
        function ShowResponse() {
            var responseIndex = getRandomInt(0, possibleResponses.length - 1);
            $("#eightball-message").html(possibleResponses[responseIndex]);
            $("#eightball-response").stop().fadeTo(3000, 1);
        }

        // creates elements of the thinking animation
        var blobCount = 0;
        function MakeBlurBlobThing() {
            var maxWidth = 100;
            var maxHeight = 100;
            blobCount++;
            var id = 'blur' + blobCount;
            var top = getRandomInt(0, maxHeight);
            var left = getRandomInt(0, maxWidth);
            var fadeInTime = 1000;
            var fadeOutTime = 2000;
            $('#eightball-blur-container').append($('<div></div>')
                .attr({ id: id, style: 'top: ' + top + 'px; left: ' + left + 'px;' })
                .addClass("eightball-blur-blob")
            );
            $("#" + id).stop().fadeTo(fadeInTime, 1, function () { $("#" + id).stop().fadeTo(fadeOutTime, 0, function () { $('#' + id).remove(); }); });
        }

        // a loop that creates the thinking animation if the ball is being moved (or recently moved)
        function DoBlurBlobs() {
            if (status != "stopped") {
                MakeBlurBlobThing();
            }
            setTimeout(function () { DoBlurBlobs(); }, 200);
        }

        DoBlurBlobs();

        return this;
    };

}(jQuery));