
function goBack(){
      window.history.back();
    }

  $(document).ready(function(e){

  	$(".btn").click(function() {
      $(this).css({"background-color":"#33cc99", "color":"white"});
    });


    $('#finish').click(clickFinish);

  });

function clickFinish(e){
      e.preventDefault();
      var titleVal = $("#title").val();
      var categoryVal, durationVal, relationshipVal, stepsVal, frequencyVal;
      var descriptionVal = $("#description").val();

      if($("input[type='radio'].category").is(':checked')) {
        categoryVal = $("input[type='radio'].category:checked").val();
      }
      if($("input[type='radio'].duration").is(':checked')) {
        durationVal = $("input[type='radio'].duration:checked").val();
      }
      if($("input[type='radio'].relationship").is(':checked')) {
        relationshipVal = $("input[type='radio'].relationship:checked").val();
      }
      if($("input[type='radio'].previous-steps").is(':checked')) {
        stepsVal = $("input[type='radio'].previous-steps:checked").val();
      }
      if($("input[type='radio'].frequency").is(':checked')) {
        frequencyVal = $("input[type='radio'].frequency:checked").val();
      }


      var newIssue = {
        "title": titleVal,
        "category": categoryVal,
        "description": descriptionVal,
        "duration": durationVal,
        "relationship": relationshipVal,
        "previous-steps": stepsVal,
        "frequency": frequencyVal,
        "moods": []
      };
      $.post('/storeIssue', {data: JSON.stringify(newIssue)}, function(data, status){
        if(data.success){
          console.log("success");
          localStorage.setItem('newlyCreatedTitle', titleVal);
          //alert("Your issue has been created and saved to home page!");
          window.location.href="/daily-mood";
        }
      });
    }

/*
  	$('#finish').click(function(){
  	localStorage.setItem('category', $('input[name="category"]:checked').val());

  	});
  	*/
/*
	var moodVal = localStorage.getItem('moods');
	var image = "../images/" + moodVal;
	$(".mood").append("<img class='pic' src='" + image +"'/>");


	$('#finish').click(clickFinish);



	function clickFinish(e){
		e.preventDefault();
		var commentVal = $("#text-multi-line").val();
		var today = new Date();
		var newMood = {
			"emoji": moodVal,
			"month": today.getMonth()+1,
			"day": today.getDate(),
			"comment": commentVal
		};
		console.log(newMood);
		$.post('/storeMood', {data: JSON.stringify(newMood)}, function(data, status){
			if(data.success){
				console.log("success");
				window.location.href="/homePage";
			}
		});
	}
*/
