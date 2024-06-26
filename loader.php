<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading...</title>
    <style>
        @keyframes square-animation {
            0% {
                left: 0;
                top: 0;
            }

            10.5% {
                left: 0;
                top: 0;
            }

            12.5% {
                left: 32px;
                top: 0;
            }

            23% {
                left: 32px;
                top: 0;
            }

            25% {
                left: 64px;
                top: 0;
            }

            35.5% {
                left: 64px;
                top: 0;
            }

            37.5% {
                left: 64px;
                top: 32px;
            }

            48% {
                left: 64px;
                top: 32px;
            }

            50% {
                left: 32px;
                top: 32px;
            }

            60.5% {
                left: 32px;
                top: 32px;
            }

            62.5% {
                left: 32px;
                top: 64px;
            }

            73% {
                left: 32px;
                top: 64px;
            }

            75% {
                left: 0;
                top: 64px;
            }

            85.5% {
                left: 0;
                top: 64px;
            }

            87.5% {
                left: 0;
                top: 32px;
            }

            98% {
                left: 0;
                top: 32px;
            }

            100% {
                left: 0;
                top: 0;
            }
        }

        .loader {
            position: fixed;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
        }

        .loader-square {
            position: absolute;
            display: flex;
            width: 28px;
            height: 28px;
            margin: 2px;
            border-radius: 0px;
            background: black;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            animation: square-animation 10s ease-in-out infinite both;
        }

        .loader-square:nth-of-type(0) {
            animation-delay: 0s;
        }

        .loader-square:nth-of-type(1) {
            animation-delay: -1.4285714286s;
        }

        .loader-square:nth-of-type(2) {
            animation-delay: -2.8571428571s;
        }

        .loader-square:nth-of-type(3) {
            animation-delay: -4.2857142857s;
        }

        .loader-square:nth-of-type(4) {
            animation-delay: -5.7142857143s;
        }

        .loader-square:nth-of-type(5) {
            animation-delay: -7.1428571429s;
        }

        .loader-square:nth-of-type(6) {
            animation-delay: -8.5714285714s;
        }

        .loader-square:nth-of-type(7) {
            animation-delay: -10s;
        }
    </style>
</head>

<body>

    <div class="loader">
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
    </div>

    <!-- Include jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Loader JavaScript -->
    <script>
        // Wait for the document to be ready
        $(document).ready(function() {
            // Trigger the "loader" event after a delay
            setTimeout(function() {
                $(window).trigger("loader");
            }, 5000); // Adjust the delay as needed

            // Listen for the "loader" event and fade out the loader
            $(window).on("loader", function() {
                $(".loader").fadeOut(1000, function() {
                    // Once the loader fades out, redirect to your application URL
                    window.location.href = "<?php echo APP_URL; ?>";
                });
            });
        });
    </script>
</body>

</html>