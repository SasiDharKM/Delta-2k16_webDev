var store = 0,state = 1, stop = 0,showTime,interval;


	function getTimeRem(targetTime) {                               //get remaining time
		showTime = targetTime - Date.parse(new Date());
		var t = new Date();
		var showDays = Math.floor(showTime / (24*60*60*1000));           //calculation of days,hours,minutes,seconds
		var showHours = Math.floor((showTime / (60*60*1000)) % 24);
		var showMinutes = Math.floor((showTime / (60*1000)) % 60);
		var showSeconds = Math.floor((showTime / 1000) % 60);
		var showMilliseconds = 1000 - t.getMilliseconds();
	    document.getElementById("days").innerHTML = showDays;                //setting up countdown values
		document.getElementById("hours").innerHTML = showHours;
		document.getElementById("minutes").innerHTML = showMinutes;
		document.getElementById("seconds").innerHTML = showSeconds;
		document.getElementById("milliseconds").innerHTML = showMilliseconds;
		if(showTime <= 0)
	    {
	    	clearInterval(interval);
	    	document.getElementById("milliseconds").innerHTML = 0;
	    	state = 1;
	        stop = 1;
	        executeResult();
	    }
	}


	function initClock(days, hours, minutes, seconds) {               //initializing timer
		store = (days*24*60*60*1000) + (hours*60*60*1000) + (minutes*60*1000) + (seconds*1000);
		document.getElementById("days").innerHTML = days;
		document.getElementById("hours").innerHTML = hours;
		document.getElementById("minutes").innerHTML = minutes;
		document.getElementById("seconds").innerHTML = seconds;
		document.getElementById("milliseconds").innerHTML = "00";
	}


	function pauseTimer() {                   				//A function to pause the countdown
		clearInterval(interval);
	    state = 1;
	}


	function resumeTimer() {							//A function to resume the countdown
		    if(stop == 1)
		    	alert("Put New Countdown Value to Start");
		    else{
		    clearInterval(interval);
		    state = 0;	
		    var currentTime = Date.parse(new Date());
		    var targetTime = currentTime + showTime;		  
		    function updateTime(){
		    	getTimeRem(targetTime);
		    }	
		    interval = setInterval(updateTime, 1);
		    updateTime();
		}
	}


	function stopTimer() {									//A function to stop the countdown
		clearInterval(interval);
	    state = 1;
	    stop = 1;
	}
	function resetTimer() {        									//A function to reset the countdown to 0
		    clearInterval(interval);	
		    var currentTime = Date.parse(new Date());
		    var targetTime = currentTime + store;
		    function updateTime(){
		    	getTimeRem(targetTime);
		    	document.getElementById("milliseconds").innerHTML = 0;
		    }	
		    updateTime();
		    stop= 0;
		    state = 1;
	}


	function startTimer() {									//A function to start the countdown
		if(state == 0)
			alert("Stop Timer to Set Up New Countdown");
		else if(stop == 1)
			alert("Put New Countdown Value to Start");
		else
		{
			state = 0;
		    var currentTime = Date.parse(new Date());
		    var targetTime = currentTime + store;
		    function updateTime(){
		    	getTimeRem(targetTime);
		    }	
		    interval = setInterval(updateTime, 1);
		    updateTime();
	    }
	}


	function updateTimer() {						//A function for updating values to the countdown timer
		clearInterval(interval);
		state = 1;
		stop = 0;
		var days = document.getElementById("getDays").value;
		var hours = document.getElementById("getHours").value;
		var minutes = document.getElementById("getMinutes").value;
		var seconds = document.getElementById("getSeconds").value;
		if(seconds == "")
			seconds = 0;
		if(hours == "")
			hours = 0;
		if(days == "")
			days = 0;
		if(minutes == "")
			minutes = 0;
		
		if(days<0)
			alert("Enter valid days!!");
		else if(hours<0 || hours>23)
			alert("Enter valid hours!!");
		else if(seconds<0 || seconds>=60)
			alert("Enter valid seconds!!");
		else if(minutes<0 || minutes>=60)
			alert("Enter valid minutes!!");
		else
			initClock(days, hours, minutes, seconds);
	}



 