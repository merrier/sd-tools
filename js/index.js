$(function(){

    // window.odometerOptions = {
    //     auto: false, // Don't automatically initialize everything with class 'odometer'
    //     selector: '.number-item', // Change the selector used to automatically find things to be animated
    //     format: 'dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
    //     duration: 3000, // Change how long the javascript expects the CSS animation to take
    //     animation: 'count' // Count is a simpler animation method which just increments the value,
    //                        // use it when you're looking for something more subtle.
    // };

    Array.prototype.shuffle = function() {
        var input = this;
    
        for (var i = input.length-1; i >=0; i--) {
    
            var randomIndex = Math.floor(Math.random()*(i+1));
            var itemAtIndex = input[randomIndex];

            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
        }
        return input;
    }

    function getRandomArr(){
        var origin = [1,2,3,4,5,6,7];
        var randomNum = parseInt(Math.random() * 7);
        origin.splice(randomNum, 1);
        return origin.shuffle();
    }

    function insertSingle(ind, arr){
        var dom = $(".number-container").eq(ind);

        for(var j = 0; j < arr.length; j++) {
            dom.find('.number-item').eq(j).text(arr[j]);
        }
    }

    function insertAll(){
        for(var i =0; i< 10; i++) {
            var randomArr = getRandomArr();
            insertSingle(i, randomArr);
        }
    }

    $("#gen").click(function(){
        insertAll();
    });

    $(".gen-single").click(function(){
        var ind = $(this).index('.gen-single');
        var randomArr = getRandomArr();
        insertSingle(ind, randomArr);
    });

    insertAll()
});