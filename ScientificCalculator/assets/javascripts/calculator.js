$(document).ready(function(){


  
  var ScientificCalculator = function (soption1) {
    this.soption1 = soption1;
  };
  
  
  
  ScientificCalculator.prototype.sinOperation = function() {
    var soption1 = this.soption1;
    var result = Math.sin(soption1);
    return result;
  };
  
  ScientificCalculator.prototype.cosOperation = function() {
    var result = Math.cos(this.soption1);
    return result;
  };
  
  ScientificCalculator.prototype.tanOperation = function() {
    var result = Math.tan(this.soption1);
    return result;
  };
  
  ScientificCalculator.prototype.logOperation = function() {
    var result = Math.log(this.soption1);
    return result;
  };
 
  $('#sinbutton').click(function(){
    var soption1 = $("#soption1").val();
    if(soption1===""){ $("#soption1").focus();return false; }
    var scal = new ScientificCalculator(soption1);
    var res = scal.sinOperation();
    $("#sresultval").html(res);
  });
  
 
      $('#cosbutton').click(function(){
    var soption1 = $("#soption1").val();
    if(soption1===""){ $("#soption1").focus();return false; }
    var scal = new ScientificCalculator(soption1);
    var res = scal.cosOperation();
    $("#sresultval").html(res);
  });


      $('#tanbutton').click(function(){


 
    var soption1 = $("#soption1").val();
    if(soption1===""){ $("#soption1").focus();return false; }
    var scal = new ScientificCalculator(soption1);
    var res = scal.tanOperation();
    $("#sresultval").html(res);
  });
  

     $('#logbutton').click(function(){
    var soption1 = $("#soption1").val();
    if(soption1===""){ $("#soption1").focus();return false; }
    var scal = new ScientificCalculator(soption1);
    var res = scal.logOperation();
    $("#sresultval").html(res);
  });
  
  


       $('#clear').click(function(){
		$("#sresultval").empty();
		$("#soption1").val('');
		
	});

});