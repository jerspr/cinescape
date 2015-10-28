var obj = {
	gridC: function(){
		$('#posts').masonry({
		  	// options...
		  	itemSelector: '.post',
		  	columnWidth: 200
		});
	},
	slidePersonajes: function(){
		$('.personajes-s').slick({
		  	slidesToShow: 6,
		  	slidesToScroll: 1,
		  	autoplay: true,
		  	autoplaySpeed: 2000,
		  	responsive: [
		  		{
			      breakpoint: 1199,
			      settings:{
			        slidesToShow: 6
			      }
			    },
		  		{
			      breakpoint: 991,
			      settings:{
			        slidesToShow: 6
			      }
			    },
			    {
			      breakpoint: 600,
			      settings:{
			        slidesToShow: 6
			      }
			    },
			    {
			      breakpoint: 480,
			      settings:{
			        slidesToShow: 6
			      }
			    }
		    ]
		});
	},
	socialDefault: function(){
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.5&appId=101268106646636";
		 	fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	},
	showComment: function(){
		var botonDisabled=true;
		$(".header-comment").click(function(){
			var urlC = $(".header-comment").data("comment");
			var templ = '<div class="fb-comments" data-href="'+urlC+'" data-width="100%" data-numposts="5"></div>';
			if(botonDisabled==true){
				$(".cnt-coment-fb").show();
				$(".cnt-coment-fb").html(templ);
				FB.XFBML.parse();
				botonDisabled=false;
			}else{
				$(".cnt-coment-fb").hide();
				botonDisabled=true;
			}
		});
	}
}