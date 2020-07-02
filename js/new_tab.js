setTimeout(function(){
    var x = document.getElementsByClassName("LI-name")
    for(var i=0;i<x.length;i++)    
    {
        var y = x[i].getElementsByTagName('a');
        for(var z=0;z<y.length;z++)
            y[z].target="_blank";
    }
},2000);

setTimeout(function(){
    var x = document.getElementsByClassName("LI-profile-badge-footer")
    for(var i=0;i<x.length;i++)    
    {
        var y = x[i].getElementsByTagName('a');
        for(var z=0;z<y.length;z++)
            y[z].target="_blank";
    }
},2000);

setTimeout(function(){
    var x = document.getElementsByClassName("LI-field")
    for(var i=0;i<x.length;i++)    
    {
        var y = x[i].getElementsByTagName('a');
        for(var z=0;z<y.length;z++)
            y[z].target="_blank";
    }
},2000);