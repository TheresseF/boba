$(document).ready(function() {
  
  //navigation
  $('#beverages24').click(function() {
    window.location.href = '/';
  });

  $('#bOBASTICText').click(function() {
    window.location.href = '/';
  });

  $('#arrowIcon').click(function() {
    window.location.href = '/';
  });

  //homepage-buttons
  $('#cardQueryButton').click(function() {
    window.location.href = '/cardquery';
  });

  $('#addOrderButton').click(function() {
    window.location.href = '/order';
  });

  //card-query-page
  $('#ViewButton').click(function(){
    window.location.href ='/LogIn';
  })

  $('#arrowIcon2').click(function(){
    window.location.href ='/cardquery';
  })

  $('#Activate').click(function(){
    window.location.href ='/ActivateCard';
  })
  $('#LogIn').click(function(){
    window.location.href ='/LogIn';
  })
  $('#ActiveSub').click(function(){
    window.location.href ='/cardquery';
  })
  
  //order-page
  $('#popuporderText').click(function() {
    window.location.href = '/popuporder-button-click';
  });

  $('#PayButton').click(function(){
    window.location.href ='/Payment';
  })

  $('#ConButton').click(function(){
    window.location.href ='/CheckOut';
  })

  $('#Exitbutton').click(function(){
    window.location.href ='/';
  })

  $('#Backbutton').click(function(){
    window.location.href ='/order';
  })
  $('#Back').click(function(){
    window.location.href ='/order';
  })


});