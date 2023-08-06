$(function(){
  /* Email JS */
  var publicKey = 'kDVYBij2ac1DnjcbA';
  var serviceId = 'service_cufszjs';
  var templateId = 'template_6hjaeiv';

  emailjs.init(publicKey);

  $('.home-care-submit').click(function(e){
    /* Input Value */
    var templateParams = {	
      subject: $('input[name=subject]').val(),
      name: $('input[name=name]').val(), 
      email : $('input[name=email]').val(),
      message : $('textarea[name=message]').val()
    };

    var checkInput = templateParams.subject != '' && templateParams.name != '' && templateParams.email != '' && templateParams.message != '';

    if(checkInput) {
      e.preventDefault();
      $('.home-care-submit').text('전송중');
      emailjs.send(serviceId, templateId, templateParams)
      .then(function(response) {
          alert('메일 발송 완료');
          window.location.reload();
        }, function(error) {
          alert('메일 발송 실패');
        });
    } else {
      alert('필수 입력 사항을 입력해주세요.');
    }
  });

});