$(document).on("click", "#submit", (e) => {
            e.preventDefault();
            var name = $("#inputname").val();
            var num = $("#inputphoneNumber").val();
            var email = $("#email").val();
            var UID = $("#uniqueID").val();
            var data = name + ',' + num + ',' + email + ',' + UID;
            $.post('localhost:3000/reservation', data, (res) => {

                console.log(res);

            }).fail((x) => {

                alert("shit fucked up");

            });
        }