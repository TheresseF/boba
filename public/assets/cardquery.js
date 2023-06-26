$(document).ready(function () {
    // card-query-page
    $('#ViewButton').click(function () {
        window.location.href = '/LogIn';
    });

    $('#arrowIcon2').click(function () {
        window.location.href = '/cardquery';
    });

    $('#Activate').click(function () {
        window.location.href = '/ActivateCard';
    });

    $('#LogIn').click(function () {
        window.location.href = '/LogIn';
    });

    $('#ActiveSub').click(function () {
        window.location.href = '/cardquery';
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