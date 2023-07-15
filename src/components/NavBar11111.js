import { useEffect} from 'react';
import './one.css'
import './nav.css'
import React from 'react';
import jQuery from 'jquery'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom';
import { FESHION_ROUTE,BASKET_ROUTE ,ADMIN_ROUTE,LOVE_ROUTE} from '../utils/consts';
import { LOGIN_ROUTE} from "../utils/consts";

import {Context} from "../index"
import  { useContext} from 'react';
import jwt_decode from "jwt-decode";
function NavBar() {
  const navigate = useNavigate()
  const{user}= useContext(Context)

var docWidth = document.documentElement.offsetWidth;


var mar = $('.mar')
var float_left = $('.float_left')

const out = async () => {
  localStorage.clear()
  window.location.reload();
}
const click1 = async () => {
  mar.removeClass('white')
  float_left.removeClass('white')
  window.history.replaceState({}, document.title)
  navigate(BASKET_ROUTE)
}




const login = async () => {
  const user_ = localStorage.getItem('token')
    navigate(LOGIN_ROUTE)

}
  useEffect(() => {


    
    var hours = 24; 
      var now = new Date().getTime();
      var setupTime = localStorage.getItem('setupTime');
      if (setupTime == null) {
          localStorage.setItem('setupTime', now)
      } else {
          if(now-setupTime > hours*60*60*10000) {
              localStorage.clear()
              
          }
      }
      
      var cla = $('.height1')
      var home = $('.class')
      var out = $('.out')
      var heart_ = $('.heart_')

    var adminka = $('.adminka_')
    const user_ = localStorage.getItem('token')



    const block = ()=>{
      home.removeClass('display_')
      cla.addClass('display_yes')
      adminka.addClass('display_')
      out.addClass('display_')
      heart_.removeClass('admin_display_on')

    }
    if(user_=== null){
      block()
    }else{
      const user = jwt_decode(user_)
if (user.email ==='amigo111@gmail.com'){
  block()
}else{

  heart_.addClass('admin_display_on')
  home.addClass('display_')
  out.removeClass('display_')
  out.addClass('display_yes')
  cla.addClass('display_')


  if(user.role==="ADMIN"){
  adminka.addClass('display_adm')
  $('.svg1_glav').addClass('svg1_glav_on')
}
}


  
    }
    
  


    var header = $('.header'),

		scrollPrev = 0;

    // window.onload = function() {
    //   header.addClass('black')  //example function call.
    // }


$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

  


  if ( scrolled > 100 ) {
		header.addClass('trans')
    
    
	} else {
    header.removeClass('trans')

	}

	if ( scrolled > 10 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}


	scrollPrev = scrolled;
});





    ;(function($, window, document, undefined) {
      var pluginName = "jqueryAccordionMenu";
      var defaults = {
        speed: 300,
        showDelay: 0,
        hideDelay: 0,
        singleOpen: true,
        clickEffect: true
      };
      
      function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
      }
      
      $.extend(Plugin.prototype, {
        init: function() {
          this.openSubmenu();
          this.submenuIndicators();
          if (defaults.clickEffect) {
            this.addClickEffect();
          }
        },
        openSubmenu: function() {
          $(this.element).children('ul').find('li').bind('click touchstart', function(e) {
            e.stopPropagation();
            e.preventDefault();
            if ($(this).children('.submenu').length > 0) {
              if ($(this).children('.submenu').css('display') == 'none') {
                $(this).children('.submenu').delay(defaults.showDelay).slideDown(defaults.speed);
                $(this).children('.submenu').siblings('a').addClass('submenu-indicator-minus');
                if (defaults.singleOpen) {
                  $(this).siblings().children('.submenu').slideUp(defaults.speed);
                  $(this).siblings().children('.submenu').siblings('a').removeClass('submenu-indicator-minus');
                }
                return false;
              } else {
                $(this).children('.submenu').delay(defaults.hideDelay).slideUp(defaults.speed);
              }
              
              if ($(this).children('.submenu').siblings('a').hasClass('submenu-indicator-minus')) {
                $(this).children('.submenu').siblings('a').removeClass('submenu-indicator-minus');
              }
            }
            window.location.href = $(this).children('a').attr('href');
          })
        },
        submenuIndicators: function() {
          if ($(this.element).find('.submenu').length > 0) {
            $(this.element).find('.submenu').siblings('a').append('<span class="submenu-indicator">+</span>');
          }
        },
        addClickEffect: function() {
          var ink, d, x, y;
          $(this.element).find('a').bind('click touchstart', function(e) {
            $('.ink').remove();
            if ($(this).children('.ink').length === 0) {
              $(this).prepend('<span class="ink"></span>');
            }
            ink = $(this).find('.ink');
            ink.removeClass('animate-ink');
            if (!ink.height() && !ink.width()) {
              d = Math.max($(this).outerWidth(), $(this).outerHeight());
              ink.css({
                height: d,
                width: d
              });
            }
            x = e.pageX - $(this).offset().left - ink.width() / 2;
            y = e.pageY - $(this).offset().top - ink.height() / 2;
            ink.css({
              top: y + 'px',
              left: x + 'px'
            }).addClass('animate-ink');
          })
        }
      });
      $.fn[pluginName] = function(options) {
        this.each(function() {
          if (!$.data(this, 'plugin_' + pluginName)) {
            $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
          }
        });
        return this;
      }
    })(jQuery, window, document);
    
    jQuery('#jquery-accordion-menu').jqueryAccordionMenu();
  


  }, []);


	return(
    <div id='Navup'>

<div class="offcanvas offcanvas-start colo kk2" data-bs-scroll="false" tabindex="-1" id="offcanvasWithBothOptions2" aria-labelledby="offcanvasWithBothOptionsLabel">
<div class="content">
  <div id="jquery-accordion-menu" class="jquery-accordion-menu red">


  

    <div class="jquery-accordion-menu-header" id="form">
    <svg width="40px" height="40px"   data-bs-dismiss="offcanvas" class='cross2' cursor="pointer" aria-label="Закрыть" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16" stroke="#ffffff73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>
      <div class="text_4" >
      TSB
      </div>
     
    </div>
    <ul id="demo-list ">
   
    
      <li class="active"><a  href="/feshion" ><i class="fa fa-home"></i> <div class='home' >Главная </div>   </a></li>

      <li><a href="/"><i class="fa fa-th"></i> <div class='home'>Коллекция </div> </a></li>

      {/* <li><a href="thing"><i class="fa fa-file-image-o"></i> <div class='home'>Образы </div></a></li> */}

      {/* <li><a href="#"><i class="fa fa-cog"></i><div class='home'>Наш блог </div></a>
        <ul class="submenu">
          <li><a href="#">Web Design </a></li>
          <li><a href="#">Hosting </a></li>
          <li><a href="#">Design </a>
            <ul class="submenu">
              <li><a href="#">Graphics </a></li>
              <li><a href="#">Vectors </a></li>
              <li><a href="#">Photoshop </a></li>
              <li><a href="#">Fonts </a></li>
            </ul>
          </li>
          <li><a href="#">Consulting </a></li>
        </ul>
      </li> */}


      <li><a href="/basket"><i class="fa fa-suitcase"></i> <div class='home'>Корзина </div></a></li>
      <li><a href="/love"><i class="fa fa-heart"></i><div class='home'>Любимые </div> </a>

      </li>
      <li><a href="/order"><i class="fa fa-user"></i><div class='home'>Заказы </div> </a></li>
      <li><a href="/FQI"><i class="fa fa-envelope"></i> <div class='home'>FQI </div></a></li>
    </ul>
    <div class="jquery-accordion-menu-footer">
      TSB
    </div>
  </div>
</div>
  </div> 
<div class='header'>
  
    <div id="navbar">

<div class='container10 '>

  <div class='row flex p_p'>


  <div class='col-12 col-sm-4 col-md-4 top1'> 
  <svg   xmlns="http://www.w3.org/2000/svg"data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions2" aria-controls="offcanvasWithBothOptions"   width="45" height="45" fill="currentColor" color='white' class="bi bi-list float_left mar" cursor='pointer' viewBox="0 0 16 16" >
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
   
 
  </div>

  
        {/* class='float_left'  */}
        <div class='col-12 col-sm-4 col-md-4'> 
        <div class='float_left' onClick={() => navigate(FESHION_ROUTE)} >TSB</div>
        </div>

        {/* <h3 class='float_left1 ml'>О нас </h3>
        <h3 class='float_left1' onClick = {()=> navigate(TSB_ROUTE)} >Коллекция</h3>
        <h3 class='float_left1'>Образы </h3>
        <h3 class='float_left1'>Подарки</h3>
        <h3 class='float_left1' onClick = {()=> navigate(STYLE_ROUTE)}>FAQ</h3> */}

        {/* class='float_right mt3' */}

        <div class='col-12 col-sm-4 col-md-4 mleft top '> 
       
        <svg width="30" height="23" class='float_left2 out ' onClick={out}viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12L13 12"stroke-width="1.656" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"stroke-width="1.656" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19" stroke-width="1.656" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 class="bi bi-suit-heart-fill mar  mar_rig float_left2 height adminka_" onClick={() => navigate(ADMIN_ROUTE)} cursor='pointer' width="30" height="30"  viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M2430 5114 c-14 -2 -56 -9 -95 -15 -96 -16 -256 -69 -351 -117 -404
-206 -666 -600 -700 -1051 l-7 -91 -351 0 c-401 0 -442 -5 -576 -71 -117 -58
-221 -162 -279 -279 -75 -153 -72 -89 -69 -1408 l3 -1177 28 -100 c105 -384
388 -666 774 -773 l98 -27 1610 -3 c1441 -3 1620 -1 1708 13 420 69 749 370
865 792 l27 98 3 1177 c3 1319 6 1255 -69 1408 -58 117 -162 221 -279 279
-134 66 -175 71 -576 71 l-351 0 -7 91 c-19 249 -108 485 -260 689 -48 64
-180 192 -257 250 -139 103 -327 187 -509 226 -71 15 -327 27 -380 18z m300
-438 c94 -20 215 -69 290 -118 93 -59 226 -199 277 -289 59 -104 103 -241 110
-345 l6 -84 -853 0 -853 0 6 84 c7 104 51 241 110 345 51 90 184 230 277 289
73 48 196 98 285 117 80 18 264 18 345 1z m-1450 -1499 c0 -231 0 -233 26
-286 66 -132 229 -157 334 -52 64 64 70 95 70 355 l0 216 850 0 850 0 0 -216
c0 -260 6 -291 70 -355 105 -105 268 -79 334 52 26 53 26 54 26 286 l0 234
358 -3 358 -3 37 -25 c21 -14 50 -43 65 -64 l27 -39 0 -1176 0 -1176 -26 -67
c-77 -197 -226 -341 -414 -401 l-70 -22 -1615 0 -1615 0 -70 22 c-188 60 -337
204 -414 401 l-26 67 0 1177 0 1176 31 43 c18 24 51 54 75 66 41 23 48 23 391
23 l348 0 0 -233z"/>
</g>
</svg>



<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 class="bi bi-suit-heart-fill mar  mar_rig float_left2 height" onClick={() =>click1() } href='/' cursor='pointer' width="30" height="30"  viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M2430 5114 c-14 -2 -56 -9 -95 -15 -96 -16 -256 -69 -351 -117 -404
-206 -666 -600 -700 -1051 l-7 -91 -351 0 c-401 0 -442 -5 -576 -71 -117 -58
-221 -162 -279 -279 -75 -153 -72 -89 -69 -1408 l3 -1177 28 -100 c105 -384
388 -666 774 -773 l98 -27 1610 -3 c1441 -3 1620 -1 1708 13 420 69 749 370
865 792 l27 98 3 1177 c3 1319 6 1255 -69 1408 -58 117 -162 221 -279 279
-134 66 -175 71 -576 71 l-351 0 -7 91 c-19 249 -108 485 -260 689 -48 64
-180 192 -257 250 -139 103 -327 187 -509 226 -71 15 -327 27 -380 18z m300
-438 c94 -20 215 -69 290 -118 93 -59 226 -199 277 -289 59 -104 103 -241 110
-345 l6 -84 -853 0 -853 0 6 84 c7 104 51 241 110 345 51 90 184 230 277 289
73 48 196 98 285 117 80 18 264 18 345 1z m-1450 -1499 c0 -231 0 -233 26
-286 66 -132 229 -157 334 -52 64 64 70 95 70 355 l0 216 850 0 850 0 0 -216
c0 -260 6 -291 70 -355 105 -105 268 -79 334 52 26 53 26 54 26 286 l0 234
358 -3 358 -3 37 -25 c21 -14 50 -43 65 -64 l27 -39 0 -1176 0 -1176 -26 -67
c-77 -197 -226 -341 -414 -401 l-70 -22 -1615 0 -1615 0 -70 22 c-188 60 -337
204 -414 401 l-26 67 0 1177 0 1176 31 43 c18 24 51 54 75 66 41 23 48 23 391
23 l348 0 0 -233z"/>
</g>
</svg>


        
        
         <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  class="bi bi-suit-heart-fill mar_rig mar float_left2 height heart_"onClick={() => navigate(LOVE_ROUTE)} cursor='pointer' width="30" height="30"  viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
<path d="M1197 4690 c-588 -107 -1038 -545 -1169 -1138 -30 -132 -32 -469 -5
-607 79 -395 265 -771 603 -1215 294 -387 736 -837 1226 -1248 222 -187 431
-265 708 -265 210 -1 378 44 550 148 165 100 676 564 972 883 597 642 910
1166 1015 1697 25 129 25 466 0 585 -125 596 -553 1027 -1147 1156 -123 27
-352 25 -477 -4 -203 -48 -377 -127 -535 -244 -133 -99 -242 -219 -365 -404
-13 -19 -13 -19 -25 0 -168 251 -329 404 -548 520 -251 132 -549 182 -803 136z
m325 -424 c399 -77 720 -393 803 -792 9 -43 20 -139 24 -211 7 -126 9 -135 37
-175 86 -123 262 -123 348 0 28 40 30 49 37 175 4 72 15 168 24 211 84 404
409 720 819 796 246 46 567 -72 780 -286 123 -122 220 -289 267 -459 33 -122
38 -383 10 -521 -76 -369 -314 -787 -719 -1262 -226 -265 -785 -805 -1007
-973 -194 -147 -451 -171 -666 -63 -124 62 -395 298 -749 653 -346 347 -517
550 -721 854 -191 287 -310 547 -360 790 -28 140 -24 400 10 522 79 285 271
520 531 650 191 95 359 124 532 91z"/>
</g>
</svg>      
        
{/*          
data-bs-toggle="offcanvas" 
data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"  */}
<svg width="30" height="30"
class=" mar_rig float_left2 height1 mar class account" cursor='pointer'onClick={() => login()} viewBox="-2.4 -2.4 28.80 28.80" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<defs>



</defs>

<circle class="cls-1" cx="12" cy="7.25" r="5.73"/>

<path

 class="cls-1" d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"/>

</g>

</svg>


         </div>
         </div>
        
         


{/* <div class="offcanvas left offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions1" aria-labelledby="offcanvasWithBothOptionsLabel">


<form class='colo'>

  <h6 class='sign mt-2'>JOIN</h6>

  <div class="mb-3">
    <input type="email" placeholder="Логин"  onChange={ e => setEmail(e.target.value)} class="form-control in-put" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>

  <div class="mb-3">
    <input type="password" placeholder="Пароль"  onChange={ e => setEmail(e.target.value)} class="form-control in-put" id="exampleInputEmail2" aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <input type="email" placeholder="Промокод" class="form-control in-put" id="exampleInputEmail2" aria-describedby="emailHelp"/>
  </div>



  <button type="submit" class="but0 sign2"  onClick={click} >Зарегистрироваться</button>

  <h6 class='sign registrations' onClick={validateSelectizeDropdown('#2')} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">SIGN IN</h6>
 
</form>
  

</div> */}
{/* <div class="offcanvas left offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions3" aria-labelledby="offcanvasWithBothOptionsLabel">

<h6 class='sign text-center mt-3'>Your Basket</h6>
  

</div> */}

        
        </div>
        </div>

        </div>
  </div>
  
  

    )

}

  

export default NavBar

