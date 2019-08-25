$(document).ready(function(){
	var pv=$('.progress .progress-bar').attr("value"),
		pmin=$('.progress .progress-bar').attr("min"),
		pmax=$('.progress .progress-bar').attr("max");
	//var progress=((pmax-pv)/pmax)*pv;
	var progress=(pv*100)/pmax;
	$('.progress .progress-bar').width(progress+"%");
	//$('.progress .progress-bar').text(progress+"%");

	var labelActiveClasses = "active edited";
	var fields = ".sgn-google-form .md-form input, .sgn-google-form .md-form select, .sgn-google-form .md-form textarea, .sgn-google-form .md-form button";
	fields += ".sgn-google-form .md-form .form-check > input";
	fields += ".sgn-google-form .form-group input, .sgn-google-form .form-group select, .sgn-google-form .form-group textarea, .sgn-google-form .form-group button";
	fields += ".sgn-google-form .form-group .input-group > input, .sgn-google-form .form-group .input-group select, .sgn-google-form .form-group .input-group textarea, .sgn-google-form .form-group .input-group button";

	$(fields).each(function(){
		var type = ($(this).prop("nodeName").toUpperCase()=="INPUT")?$(this).attr("type").toLowerCase():$(this).prop("nodeName").toLowerCase();
		var parentElem = ".md-form";

		if($(this).parents(".md-form").length)
			parentElem = ".md-form";
		else if($(this).parents(".form-check").length)
			parentElem = ".form-check";
		else if($(this).parents(".input-group").length)
			parentElem = ".input-group";
		else if($(this).parents(".form-group").length)
			parentElem = ".form-group";
		else
			parentElem = ".md-form";

		if(type == "radio"){
			$(this).parents(parentElem).addClass("sgngf-radiobox");

			if($(this).parents(".form-check").parents(parentElem).children("label").length <= 0)
				$(this).parents(parentElem).addClass("no-control-label");

			if(!$(this).hasClass("form-check-input"))
				$(this).addClass("form-check-input");

			if(!$(this).parent(".form-check").find("label").hasClass("form-check-label"))
				$(this).parent(".form-check").find("label").addClass("form-check-label");
		}
		else if(type == "checkbox"){
			$(this).parents(parentElem).addClass("sgngf-checkbox");

			if($(this).parents(".form-check").parents(parentElem).children("label").length <= 0)
				$(this).parents(parentElem).addClass("no-control-label");

			if(!$(this).hasClass("form-check-input"))
				$(this).addClass("form-check-input");

			if(!$(this).parent(".form-check").find("label").hasClass("form-check-label"))
				$(this).parent(".form-check").find("label").addClass("form-check-label");
		}
		else if(type == "select"){
			if($(this).val().length > 0)
				$(this).parents(parentElem).find("label").addClass("edited");
		}
		if($(this).hasClass("form-control") || $(this).hasClass("form-check-input")){
			if($(this).attr("readonly"))
				$(this).parents(parentElem).addClass("readonly");
			if($(this).attr("disabled"))
				$(this).parents(parentElem).addClass("disabled");
		}
		$(this).parents().find("label, .prefix, .suffix").removeClass("active");
	});

	$(document).on("focus","input, textarea",function(){
		if($(this).parents(".md-form").length)
			$(this).parents(".md-form").removeClass("waiting").addClass("active");
		else if($(this).parents(".form-check").length)
			$(this).parents(".form-check").removeClass("waiting").addClass("active");
		else if($(this).parents(".input-group").length)
			$(this).parents(".input-group").removeClass("waiting").addClass("active");
		else if($(this).parents(".form-group").length)
			$(this).parents(".form-group").removeClass("waiting").addClass("active");
		else
			$(this).parents(".md-form").removeClass("waiting").addClass("active");
		if($(this).attr("placeholder"))
			$(this).parents(".active").find(".prefix, .suffix").removeClass("active");
	});
	$(document).on("change","input, textarea",function(){
		if($(this).parents(".md-form").length){
			$(this).parents(".md-form").removeClass("active");
			$(this).parents(".md-form").children("label").removeClass(labelActiveClasses);
			if($(this).parents(".md-form").children("label").length){
				if($(this).val().length > 0)
					$(this).parents(".md-form").children("label").addClass("edited");
			}
		} else if($(this).parents(".form-check").length){
			$(this).parents(".form-check").removeClass("active");
			$(this).parents(".form-check").children("label").removeClass(labelActiveClasses);
			if($(this).parents(".form-check").children("label").length){
				if($(this).val().length > 0)
					$(this).parents(".form-check").children("label").addClass("edited");
			}
		} else if($(this).parents(".input-group").length){
			$(this).parents(".input-group").removeClass("active");
			$(this).parents(".input-group").children("label").removeClass(labelActiveClasses);
			if($(this).parents(".input-group").children("label").length){
				if($(this).val().length > 0)
					$(this).parents(".input-group").children("label").removeClass("edited");
			}
		} else if($(this).parents(".form-group").length){
			$(this).parents(".form-group").removeClass("active");
			$(this).parents(".form-group").children("label").removeClass(labelActiveClasses);
			if($(this).parents(".form-group").children("label").length){
				if($(this).val().length > 0)
					$(this).parents(".form-group").children("label").removeClass("edited");
			}
		} else {
			$(this).parents(".md-form").removeClass("active");
			$(this).parents(".md-form").children("label").removeClass(labelActiveClasses);
			if($(this).parents(".md-form").children("label").length){
				if($(this).val().length > 0)
					$(this).parents(".md-form").children("label").addClass("edited");
			}
		}
		if($(this).attr("placeholder"))
			$(this).parents(".active").find(".prefix, .suffix").removeClass("active");
	});
	$(document).on("focus click",".sgn-google-form .md-form, .sgn-google-form .md-form .prefix, .sgn-google-form .md-form .suffix, .sgn-google-form .md-form .help-block",function(){
		var type = ($(this).prop("nodeName").toUpperCase()=="INPUT")?$(this).attr("type").toLowerCase():$(this).prop("nodeName").toLowerCase();
		if($(this).parents(".md-form").find(".form-control").length)
			$(this).parents(".md-form").find(".form-control").focus();
		else if($(this).parents(".form-check").find(".form-control").length)
			$(this).parents(".form-check").find(".form-control").focus();
		else if($(this).parents(".input-group").find(".form-control").length)
			$(this).parents(".input-group").find(".form-control").focus();
		else if($(this).parents(".form-group").find(".form-control").length)
			$(this).parents(".form-group").find(".form-control").focus();
		else
			$(this).parents(".md-form").find(".form-control").focus();
		if(type=="date"){
			$(this).parents().find(".form-control").pickadate({
				weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
				showMonthsShort: true
			});
		}
	});
	$(document).on("blur","input, textarea",function(){
		if($(this).parents(".md-form").length){
			$(this).parents(".md-form").removeClass("active");
			$(this).parents(".md-form").children("label").removeClass(labelActiveClasses);
			if($(this).parents(".md-form").children("label").length){
				if($(this).val().length > 0)
					$(this).parents(".md-form").children("label").addClass("edited");
			}
		} else if($(this).parents(".form-check").length){
			$(this).parents(".form-check").removeClass("active");
			$(this).parents(".form-check").children("label").removeClass(labelActiveClasses);
			if($(this).parents(".form-check").children("label").length){
				if($(this).val().length > 0)
					$(this).parents(".form-check").children("label").addClass("edited");
			}
		} else if($(this).parents(".input-group").length){
			$(this).parents(".input-group").removeClass("active");
			$(this).parents(".input-group").children("label").removeClass(labelActiveClasses);
			if($(this).parents(".input-group").children("label").length){
				if($(this).val().length > 0)
					$(this).parents(".input-group").children("label").removeClass("edited");
			}
		} else if($(this).parents(".form-group").length){
			$(this).parents(".form-group").removeClass("active");
			$(this).parents(".form-group").children("label").removeClass(labelActiveClasses);
			if($(this).parents(".form-group").children("label").length){
				if($(this).val().length > 0)
					$(this).parents(".form-group").children("label").removeClass("edited");
			}
		} else {
			$(this).parents(".md-form").removeClass("active");
			$(this).parents(".md-form").children("label").removeClass(labelActiveClasses);
			if($(this).parents(".md-form").children("label").length){
				if($(this).val().length > 0)
					$(this).parents(".md-form").children("label").addClass("edited");
			}
		}
		if($(this).attr("placeholder"))
			$(this).parents(".active").find(".prefix, .suffix").removeClass("active");
	});
});
