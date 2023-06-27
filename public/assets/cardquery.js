$(document).ready(function () {
    // card-query-page
    $('#arrow-icon').click(function () {
        window.location.href = '/';
      });

    $('#beverages24').click(function() {
        window.location.href = '/';
    });
    
    $('#bOBASTICText').click(function() {
        window.location.href = '/';
    });

    $('#arrow-icon2').click(function () {
        window.location.href = '/card_query';
    });
    
    $('.ViewButton').click(function () {
      window.location.href = '/LogIn';
    });
  
    $('.EditButton').click(function () {
      window.location.href = '/LogIn';
    });
  
    $('#LogIn').click(function () {
      window.location.href = '/LogIn';
    });
  
    $('#ActiveSub').click(function () {
      window.location.href = '/cardquery';
    });

    //Function to handle edit button click event
    $('.EditButton').click(function () {
        const customerId = $(this).data("id");
        // Redirect to the edit page with the customerId as a parameter
        window.location.href = `/edit/${customerId}`;
      });
  
    // Function to handle delete button click event
    $(".cq-delete-btn").on("click", function () {
      const customerId = $(this).data("id");
      const deleteUrl = `/data/${customerId}`;
  
      // Send DELETE request to the server
      $.ajax({
        url: deleteUrl,
        type: "DELETE",
        success: function (response) {
          // Reload the page after successful deletion
          location.reload();
        },
        error: function (xhr, status, error) {
          console.error(error);
        },
      });
    });
  });