

var graph = document.querySelector('.graph');


function init() {

  var higher = 0; 

  for (var i = 0; i < data.length; i++) {
    
    if (higher < data[i].amount) {
      
      let elem = graph.querySelector('.higher');
      
      if (elem) {
      
        elem.classList.remove('higher');
      
        elem.classList.add('bar');
      
      }
      
      higher = data[i].amount;
      
      graph.innerHTML +=  '<div class="bar-cols">'+
                            '<div class="price">$'+data[i].amount+'</div>'+
                            '<span class="arrow"></span>'+
                            '<div class="higher" style="--height :'+data[i].amount*.7+'%; --graphWidth:'+(graph.offsetWidth/data.length-40)+'px;"></div>'+
                            '<div class="lab">'+data[i].day+'</div>'+
                          '</div>';
    }else{
    
      graph.innerHTML +=  '<div class="bar-cols">'+
                            '<div class="price">$'+data[i].amount+'</div>'+
                            '<span class="arrow"></span>'+
                            '<div class="bar" style="--height :'+data[i].amount*.7+'%; --graphWidth:'+(graph.offsetWidth/data.length-40)+'px;"></div>'+
                            '<div class="lab">'+data[i].day+'</div>'+
                          '</div>';
    }
  }
}

window.onload = init();
