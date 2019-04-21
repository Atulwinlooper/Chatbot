var index=0;
var questions=[
		["Hello There,<br> Welcome to Signup Kiosk<br> I'm Your virtual Assistant<br> What's Your First name??<br>"], ["What'sYour Last name??"], ["Your Email Address??"], ["Your Roll Nmber??"], ["Your Institute name??"], ["Your Date of Birth??"], ["Enter Your password.."], ["Re-enter Your password.." ], 
		];
var answers=[
	['<input id="fname" type="text" name="fname" placeholder="First name" required>'],
	['<input id="lname" type="text" name="lname" placeholder="Last name" required>'],
	['<input id="email" type="text" name="email" placeholder="email" required>'],
	['<input id="rollno" type="number" name="rno" placeholder="rollno" required>'],
	['<input id="iname" type="text" name="iname" placeholder="Institute" required>'],
	['<input id="dob" type="date" name="dob" placeholder="Date of Birth" required>'],
	['<input id="paawrd" type="password" name="pward" placeholder="Password" required>'],
	['<input id="paawrd" type="password" name="pward" placeholder="Password" required>'],
	
];
	function askQuestion(i){
				if(typeof(questions[index])==='undefined'){

				}else{
					setTimeout(function(){
						$(".chatbox").append('<span class="bot_name">Atul Bhadoria<img class="botimg" src="img/a.png"></img></span> <span class="bot_message"> '+questions[i]+'</span>');
						$(".chatbox").scrollTop($(".chatbox").prop('scrollHeight'));
				
					},1500);
				}
	 }
	function chatInit(){
	askQuestion(index);
	}
	chatInit();
	document.querySelector("#input").addEventListener('keypress',function(e){
		var key = e.keycode || e.which;
		if (key==13){
			var input = $("input").val();
			answers[index]=input;
			$(".chatbox").append('<span class="user_name">You<img class="userimg" src="img/stu.png"></img></span> <span class="user_message">'+input+'</span>');
			$(".chatbox").scrollTop($(".chatbox").prop('scrollHeight'));
			index++;
			askQuestion(index);
			$("input").val('');
			$("input").focus();
		}
	});
	function send(){
		var input = $("input").val();
			answers[index]=input;
			$(".chatbox").append('<span class="user_name">You<img class="userimg" src="img/stu.png"></img></span> <span class="user_message">'+input+'</span>');
			$(".chatbox").scrollTop($(".chatbox").prop('scrollHeight'));
			index++;
			askQuestion(index);
			$("input").val('');
			$("input").focus();

	}