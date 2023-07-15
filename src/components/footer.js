
import './one.css'
import {useEffect} from 'react';
import React from 'react';
import '../pages/style.scss'
import $ from 'jquery'
import { TSB_ROUTE,FQI_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
function NavBar() {
    const navigate = useNavigate()
    useEffect(() => {
        $(document).ready(function(){
            $('.accordion-list > li1 > .answer').hide();
              
            $('.accordion-list > li1').click(function() {
              if ($(this).hasClass("active")) {
               
              } else {
                $(".accordion-list > li1.active .answer").slideUp();
                $(".accordion-list > li1.active").removeClass("active");
                $(this).addClass("active").find(".answer").slideDown();
              }
              return false;
            });
            
          });
    
      }, []);



	return(

<div class='container_footer'>

<div class='ml'>
  <div class='col-12 col-md-1'>
<div class="vertical-line" ></div>
</div>

<div class='col-12 bord'>
<div class='row'>

<div class='col-6'>
   <div id='text_2'>
      Будьте первыми ,кто узнает о новой коллекции.
   </div>
   

</div>

<div class='col-6 display_flex'>


<div class='display_flex mt-28 w80'>
<input type="email" id="inputPassword5"  placeholder="Email" class="form-control form_c in-put1" aria-labelledby="passwordHelpBlock"/>
<div id='but_email'>
        <div class='display_Flex'>
        Подписаться
        </div>
        
    </div>
</div>




</div>


</div></div>
<div class="horisontal-line horisontal-line1" ></div>
<div class='col-9 mleft '>

<div class='row '>

<div class='col-2 '> 

  <div class='dopolni1'>О НАС</div>
  <h5>Наш блог</h5>
  <h5>Концепция TSB</h5>
  <h5></h5>
</div>

<div class='col-2 '> 
<div class='dopolni1'>КЛИЕНТСКИЙ СЕРВИС</div>
<h5>Вопросы и ответы</h5>
<h5 onClick={() => navigate(TSB_ROUTE)} >Условия доставки</h5>
<h5>Способы оплаты</h5>
<h5>Условия возврата</h5>

</div>

<div class='col-2'> 
  <div class='dopolni1'>НУЖНА ПОМОЩЬ?</div>
  <h5>Связаться с нами</h5>
  <h5 onClick={() => navigate(FQI_ROUTE)}>Популярные вопросы</h5>
</div>

<div class='col-2'> 

  <div class='dopolni1'>СЛЕДИТЕ ЗА НАМИ</div>
  <h5>Вконтакте</h5>
  <h5>Телеграмм</h5>
  <h5>Инстаграмм</h5>
  <h5>Тикток</h5>
</div>
</div> 
</div>

</div> 
<div class='accord'>


<div class='col-12 bord'>


<div class='row widt'>

<div class='col-12'>
   <div id='text_2'>
      Будьте первыми ,кто узнает о новой коллекции.
   </div>
   

</div>
<div class='display_flex '>
<div class='display_flex mt-28 '>
<input type="email" id="inputPassword5"  placeholder="Email" class="form-control form_c in-put1" aria-labelledby="passwordHelpBlock"/>
<div id='but_email'>
        <div class='display_Flex'>
        Подписаться
        </div>
        
    </div>
</div>
</div>

</div>



</div>
<div class=''>
<div class="accordion-list ul1">
                    
            <li1 class='li1'>
            <div class='hr1 hr2'><h3>О НАС</h3></div>
              <div class="answer">
                <div class='p1'>Концепция TSB</div>
                <div class='p1'>Наш блог</div>
              </div>
            </li1>

            <li1 class='li1'>
            <div class='hr1'><h3>КЛИЕНТСКИЙ СЕРВИС</h3></div>
              <div class="answer">
              <div class='p1'>Условия доставки</div>
              <div class='p1'>Способы оплаты</div>
              <div class='p1'>Условия возврата</div>
              </div>
            </li1>

            <li1  class='li1'>
              <div class='hr1'><h3>НУЖНА ПОМОЩЬ?</h3></div>
              <div class="answer">
              <div class='p1'>Связаться с нами</div>
              
              </div>
            </li1>

            <li1 class='li1'>
              <div class='hr1'><h3>СЛЕДИТЕ ЗА НАМИ</h3></div>
              <div class="answer">
              <div class='p1'>Вконтакте</div>
              <div class='p1'>Телеграмм</div>
              <div class='p1'>Инстаграмм</div>
              <div class='p1'p>Тикток</div>
              </div>
            </li1>
          </div>
          </div>
          </div>
<div class="horisontal-line" ></div>

<div class="row mt-5 widt">
<div class="col-md-12 text-center">
    <p>
        
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Made with <i class="fa fa-heart-o" aria-hidden="true"></i> by, distributed by ThemeWagon

    </p>
</div>
</div>


</div>



  
       
  




        
    
   

  
  

    )}



  

export default NavBar

