$(document).ready(function() {
    $('#cardQueryButton').click(function() {
      window.location.href = '/card_query';
    });
  
    $('#addOrderButton').click(function() {
      window.location.href = '/order';
    });
  
    $('#arrowIcon').click(function() {
      window.location.href = '/';
    });
  
    $('#beverages24').click(function() {
      window.location.href = '/';
    });
  
    $('#bOBASTICText').click(function() {
      window.location.href = '/';
    });
  
    $('#popuporderText').click(function() {
      window.location.href = '/popuporder-button-click';
    });
    $('#ViewButton').click(function(){
      window.location.href ='/LogIn';
    });
    var frameButton = document.getElementById("frameButton");
    if (frameButton) {
      frameButton.addEventListener("click", function () {
        var popup = document.getElementById("cASHPAYMENTContainer");
        if (!popup) return;
        var popupStyle = popup.style;
        if (popupStyle) {
          popupStyle.display = "flex";
          popupStyle.zIndex = 100;
          popupStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
          popupStyle.alignItems = "center";
          popupStyle.justifyContent = "center";
        }
        popup.setAttribute("closable", "");
    
        var onClick =
          popup.onClick ||
          function (e) {
            if (e.target === popup && popup.hasAttribute("closable")) {
              popupStyle.display = "none";
            }
          };
        popup.addEventListener("click", onClick);
      });
    }
  });