(function () {
    var firstFactors = [],
        secondFactors = [],
        commonFactors,
        leastCommonMultiple;

    $('#submitbutton').click(function() {
        var firstNumber = $('#firstnumber').val(),
            secondNumber = $('#secondnumber').val();

        firstFactors = getFactors(firstNumber);
        secondFactors = getFactors(secondNumber);

        commonFactors = getCommonFactors(firstFactors, secondFactors);

        leastCommonMultiple = getLeastCommonMultiple(commonFactors);

        $('.factors1').text(firstFactors);
        $('.factors2').text(secondFactors);
        $('.commonfactors').text(commonFactors);
        $('.leastcommonmultiple').text(leastCommonMultiple);
    });

    function getLeastCommonMultiple(_arr) {
        var currentMultiple;

        for (var i = 0; i < _arr.length; i = i + 1) {
            if (i === 0) {
                currentMultiple = _arr[i];
            } else {
                currentMultiple *= _arr[i];
            }
        }

        return currentMultiple;
    }

    function getCommonFactors(arr1, arr2) {
        // copy arrays with slice
        var _arr1 = arr1.slice(),
            _arr2 = arr2.slice(),
            commonArray = [];

        for (var i = 0; i < _arr1.length; i = i + 1) {
            for (var j = 0; j < _arr2.length; j = j + 1) {
                if (_arr1[i] === _arr2[j]) {
                    commonArray.push( _arr1[i]);
                    _arr1.splice(i, 1);
                    _arr2.splice(j, 1);
                    // reset i
                    i = -1;
                    // break j loop
                    j = _arr2.length;
                }
            }
        }

        return commonArray;
    }

    function getFactors(_int) {
        // copy array with slice
        var _arr = [];
            primeNumbers = getPrimeNumbers(_int);

        for (var i = 0; primeNumbers[i] <= _int; i = i + 1) {
            if (_int % primeNumbers[i] === 0) {
                _int = _int / primeNumbers[i];
                _arr.push(primeNumbers[i]);
                // attempt all factors again
                i = -1;
            }
        }

        return _arr;
    }

    function getPrimeNumbers(_limit) {
        var _arr = [];

        for (var i = 2; i <= _limit; i = i + 1) {
            for (var j = 2; j <= i; j = j + 1) {
                if (i % j === 0) {
                    if (i !== j) {
                        // break j loop
                        j = i;
                    } else {
                        _arr.push(i);
                    }
                }
            }
        }
        return _arr;
    }
})();
