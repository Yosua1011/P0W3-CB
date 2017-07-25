function CountingMinutesI(str) { 
    var time1Obj = {}, time2Obj = {}, timeDiff;
    
    time1Obj = setTimeObject(str, 0);
    time2Obj = setTimeObject(str, 1);
         
    if (time1Obj.ampm == time2Obj.ampm && time1Obj.tot > time2Obj.tot) {
        timeDiff = (((12 - time1Obj.hours + 12) * 60) - (time1Obj.mins)) + ((time2Obj.hours * 60) + time2Obj.mins);
    }
    
    else if (time1Obj.ampm == time2Obj.ampm && time1Obj.tot < time2Obj.tot) {
        timeDiff = ((time2Obj.hours * 60) + time2Obj.mins) - ((time1Obj.hours * 60) + time1Obj.mins);
    }
    
    else if (time1Obj.ampm !== time2Obj.ampm && time1Obj.ampm === 'am') {
        timeDiff = (((12 - time1Obj.hours) * 60) - time1Obj.mins) + ((time2Obj.hours * 60) + time2Obj.mins);
    }
    
    else {
        timeDiff = (((12 - time1Obj.hours) * 60) - time1Obj.mins) + ((time2Obj.hours * 60) + time2Obj.mins);
    }
    
    return timeDiff;
}

function setTimeObject(str, num) {
    var arr = str.split("-");
    var tObject = {};
    
    tObject.hours = Number(arr[num].slice(0,arr[num].length-2).split(":")[0]);
    tObject.mins = Number(arr[num].slice(0,arr[num].length-2).split(":")[1]);
    tObject.ampm = arr[num].slice(-2);
    tObject.tot = tObject.hours * 100 + tObject.mins;
    
    return tObject;
}
   
// keep this function call here 
CountingMinutesI(readline());