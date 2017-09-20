
(function scaleCaptcha() {
  // Width of the reCAPTCHA element, in pixels
  var reCaptchaWidth = 270;
  // Get the containing element's width
	var containerWidth = function(){
      $('.col-md-6').width()
    };
  console.log(containerWidth);

  // Only scale the reCAPTCHA if it won't fit
  // inside the container
  if(reCaptchaWidth > containerWidth) {
    // Calculate the scale
    var captchaScale = containerWidth / reCaptchaWidth;
    // Apply the transformation
    $('.g-recaptcha').css({
      'transform':'scale('+captchaScale+')'
    });
  }
}());
  //
  //scaleCaptcha();

