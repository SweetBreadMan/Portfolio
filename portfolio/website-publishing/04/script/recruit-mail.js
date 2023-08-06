$(function(){
  /* Textarea Pre Text */
  var $recruitPreTxt = "요양보호사 자격증을 가지고 계신 분만 지원이 가능합니다.\n\n성명 : \n연락처(휴대폰번호 등) : \n거주지역 : \n케어 희망 지역 : \n기타(오전/오후, 시간, 특정 요일 등 원하는 사항을 적으시면 됩니다.) : ";
  $('.recruit-form #message').html($recruitPreTxt);

  /* Email JS */
  var publicKey = 'kDVYBij2ac1DnjcbA';
  var serviceId = 'service_cufszjs';
  var templateId = 'template_n0h0jts';

  emailjs.init(publicKey);

  $('.recruit-submit').click(function(e){
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
      $('.recruit-submit').text('전송중');
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
})