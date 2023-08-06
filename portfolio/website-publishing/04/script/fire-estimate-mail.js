$(function(){
  /* Email JS Init */
  var publicKey = 'kDVYBij2ac1DnjcbA';
  var serviceId = 'service_cufszjs';
  var templateId = 'template_wf52yqc';

  emailjs.init(publicKey);

  $('.fire-estimate-submit').click(function(e){
    /* Input Value */
    var templateParams = {	
      subject: $('input[name=subject]').val(),
      company: $('input[name=company]').val(),
      manager: $('input[name=manager]').val(), 
      tel : $('input[name=tel]').val(),
      building : $('input[name=building]').val(),
      email : $('input[name=email]').val(),
      option : $('#kind option:selected').text(),
      floor : $('input[name=floor]').val(),
      location : $('input[name=location]').val(),
      usage : $('input[name=usage]').val(),
      area : $('input[name=area]').val(),
      message : $('textarea[name=message]').val()
    };

    var checkInput = templateParams.subject != '' && templateParams.company != '' && templateParams.manager != '' && templateParams.tel != '' && templateParams.email != '' && templateParams.option != '종류 선택' && templateParams.message != '';

    if(checkInput) {
      e.preventDefault();
      $('.fire-estimate-submit').text('전송중');
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
    })
})