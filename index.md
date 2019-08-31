# SGNGoogleForms
Create forms in HTML which will look like the fields looks in Google.

# Installation

1.) Download the appropriate release from [here](https://github.com/SagnikGanguly96/SGNGoogleForms/releases) or download the [latest version](https://github.com/SagnikGanguly96/SGNGoogleForms/releases/latest).

2.) Extract the files in a location of your choice (i.e. localhost/inc/SGNGoogleForms/).

3.) Now add the following lines between `<head>` & `</head>` tags:
```
<link rel="stylesheet" href="localhost/inc/SGNGoogleForms/css/SGNGoogleForms.compressed.css">
<script src="localhost/inc/SGNGoogleForms/js/SGNGoogleForms.compressed.js"></script>
```

# Syntax
```
<form class="sgn-google-form">
	<div class="md-form form-md mt-0">
		<i class="fas fa-user prefix"></i>
		<label class="control-label" for="usr">Username</label>
		<input type="text" class="form-control" id="usr" placeholder="example" required="true" name="username" minlength="6" maxlength="24">
		<span class="help-block with-bg">Enter Registrar UID</span>
		<sgngfv empty="Please enter your desired username" length="Username must be between %min% & %max%" invalid="The username is invalid" unavailable="The username %val% is not available" available="Congratulations! The username %val% is available"></sgngfv>
	</div>
</form>
```

# Dependencies
1.) [jQuery 3.2.1+](https://jquery.com/download/) ([Download](https://code.jquery.com/jquery-3.4.1.min.js))

2.) [Bootstrap v4.3.1+](https://getbootstrap.com/docs/4.3/getting-started/download/) ([Download](https://github.com/twbs/bootstrap/releases/download/v4.3.1/bootstrap-4.3.1-dist.zip))

3.) [MDBootstrap v4.8.1+](https://mdbootstrap.com/docs/jquery/getting-started/download/) ([Downlaod](https://mdbootstrap.com/download/mdb-jquery/mdb-free/48889ae88b960e0b6c0/MDB-Free_4.8.8.zip))
