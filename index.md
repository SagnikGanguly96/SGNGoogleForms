# Contents
- [Introduction](#sgngoogleforms)
- [Installation](#installation)
- [Syntax](#syntax)
  - [Text/Password/Number/Tel Input](#textpasswordnumbertel-input)
	- [Simple](#simple)
	- [With Label](#with-label)
	- [With Label & Prefix](#with-label--prefix)
	- [With Label, Prefix & Suffix](#with-label-prefix--suffix)
	- [With Label, Prefix, Suffix & Help Block (Transparent)](#with-label-prefix-suffix--help-block-transparent)
	- [With Label, Prefix, Suffix & Help Block (With Background)](#with-label-prefix-suffix--help-block-with-background)
	- [With Label, Prefix, Suffix, Help Block & Validation](#with-label-prefix-suffix-help-block--validation)
	- [With Label, Prefix, Suffix, Help Block, Validation & Input Group](#with-label-prefix-suffix-help-block-validation--input-group)
  - [Select Dropdown](#select-dropdown)
	- [Simple](#simple-1)
	- [With Label](#with-label-1)
	- [With Label & Prefix](#with-label--prefix-1)
	- [With Label, Prefix & Suffix](#with-label-prefix--suffix-1)
	- [With Label, Prefix, Suffix & Help Block (Transparent)](#with-label-prefix-suffix--help-block-transparent-1)
	- [With Label, Prefix, Suffix & Help Block (With Background)](#with-label-prefix-suffix--help-block-with-background-1)
	- [With Label, Prefix, Suffix, Help Block & Validation](#with-label-prefix-suffix-help-block--validation-1)
  - [Radio Buttons](#radio-buttons)
	- [Simple](#simple-2)
	- [With Control Label](#with-control-label)
	- [With Control Label, Prefix, Suffix & Help Block (Transparent)](#with-control-label---help-block-transparent)
	- [With Control Label, Prefix, Suffix & Help Block (With Background)](#with-control-label---help-block-with-background)
  - [Checkboxes](#checkboxes)
	- [Simple](#simple-3)
	- [With Control Label](#with-control-label-1)
	- [With Control Label, Prefix, Suffix & Help Block (Transparent)](#with-control-label---help-block-transparent-1)
	- [With Control Label, Prefix, Suffix & Help Block (With Background)](#with-control-label---help-block-with-background-1)
  - [Datepicker](#datepicker)



# SGNGoogleForms
Create forms in HTML which will look like the fields looks in Google.

# Installation

1.) Download the appropriate release from [here](https://github.com/SagnikGanguly96/SGNGoogleForms/releases) or download the [latest version](https://github.com/SagnikGanguly96/SGNGoogleForms/releases/latest).

2.) Extract the files in a location of your choice (i.e. localhost/inc/SGNGoogleForms/).

3.) Now add the following lines between `<head>` & `</head>` tags:
```html
<link rel="stylesheet" href="localhost/inc/SGNGoogleForms/css/SGNGoogleForms.css">
<script src="localhost/inc/SGNGoogleForms/js/SGNGoogleForms.js"></script>
```

# Syntax
**The tags must follow the layout listed below for each type of fields. The `validation (sgngfv), input-group, prefix, suffix, label, help-block` elements can be removed or added but must follow the layout flow.**

### Text/Password/Number/Tel Input
* ##### Simple

```html
<form class="sgn-google-form">
	<div class="md-form form-md mt-0">
		<input type="text" class="form-control" id="usr" placeholder="example" required="true" name="username" minlength="6" maxlength="24">
	</div>
</form>
```


* ##### With Label

```html
<form class="sgn-google-form">
	<div class="md-form form-md mt-0">
		<label class="control-label" for="usr">Username</label>
		<input type="text" class="form-control" id="usr" placeholder="example" required="true" name="username" minlength="6" maxlength="24">
	</div>
</form>
```


* ##### With Label & Prefix

```html
<form class="sgn-google-form">
	<div class="md-form form-md mt-0">
		<i class="fas fa-user prefix"></i>
		<label class="control-label" for="usr">Username</label>
		<input type="text" class="form-control" id="usr" placeholder="example" required="true" name="username" minlength="6" maxlength="24">
	</div>
</form>
```


* ##### With Label, Prefix & Suffix

```html
<form class="sgn-google-form">
	<div class="md-form form-md mt-0">
		<i class="fas fa-key prefix"></i>
		<i class="fas fa-eye-slash suffix"></i>
		<label class="control-label" for="usr">Password</label>
		<input type="password" class="form-control" id="pwd" placeholder="example" required="true" name="password" minlength="6" maxlength="24">
	</div>
</form>
```


* ##### With Label, Prefix, Suffix & Help Block (transparent)

```html
<form class="sgn-google-form">
	<div class="md-form form-md mt-0">
		<i class="fas fa-key prefix"></i>
		<i class="fas fa-eye-slash suffix"></i>
		<label class="control-label" for="usr">Password</label>
		<input type="password" class="form-control" id="pwd" placeholder="example" required="true" name="password" minlength="6" maxlength="24">
		<span class="help-block">Enter your password</span>
	</div>
</form>
```


* ##### With Label, Prefix, Suffix & Help Block (with background)

```html
<form class="sgn-google-form">
	<div class="md-form form-md mt-0">
		<i class="fas fa-key prefix"></i>
		<i class="fas fa-eye-slash suffix"></i>
		<label class="control-label" for="usr">Password</label>
		<input type="password" class="form-control" id="pwd" placeholder="example" required="true" name="password" minlength="6" maxlength="24">
		<span class="help-block with-bg">Enter your password</span>
	</div>
</form>
```


* ##### With Label, Prefix, Suffix, Help Block & Validation

```html
<form class="sgn-google-form">
	<div class="md-form form-md mt-0">
		<i class="fas fa-key prefix"></i>
		<i class="fas fa-eye-slash suffix"></i>
		<label class="control-label" for="usr">Password</label>
		<input type="password" class="form-control" id="pwd" placeholder="example" required="true" name="password" minlength="6" maxlength="24">
		<span class="help-block with-bg">Enter your desired password</span>
		<sgngfv empty="Please choose your password" length="Password must be between %min% & %max%" invalid="The password is invalid"></sgngfv>
	</div>
</form>
```


* ##### With Label, Prefix, Suffix, Help Block, Validation & Input Group

```html
<form class="sgn-google-form">
	<div class="md-form form-md mt-0">
		<i class="fas fa-key prefix"></i>
		<i class="fas fa-eye-slash suffix"></i>
		<label class="control-label" for="usr">Password</label>
		<input type="password" class="form-control" id="pwd" placeholder="example" required="true" name="password" minlength="6" maxlength="24">
		<div class="input-group-append">
			<button class="btn btn-md btn-default m-0 px-3 waves-effect waves-light" type="button" id="generatePwdBtn">
				<i class="fas fa-sync-alt"></i>Generate
			</button>
		</div>
		<span class="help-block with-bg">Enter your desired password</span>
		<sgngfv empty="Please choose your password" length="Password must be between %min% & %max%" invalid="The password is invalid"></sgngfv>
	</div>
</form>
```


### Select Dropdown
Place the code below to the end of the page to initialize select dropdown
```html
<script>
// Material Select Initialization
$(document).ready(function() {
	$('.mdb-select').materialSelect();
});
</script>
```


* ##### Simple

```html
<div class="md-form form-md mt-0 text-capitalize">
	<select class="mdb-select colorful-select dropdown-primary" id="prefix" name="prefix" required="true">
		<option value="Master">Master</option>
		<option value="Miss">Miss</option>
		<option value="Mr" selected="selected">Mr(Mister)</option>
		<option value="Mrs">Mrs(Mistress)</option>
	</select>
</div>
```


* ##### With Label

```html
<div class="md-form form-md mt-0 text-capitalize">
	<label class="control-label edited" for="prefix">Prefix</label>
	<select class="mdb-select colorful-select dropdown-primary" id="prefix" name="prefix" required="true">
		<option value="Master">Master</option>
		<option value="Miss">Miss</option>
		<option value="Mr" selected="selected">Mr(Mister)</option>
		<option value="Mrs">Mrs(Mistress)</option>
	</select>
</div>
```


* ##### With Label & Prefix

```html
<div class="md-form form-md mt-0 text-capitalize">
	<i class="fas fa-user prefix"></i>
	<label class="control-label edited" for="prefix">Prefix</label>
	<select class="mdb-select colorful-select dropdown-primary" id="prefix" name="prefix" required="true">
		<option value="Master">Master</option>
		<option value="Miss">Miss</option>
		<option value="Mr" selected="selected">Mr(Mister)</option>
		<option value="Mrs">Mrs(Mistress)</option>
	</select>
</div>
```


* ##### With Label, Prefix & Suffix

```html
<div class="md-form form-md mt-0 text-capitalize">
	<i class="fas fa-user prefix"></i>
	<i class="fas fa-user suffix"></i>
	<label class="control-label edited" for="prefix">Prefix</label>
	<select class="mdb-select colorful-select dropdown-primary" id="prefix" name="prefix" required="true">
		<option value="Master">Master</option>
		<option value="Miss">Miss</option>
		<option value="Mr" selected="selected">Mr(Mister)</option>
		<option value="Mrs">Mrs(Mistress)</option>
	</select>
</div>
```


* ##### With Label, Prefix, Suffix & Help Block

```html
<div class="md-form form-md mt-0 text-capitalize">
	<i class="fas fa-user prefix"></i>
	<i class="fas fa-user suffix"></i>
	<label class="control-label edited" for="prefix">Prefix</label>
	<select class="mdb-select colorful-select dropdown-primary" id="prefix" name="prefix" required="true">
		<option value="Master">Master</option>
		<option value="Miss">Miss</option>
		<option value="Mr" selected="selected">Mr(Mister)</option>
		<option value="Mrs">Mrs(Mistress)</option>
	</select>
	<span class="help-block with-bg">Choose your prefix</span>
</div>
```


* ##### With Label, Prefix, Suffix, Help Block & Validation

```html
<div class="md-form form-md mt-0 text-capitalize">
	<i class="fas fa-user prefix"></i>
	<i class="fas fa-user suffix"></i>
	<label class="control-label edited" for="prefix">Prefix</label>
	<select class="mdb-select colorful-select dropdown-primary" id="prefix" name="prefix" required="true">
		<option value="Master">Master</option>
		<option value="Miss">Miss</option>
		<option value="Mr" selected="selected">Mr(Mister)</option>
		<option value="Mrs">Mrs(Mistress)</option>
	</select>
	<span class="help-block with-bg">Choose your prefix</span>
	<sgngfv empty="Please choose your prefix"></sgngfv>
</div>
```


### Radio Buttons

* ##### Simple

```html
<div class="md-form form-md mt-0 sgngf-radiobox">
	<label class="control-label edited">Gender</label>
	<div class="form-check">
		<input value="Male" id="step3_sex_male" name="step3_sex" checked="checked" type="radio" class="form-check-input">
		<label class="form-check-label" for="step3_sex_male">Male</label>
	</div>
	<div class="form-check">
		<input value="Female" id="step3_sex_female" name="step3_sex" type="radio" class="form-check-input">
		<label class="radio form-check-label" for="step3_sex_female">Female</label>
	</div>
</div>
```


* ##### With Control Label

```html
<div class="md-form form-md mt-0 sgngf-radiobox">
	<label class="control-label edited">Gender</label>
	<div class="form-check">
		<input value="Male" id="step3_sex_male" name="step3_sex" checked="checked" type="radio" class="form-check-input">
		<label class="form-check-label" for="step3_sex_male">Male</label>
	</div>
	<div class="form-check">
		<input value="Female" id="step3_sex_female" name="step3_sex" type="radio" class="form-check-input">
		<label class="radio form-check-label" for="step3_sex_female">Female</label>
	</div>
</div>
```


* ##### With Control Label & Help Block (transparent)

```html
<div class="md-form form-md mt-0 sgngf-radiobox">
	<label class="control-label edited">Gender</label>
	<div class="form-check">
		<input value="Male" id="step3_sex_male" name="step3_sex" checked="checked" type="radio" class="form-check-input">
		<label class="form-check-label" for="step3_sex_male">Male</label>
	</div>
	<div class="form-check">
		<input value="Female" id="step3_sex_female" name="step3_sex" type="radio" class="form-check-input">
		<label class="radio form-check-label" for="step3_sex_female">Female</label>
	</div>
	<span class="help-block">Select your gender</span>
</div>
```


* ##### With Control Label & Help Block (with background)

```html
<div class="md-form form-md mt-0 sgngf-radiobox">
	<label class="control-label edited">Gender</label>
	<div class="form-check">
		<input value="Male" id="step3_sex_male" name="step3_sex" checked="checked" type="radio" class="form-check-input">
		<label class="form-check-label" for="step3_sex_male">Male</label>
	</div>
	<div class="form-check">
		<input value="Female" id="step3_sex_female" name="step3_sex" type="radio" class="form-check-input">
		<label class="radio form-check-label" for="step3_sex_female">Female</label>
	</div>
	<span class="help-block with-bg">Select your gender</span>
</div>
```


### Checkboxes

* ##### Simple

```html
<div class="md-form form-md mt-0 sgngf-checkbox">
	<label class="control-label edited">Gender</label>
	<div class="form-check">
		<input value="1" id="terms" name="declarations" checked="checked" type="checkbox" class="form-check-input">
		<label class="form-check-label" for="terms">1</label>
	</div>
	<div class="form-check">
		<input value="1" id="privacy" name="declarations" type="checkbox" class="form-check-input">
		<label class="checkbox form-check-label" for="privacy">1</label>
	</div>
</div>
```


* ##### With Control Label

```html
<div class="md-form form-md mt-0 sgngf-checkbox">
	<label class="control-label edited">Gender</label>
	<div class="form-check">
		<input value="1" id="terms" name="declarations" checked="checked" type="checkbox" class="form-check-input">
		<label class="form-check-label" for="terms">1</label>
	</div>
	<div class="form-check">
		<input value="1" id="privacy" name="declarations" type="checkbox" class="form-check-input">
		<label class="checkbox form-check-label" for="privacy">1</label>
	</div>
</div>
```


* ##### With Control Label & Help Block (transparent)

```html
<div class="md-form form-md mt-0 sgngf-checkbox">
	<label class="control-label edited">Gender</label>
	<div class="form-check">
		<input value="1" id="terms" name="declarations" checked="checked" type="checkbox" class="form-check-input">
		<label class="form-check-label" for="terms">1</label>
	</div>
	<div class="form-check">
		<input value="1" id="privacy" name="declarations" type="checkbox" class="form-check-input">
		<label class="checkbox form-check-label" for="privacy">1</label>
	</div>
	<span class="help-block">Select your gender</span>
</div>
```


* ##### With Control Label & Help Block (with background)

```html
<div class="md-form form-md mt-0 sgngf-checkbox">
	<label class="control-label edited">Gender</label>
	<div class="form-check">
		<input value="1" id="terms" name="declarations" checked="checked" type="checkbox" class="form-check-input">
		<label class="form-check-label" for="terms">1</label>
	</div>
	<div class="form-check">
		<input value="1" id="privacy" name="declarations" type="checkbox" class="form-check-input">
		<label class="checkbox form-check-label" for="privacy">1</label>
	</div>
	<span class="help-block with-bg">Select your gender</span>
</div>
```


### Datepicker

Add *datepicker* class to any text input and follow the syntax of [Text/Password/Number/Tel Input](#textpasswordnumbertel-input)
And place the code below to the end of the page

```html
<script>
	// Data Picker Initialization
	$('.datepicker').pickadate();
</script>
```


# Dependencies
1.) [jQuery 3.2.1+](https://jquery.com/download/) ([Download](https://code.jquery.com/jquery-3.4.1.min.js))

2.) [Bootstrap v4.3.1+](https://getbootstrap.com/docs/4.3/getting-started/download/) ([Download](https://github.com/twbs/bootstrap/releases/download/v4.3.1/bootstrap-4.3.1-dist.zip))

3.) [MDBootstrap v4.8.1+](https://mdbootstrap.com/docs/jquery/getting-started/download/) ([Downlaod](https://mdbootstrap.com/download/mdb-jquery/mdb-free/48889ae88b960e0b6c0/MDB-Free_4.8.8.zip))
