window.onload = function () {
    // do the work after everything was loaded (DOM, media elements)    
    document.querySelector('button').onclick = function() {


        var a =  parseInt(document.getElementById('a').value);
        var b = parseInt(document.getElementById('b').value);
        
        if (isNaN(a) || isNaN(b)) {
            document.getElementById('result').innerHTML = 'Invalid input';
            return;
        }
        switch (document.getElementById('operations').value) {
            case 'plus':
                document.getElementById('result').innerHTML = a + b;
                break;
            case 'moins':
                document.getElementById('result').innerHTML = a - b;
                break;
            case 'multiplication':
                document.getElementById('result').innerHTML = a * b;
                break;
            case 'division':
                document.getElementById('result').innerHTML = a / b;
                break;
            default:
                document.getElementById('result').innerHTML = 'Invalid operation';
        }
    };
};
