document.write("Hello World");
var a1=10;
var a2="Tiger";
var a3=a1+a2;

document.write(a3);
var myvar="global";
    function checkscope()
    {
        var myvar="local";
        document.write(myvar);
    }
