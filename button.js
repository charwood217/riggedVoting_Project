// var x=0;
// var ln="";

var stupidButton = {
	init: function() {
		this.attachEvents();
	},

	attachEvents: function() {
		$('#runaway-container').on('hover', this.flyAway);
		$('#runaway').on('click', this.showWin);
	},

	flyAway: function(e) {
		mLeft = Math.random() * 300;
		mTop = Math.random() * 300;

		$('#runaway-container').css('margin-left', mLeft);
		$('#runaway-container').css('margin-top', mTop);
	},

	showWin: function(e) {
		upload();
	}
};

stupidButton.init();

function voteNix(event) {

    // window-relative field coordinates
    let fieldCoords = this.getBoundingClientRect();

    // the ball has position:absolute, the field: position:relative
    // so ball coordinates are relative to the field inner left-upper corner
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

ball.style.left = ballCoords.left + 'px';
ball.style.top = ballCoords.top + 'px';
}


// function upload()
// {
// x=x+1;
// ln=ln+"|";
// if (x!=101)
// {
// window.status="Virus Upload: "+x+"% complete "+ln;
// document.bgcolor=x;
// window.setTimeout("upload();", 1);
// } else {
// window.status="Upload complete...";
// }
// }

// function freeze()
// {
// while (true)
// {
// document.bgcolor="#338EFF";
// document.bgcolor="red";
// }


// var caller = getElementById("emcee"),
//     box = getElementById("box");

// function foo()
// {
//     var randX = Math.floor(Math.random() * (window.innerWidth - 100));
//     var randY = Math.floor(Math.random() * (window.innerHeight - 100));
//     console.log([randX, randY]);
//     caller.stop().animate({"left": randX + "px", "top": randY + "px"});

// }

// $(document).ready(function() {
    
//     caller.on('mouseenter', foo);
//     caller.on('click', function(){
//         alert('clicked!');
//     });
    
// });