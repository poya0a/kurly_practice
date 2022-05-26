(function($){

 var kurly={
   init: function(){
     this.header();
     this.main();
     this.footer();
   },
 
   header:function(){
     
     $('.category').on({
       mouseover:function(){
         $('#menuContainer').slideDown(50);
       }
     });

     $('#menuContainer').on({
       mouseleave:function(){
         $(this).hide();
      }
     })

   },
   main:function(){

  var idOk=false;
  var idOverlapOk=false;
  var pwOk1=false;
  var pwOk2=false;
  var pwOk3=false;
  var pwConfirmOk=false;
  var emailOk=false;
  var emailOverlapOk=false;
  var phoneOk=false;
  var codeOk=false;
  
   //아이디
   $('#inputId').on({
    mousedown:function(){$('.guide-id').show();}
   });

   $('#inputId').on({
      keyup:function(event){
          event.preventDefault();

          var regExp=/^((?=.*[A-Za-z])+(?=.*[0-9])*)[^\s][A-Za-z0-9]{6,}$/g;
          var idValue=$(this).val().toString();
      
            if(idValue===''){ 
              $('.guide-id p').eq(0).removeClass('error');
              $('.guide-id p').eq(1).removeClass('error');
              $('.guide-id p').eq(0).removeClass('success');
              $('.guide-id p').eq(1).removeClass('success');
            }
            else{ 
              if(regExp.test(idValue)===true) {
                $('.guide-id p').eq(0).removeClass('error');
                $('.guide-id p').eq(0).addClass('success');
                idOk=true;
              }
              else if(regExp.test(idValue)===false) {
                $('.guide-id p').eq(0).removeClass('success'); 
                $('.guide-id p').eq(0).addClass('error')
                idOk;
              }
            }}
   });

   //아이디 중복 확인
   function idOverlapBtn(){

    var inputId=$('#inputId').val();
    var idOverlap=false;

    for(let i=0;i<localStorage.length;i++){
      if(JSON.parse(localStorage.getItem(localStorage.key(i))).idData===inputId){
        idOverlap=true;
      }}

    if(idOverlap===true){
      $('.guide-id p').eq(1).removeClass('success');
      $('.guide-id p').eq(1).addClass('error');
      alert('이미 등록된 아이디입니다.');
      idOverlapOk;
    }
    else{
      $('.guide-id p').eq(1).removeClass('error');
      $('.guide-id p').eq(1).addClass('success');
      alert('사용이 가능합니다.');
      idOverlapOk=true;
    }
    
   }

   $('.id-overlap-btn').on({
    click:function(e){
      e.preventDefault();
    
      var regExp=/^((?=.*[A-Za-z])+(?=.*[0-9])*)[^\s][A-Za-z0-9]{6,}$/g;
      var idValue=$('#inputId').val().toString();
    
          if(idValue===''){
              $('.guide-id p').eq(0).removeClass('error');
              $('.guide-id p').eq(0).removeClass('success');
              modal('아이디를 입력해주세요.');
          }
          else{ 
              if( regExp.test(idValue)===true) {
                $('.guide-id p').eq(0).removeClass('error');
                $('.guide-id p').eq(0).addClass('success');
                idOk=true;
                idOverlapBtn();
              }
              else if( regExp.test(idValue)===false) {
                $('.guide-id p').eq(0).removeClass('success');
                $('.guide-id p').eq(0).addClass('error');
                modal('6자 이상의 영문 혹은 영문과 숫자를 조합만 가능합니다.');
                idOk;
              }
          }}
   });


   //비밀번호
   $('#inputPw').on({
       mousedown:function(){$('.guide-pw').show();}
   });
 
   $('#inputPw').on({
       keyup:function(e){
         e.preventDefault();

         var regExp1=/.{10,}/; 
         var regExp2=/((?=.*[A-Za-z])+((?=.*[0-9])+|(?=.*[!@#$%&*_-])+)+)[^\s][A-Za-z0-9!@#$%&*_-]{10,}/;
         var regExp3=/(.)\1\1/; 
         var pwValue=$(this).val().toString();
       
             if(pwValue===''){
               $('.guide-pw p').eq(0).removeClass('error');
               $('.guide-pw p').eq(0).removeClass('success');
             }
             else{
               if(regExp1.test(pwValue)){
                 $('.guide-pw p').eq(0).removeClass('error');
                 $('.guide-pw p').eq(0).addClass('success');
                 pwOk1=true;
               }
               else{
                $('.guide-pw p').eq(0).removeClass('success');
                 $('.guide-pw p').eq(0).addClass('error');
                 pwOk1
               }
             }
           
             if(pwValue===''){
               $('.guide-pw p').eq(1).removeClass('error');
               $('.guide-pw p').eq(1).removeClass('success');
             }
             else{
               if(regExp2.test(pwValue)){
                 $('.guide-pw p').eq(1).removeClass('error');
                 $('.guide-pw p').eq(1).addClass('success');
                 pwOk2=true;
               }
               else{
                 $('.guide-pw p').eq(1).removeClass('success');
                 $('.guide-pw p').eq(1).addClass('error');
                 pwOk2
               }
             }
           
             if(pwValue===''){
               $('.guide-pw p').eq(2).removeClass('error');
               $('.guide-pw p').eq(2).removeClass('success');
             }
             else{
               if(regExp3.test(pwValue)){
                 $('.guide-pw p').eq(2).removeClass('success');
                 $('.guide-pw p').eq(2).addClass('error');
                 pwOk3
               }
               else{
                 $('.guide-pw p').eq(2).removeClass('error');
                 $('.guide-pw p').eq(2).addClass('success');
                 pwOk3=true;
               }
             }}
   });

   //비밀번호 확인
   $('#inputPwConfirm').on({
     mousedown:function(){$('.guide-password-confirm').show()}
   });

   $('#inputPwConfirm').on({
    keyup:function(e){
      e.preventDefault();
      var pwValue=$('#inputPw').val().toString();
      var pwConfirmValue=$('#inputPwConfirm').val().toString();


      if(pwConfirmValue===''){
        $('.guide-password-confirm p').removeClass('error');
        $('.guide-password-confirm p').removeClass('success');
      }
      else{
        if(pwConfirmValue===pwValue){
          $('.guide-password-confirm p').removeClass('error');
          $('.guide-password-confirm p').addClass('success');
          pwConfirmOk=true;
        }
        else{
          $('.guide-password-confirm p').removeClass('success');
          $('.guide-password-confirm p').addClass('error');
          pwConfirmOk;
        }
      }
    }
   });

   //이름
   $('#inputName').on({
     keyup:function(){
      $(this).val($(this).val().toString().replace(/([^A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s]*)/g,''));
     }
   });

   //이메일
   $('.email-overlap-btn').on({
     click:function(e){
       e.preventDefault();
       
       var inputEmailValue=$('#inputEmail').val();
       var inputEmail=$('#inputEmail');
       var regExpEmail=/^[A-Za-z0-9]([\-\_\\\.]?[A-Za-z0-9])*@[A-Za-z0-9]([\-\_\\\.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/g;
       var message='';    

           inputEmail.removeClass('error');
     
           if(inputEmailValue===''){
             message='이메일 주소를 입력해주세요.';  
             modal(message);        
           }
           else{
             if(regExpEmail.test(inputEmailValue)===false){
                inputEmail.addClass('error');
                inputEmail.focus();
                message='잘못된 이메일 형식입니다.';
                modal(message);
                emailOk;
             }
             else{
               inputEmail.removeClass('error');
               emailOverlapBtn();
               emailOk=true;
              }
           }}
   });

   //이메일 중복 확인
   function emailOverlapBtn(){

    var inputEmail=$('#inputEmail').val();
    var emailOverlap=false;

    for(let i=0;i<localStorage.length;i++){
      if(JSON.parse(localStorage.getItem(localStorage.key(i))).emailData===inputEmail){
        emailOverlap=true;
      }}
      
    if(emailOverlap===true){
      alert('이미 등록된 이메일입니다.');
      emailOverlapOk;
    }
    else{
      alert('사용이 가능합니다.');
      emailOverlapOk=true;
    }
   }
  
   //휴대폰
   $('#inputPhone').on({
       keyup:function(e){
         var PhoneValue=$(this).val();
         var regExp=/[^0-9]/g;

             $('#inputPhone').val(PhoneValue.replace(regExp,''));
       
             if(PhoneValue===''){
               $(this).removeClass('error');
               $('.phone-btn').removeClass('on');
             }
             else{
               if(PhoneValue.length>=10){
                   $('.phone-btn').addClass('on');
                   phoneOk=true;
                  }
                 else{
                   $('.phone-btn').removeClass('on');}
                   phoneOk;
             }}
   });

   $('.phone-btn').on({
       click:function(e){
           e.preventDefault();
       
           var PhoneValue=$('#inputPhone').val();
           var regExp=/^01[0|6|7|8|9]+\d{3,4}\d{4}$/;
       
               if( $('#inputPhone').val()<10){return;}
             
               if(regExp.test(PhoneValue)===false){
                 $('.code-num').addClass('on');
                 $('#inputCode, .cert-confirm-btn').hide();
                 $('.receive-info').show();
                 $(this).addClass('on');
                 modal('잘못된 휴대폰 번호 입니다. 확인 후 다시 시도 해 주세요.');
                 phoneOk;
               }
               else{
                 $('.code-num, .cert-confirm-btn').addClass('on');
                 $('.receive-info').show();
                 $(this).removeClass('on');
                 $('#inputPhone').prop('disabled',true);
                 modal('인증번호가 발송되었습니다.');
                 $('#inputCode, .cert-confirm-btn').prop('disabled',false);
                 $('#inputCode').removeClass('off');
                 $('.guide-receive').hide();
                 $('#inputCode').val('');
                 countTimer();
                 phoneOk=true;
               }}
    });

    //인증번호 확인
    $('#inputCode').on({
      keyup:function(e){
        e.preventDefault();

        $(this).val($(this).val().toString().replace(/[^0-9]/g,''));
        
      }
    });

    $('.cert-confirm-btn').on({
      click:function(e){
        e.preventDefault();
        
        var CodeValue=$('#inputCode').val();
        var passCode='950102';

        if(CodeValue===passCode){
          $('.receive-info').hide();
          $('.guide-receive').show()
          $('.guide-receive span').hide();
          $('.guide-receive p').show().text('인증번호 확인완료');
          modal('인증이 완료되었습니다.');
          clearInterval(setId);
          $('#inputCode, .cert-confirm-btn').prop('disabled',true);
          $('#countdown').html('');
          $('.cert-confirm-btn').removeClass('on');
          $('.phone-btn').addClass('on');
          $('#inputCode').addClass('off');
          codeOk=true;
          return;
        }
        else{
          $('.receive-info').hide();
          $('.guide-receive').show()
          $('.guide-receive p').hide();
          $('.guide-receive span').show().text('인증번호를 확인해주세요');
          $('#inputPhone').prop('disabled',false);
          codeOk;
          return;
        }
      }
    });

    
    //인증번호 확인 타이머 함수
    var setId=0;

    function countTimer(){
      
      var minutes=2;
      var seconds=60;
      
        setId=setInterval(function(){
          seconds--;
          if(seconds<0){
            minutes--;
            seconds=59;
            if(minutes<0){
              clearInterval(setId);
              $('#inputCode, .cert-confirm-btn').prop('disabled',true);
              $('#inputCode').addClass('off');
              $('.cert-confirm-btn').removeClass('on');
              modal('인증 제한 시간이 지났습니다.');
              $('#countdown').html('');
              $('.phone-btn').addClass('on');
              $('.cert-confirm-btn').removeClass('on');
              $('#inputCode').prop('disabled',true);
              $('#inputCode').addClass('off');
              return;
            }
          }

          $('#countdown').html(minutes+':'+(seconds<10?('0'+seconds):seconds));
       
        },1000);

    }

   //주소
   $('.address-btn').on({
     click:function(e){
       e.preventDefault();
       $('.address input').show();
       
       var str='';
     
       new daum.Postcode({
         oncomplete: function(data) {

           $('#inputAddress1').val(`${data.zonecode}`);
           $('#inputAddress2').val(`${data.address}`);
           $('#inputAddress3').focus();

           $('.address-btn').addClass('off');
           $('.research-btn').addClass('on');

           str=$('#inputAddress2').val();

           if(str.indexOf('서울')>=0){
             $('#deliveryTxt, .type01').show();
             $('.type02, .type03').hide();
             $('#deliveryModal').addClass('show');
             $('.layer-star').show();
             $('.layer-nomal, .layer-none').hide();
             $('.address-idx').text($('#inputAddress2').val().substr(0,7));
           }
           else if(str.indexOf('경기')>=0){
             $('#deliveryTxt, .type01').show();
             $('.type02, .type03').hide();
             $('#deliveryModal').addClass('show');
             $('.layer-star').show();
             $('.layer-nomal, .layer-none').hide();
             $('.address-idx').text($('#inputAddress2').val().substr(0,7));
           }                    
           else if(str.indexOf('제주')>=0){
             $('#deliveryTxt, .type03').show();
             $('.type01, .type02').hide();
             $('#deliveryModal').addClass('show');
             $('.layer-star, .layer-nomal').hide();
             $('.layer-none').show();
           }       
           else if(str.indexOf('울릉')>=0){
             $('#deliveryTxt, .type03').show();
             $('.type01, .type02').hide();
             $('#deliveryModal').addClass('show');
             $('.layer-star, .layer-nomal').hide();
             $('.layer-none').show();
           }
           else if(str.indexOf('독도')>=0){
             $('#deliveryTxt, .type03').show();
             $('.type01, .type02').hide();
             $('#deliveryModal').addClass('show');
             $('.layer-star, .layer-nomal').hide();
             $('.layer-none').show();
           }
           else {            
             $('#deliveryTxt, .type02').show();
             $('.type01, .type03').hide();
             $('#deliveryModal').addClass('show');
             $('.layer-star, .layer-none').hide();
             $('.layer-nomal').show();
           }


         }
       }).open();

     }
   });

   //주소재검색
   $('.research-btn').on({
     click:function(e){
       e.preventDefault();
       
       var str = '';

       new daum.Postcode({
        oncomplete: function(data) {
          $('#inputAddress1').val(`${data.zonecode}`);
          $('#inputAddress2').val(`${data.address}`);
          $('#inputAddress3').focus();

          str=$('#inputAddress2').val();

           if(  str.indexOf('서울')>=0){
            $('#deliveryTxt, .type01').show();
            $('.type02, .type03').hide();
            $('#deliveryModal').addClass('show');
            $('.layer-star').show();
            $('.layer-nomal, .layer-none').hide();
            $('.address-idx').text($('#inputAddress2').val().substr(0,7));
           }
           else if(str.indexOf('경기')>=0){
             $('#deliveryTxt, .type01').show();
             $('.type02, .type03').hide();
             $('#deliveryModal').addClass('show');
             $('.layer-star').show();
             $('.layer-nomal, .layer-none').hide();
             $('.address-idx').text($('#inputAddress2').val().substr(0,7));
           }                    
           else if(str.indexOf('제주')>=0){
             $('#deliveryTxt, .type03').show();
             $('.type01, .type02').hide();
             $('#deliveryModal').addClass('show');
             $('.layer-star, .layer-nomal').hide();
             $('.layer-none').show();
           }       
           else if(str.indexOf('울릉')>=0){
             $('#deliveryTxt, .type03').show();
             $('.type01, .type02').hide();
             $('#deliveryModal').addClass('show');
             $('.layer-star, .layer-nomal').hide();
             $('.layer-none').show();
           }
           else if(str.indexOf('독도')>=0){
             $('#deliveryTxt, .type03').show();
             $('.type01, .type02').hide();
             $('#deliveryModal').addClass('show');
             $('.layer-star, .layer-nomal').hide();
             $('.layer-none').show();
           }
           else {            
             $('#deliveryTxt, .type02').show();
             $('.type01, .type03').hide();
             $('#deliveryModal').addClass('show');
             $('.layer-star, .layer-none').hide();
             $('.layer-nomal').show();
           }
        }
      }).open();
     }
   });
   
   //성별

   //생년월일
   function inputBoxRegExpCheck(value){
       var regExp=/[^0-9]/g;
       return value.trim().replace(regExp,'');
   }
   
   function birthdayCheck(){

    var nowYear=new Date().getFullYear();
    var nowMonth=new Date().getMonth()+1;
    var nowDate=new Date().getDate();
    var nowDay=new Date().getDay();
    var nowHours=new Date().getHours();
    var nowMinuts=new Date().getMinutes();
    var nowSeconds=new Date().getSeconds();

    var today=new Date(nowYear,nowMonth,nowDate);

    var year=$('#year').val().trim().toString();  
    var month=$('#month').val().trim().toString();  
    var date=$('#date').val().trim().toString(); 
    var birthLastDate=new Date(year,month,0);

    if($('#year').val()===''&&$('#month').val()===''&&$('#date').val()===''){
      return;}
      else{
           if(!/^(?:19[0-9][0-9]|2[0-9][0-9][0-9])$/g.test(year)){ 
               $('.guide-birthday-confirm p').show().text('태어난 년도 4자리를 정확하게 입력해주세요.');
               return;}
           else{            
               $('.guide-birthday-confirm p').hide();
    
               if(!/^(?:0?[1-9]|1[0-2])$/g.test(month)){
                   $('.guide-birthday-confirm p').show().text('태어난 월을 정확하게 입력해주세요.');                
                   return;}

               else{  
                   $('.guide-birthday-confirm p').hide();
    
                   if(!/^(?:0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/g.test(date)  ||  date > birthLastDate.getDate() ){
                       $('.guide-birthday-confirm p').show().text('태어난 일을 정확하게 입력해주세요.');
                       return;}
                   
                    else{                         
                       $('.guide-birthday-confirm p').hide();
    
                       const nowYear120 = new Date(nowYear-120, nowMonth, nowDate);
                       const nowYear14 = new Date(nowYear-14, nowMonth, nowDate);
                       const birthDay  = new Date(year, month, date);
    
                       if(birthDay>today){
                           $('.guide-birthday-confirm p').show().text('생년월일이 미래로 입력되었어요.');
                           return;}
                       else{
                           $('.guide-birthday-confirm p').hide();}
                       
                       if(birthDay>nowYear14){
                           $('.guide-birthday-confirm p').show().text('만 14세 미만은 가입이 불가 합니다.');
                           return;}
                       else{
                           $('.guide-birthday-confirm p').hide();}                              
    
                       if(birthDay<nowYear120){
                           $('.guide-birthday-confirm p').show().text('생년월일을 다시한번 확인해주세요.');
                           return;}
                       else{
                           $('.guide-birthday-confirm p').hide();}
    
                   }}}
      }
    }   

   $('#year').on({
       keyup:function(){        
         $(this).val(inputBoxRegExpCheck($(this).val()));
       },
       focusout:function(){
         birthdayCheck();
       }
   });

   $('#month').on({
         keyup:function(){
           $(this).val(inputBoxRegExpCheck($(this).val()));
         },
         focusout:function(){
           birthdayCheck();
         },
         focusin:function(){
          birthdayCheck();
        }
   });

   $('#date').on({
         keyup:function(){
           $(this).val(inputBoxRegExpCheck($(this).val()));
         },
         focusout:function(){
           birthdayCheck();
         },
         focusin:function(){
          birthdayCheck();
        }
   });

   //추가입력 사항
   $('#recommend').on({
     change:function(e){
       e.preventDefault();

       if($(this).val()==='추천인 아이디'){
         $('.input-addiction-box').show();
         $('#inputAddiction').attr('placeholder','추천인 아이디를 입력해 주세요.');
       }
     }
   });

   $('#event').on({
    change:function(e){
      e.preventDefault();

      if($(this).val()==='참여 이벤트명'){
        $('.input-addiction-box').show();
        $('#inputAddiction').attr('placeholder','참여 이벤트명을 입력해 주세요.');
      }
    }
   });


   //약관동의
   $('#chk4').on({
     change:function(){
         
         if( $(this).is(':checked') ){
           $('#chk5').prop('checked',true);
           $('#chk6').prop('checked',true);
         }
         else{
           $('#chk5').prop('checked',false);
           $('#chk6').prop('checked',false);
         }
     }
   });
   
   $('#chk5').on({
     change:function(){
       if($('#chk5').is(':checked')===false||$('#chk6').is(':checked')===false){
         $('#chk4').prop('checked',false);
       }
       else{ 
         $('#chk4').prop('checked', true);
       }
     }
   });
   
   $('#chk6').on({
     change:function(){
       if($('#chk5').is(':checked')===false||$('#chk6').is(':checked')===false){
         $('#chk4').prop('checked',false);
       }
       else{ 
         $('#chk4').prop('checked',true);
       }
     }
   });
   
   var chkboxBtn=$('.chkbox-btn');
   
   chkboxBtn.each(function(idx){

       $(this).on({
         change:function(){
         
           var cnt=0;
           for(var i=0;i<chkboxBtn.length;i++){
             if(chkboxBtn.eq(i).is(':checked')===true){cnt++;}
           }
           if(cnt===7){
             $('#chkAll').prop('checked',true);
           }
           else{
             $('#chkAll').prop('checked',false);
           }
         }
       });
   });

   $('#chkAll').on({
     change:function(){
       
       if($(this).is(':checked')){    
         $('.chkbox-btn').prop('checked',true);
       }
       else{
         $('.chkbox-btn').prop('checked',false);
       }
     }
   });
   
   //모달창
   function modal(message){
    $('.modal-message').text(message);
    $('#modal').addClass('show');
   }
  
   $('.modal-close').on({
     click:function(){
       $('#modal').removeClass('show');
     }
   });

   //배송 방법 안내 모달창
   $('.layer-close-btn').on({
     click:function(){
      $('#deliveryModal').removeClass('show');
     }
   })

   //전송 버튼 클릭 이벤트
   $('.submit-btn').on({
    click:function(e){
      e.preventDefault();

      var idVal=$('#inputId').val();
      var pwVal=$('#inputPw').val();
      var pwConfirmVal=$('#inputPwConfirm').val();
      var nameVal=$('#inputName').val();
      var emailVal=$('#inputEmail').val();
      var phoneVal=$('#inputPhone').val();
      var codeVal=$('#inputCode').val();
      var addressVal=$('#inputAddress1').val()+''+$('#inputAddress2').val()+''+$('#inputAddress3').val();
      var addressVal2=$('#inputAddress1').val()+''+$('#inputAddress2').val()+'';
      var genderVal='';
      var birthdayVal=$('#year').val()+'-'+$('#month').val()+'-'+$('#date').val();
      var addictionVal='';
      var serviceVal=[];

      //genderVal
      if($('#male').is(':checked')){
        genderVal=$('#male').val();
      }
      else
      if($('#female').is(':checked')){
        genderVal=$('#female').val();
      }
      else {genderVal=$('#none').val();}

      //addictionVal
      if($('#recommend').is(':checked')){
        addictionVal=$('#inputAddiction').val();
      }
      else
      if($('#event').is(':checked')){
        addictionVal=$('#inputAddiction').val();
      }

      //serviceVal
      $('.chkbox-btn').each(function(idx){
        if($(this).is(':checked')===true){
          serviceVal.push($(this).val());
        }
      });

      var cnt=0;
      var mustChk=$('.must-chk');
       for(var i=0;i<mustChk.length;i++){
         if(mustChk.eq(i).is(':checked')===true){
             cnt++;
         }
       }
       
    //필수 입력사항(입력사항 중 하나라도 빠지면 전송 취소 및 입력 대기)
    
     if(idVal!==''&&pwVal!==''&&pwConfirmVal!==''&&nameVal!==''&&emailVal!==''&&phoneVal!==''&&codeVal!==''&&addressVal!==''&&cnt===3&&idOk===true&&idOverlapOk===true&&pwOk1===true&&pwOk2===true&&pwOk3===true&&pwConfirmOk===true&&emailOk===true&&emailOverlapOk===true&&phoneOk===true&&codeOk===true){
        var join={
          idData:idVal,
          pwData:pwVal,
          nameData:nameVal,
          emailData:emailVal,
          phoneData:phoneVal,
          addressData:addressVal,
          genderData:genderVal,
          birthdayData:birthdayVal,
          addictionData:addictionVal,
          serviceData:serviceVal
        }
      localStorage.setItem(join.idData,JSON.stringify(join));
      format();
    
      modal('회원가입이 완료되었습니다.');}

      else{
            if(idVal===''||idOk===false){
              modal('아이디를 입력해 주세요.');
              $('#inputId').focus();
              return;
            }
            if(idOverlapOk===false){
              modal('아이디 중복 확인을 확인해 주세요.');
              $('#inputId').focus();
              return;
            }
            if(pwVal===''||pwOk1===false||pwOk2===false||pwOk3===false){
              modal('비밀번호를 입력해 주세요.');
              $('#inputPw').focus();
              return;
            }
            if(pwConfirmVal===''||pwConfirmOk===false){
              modal('비밀번호를 한번 더 입력해 주세요.');
              $('#inputPwConfirm').focus();
              return;
            }
            if(nameVal===''){
              modal('이름을 입력해 주세요.');
              $('#inputName').focus();
              return;
            }
            if(emailVal===''||emailOk===false){
              modal('이메일을 입력해 주세요.');
              $('#inputEmail').focus();
              return;
            }
            if(emailOverlapOk===false){
              modal('이메일 중복 확인을 확인해 주세요.');
              $('#inputEmail').focus();
              return;
            }
            if(phoneVal===''||codeVal===''||phoneOk===false||codeOk===false){
              modal('휴대폰 인증을 완료해 주세요.');
              $('#inputPhone').focus();
              return;
            }
            if(addressVal===''||addressVal2===''){
              modal('주소를 입력해 주세요.');
              $('.address-btn').focus();
              return;
            }
           if(cnt<3){
             modal('이용약관에 동의해 주세요.');
             $('.service').focus();
             return;
           }           
      }
      
      function format(){
      //초기화
      $('#inputId').val('');
      $('#inputPw').val('');
      $('#inputPwConfirm').val('');
      $('#inputName').val('');
      $('#inputEmail').val('');
      $('#inputPhone').val('');
      $('#inputCode').val();
      $('#inputAddress1').val('')
      $('#inputAddress2').val('')
      $('#inputAddress3').val('');
      $('#year').val('')
      $('#month').val('')
      $('#date').val('');
      $('#inputAddiction').val('');
      serviceVal=[];
      
      $('#male').prop('checked',false);
      $('#female').prop('checked',false);
      $('#none').prop('checked',false);
      $('#recommend').prop('checked',false);
      $('#event').prop('checked',false);

      $('#chkAll').prop('checked',false);
      $('.chkbox-btn').each(function(){
        $(this).prop('checked',false);
      });

      $('.guide-text').hide();
      
      $('.guide-id p, .guide-pw p').removeClass('success');
      $('.guide-id p, .guide-pw p, #inputEmail').removeClass('error');

      $('.guide-password-confirm p').removeClass('error');
      $('.guide-password-confirm p').removeClass('success');

      $('.phone-btn, .cert-confirm-btn').removeClass('on');
      $('.code-num, .receive-info, .countdown').hide();

      $('.address input, #deliveryTxt').hide();
      $('.research-btn').removeClass('on');
      $('.address-btn').removeClass('off');

      $('.phone-btn').addClass('on');
      $('#inputPhone').prop('disabled',false);

      $('.guide-birthday-confirm p').hide();

      $('.input-addiction').hide();

    }}});

    //퀵 메뉴
    var currentlocation=parseInt($('#qNav').css('top'));

    $(window).scroll(function(){ 

      var location=$(window).scrollTop();

      $("#qNav").stop().animate({'top':location+currentlocation+'px'},300); 
    }); 

    },
   
    footer:function(){

    // 하단에서 상단으로 이동 버튼
    $('#pageTopBtn').hide();
    
    var footerTop=$('#footer').offset().top-$(window).innerHeight(); 

    $(window).scroll(function(){

      if($(this).scrollTop()>footerTop){
        $('#pageTopBtn').fadeIn();
      }
      else{
        $('#pageTopBtn').fadeOut();
    }});

    $('#pageTopBtn').click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false; 
    });
       
    }
   
}

kurly.init();

})(jQuery);