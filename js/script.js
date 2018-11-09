$(function () {
     alert('ola')
		carregarEventos()
	
		});
		
		function irPara(tela){

			$(".clearfix").hide();
			$("#div_"+ tela).show();

		}
		
		
function carregarEventos() {
    alert('car eve');
    $.ajax({
        type: "GET",
        url: "https://querocaravanasapi.azurewebsites.net/api/Evento",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: {},
        beforeSend: function () {
           //load
        },
        success: function (response) {           
            var d = response;
			console.log(d);
            var html = "";
            d.forEach(item => {
                html += `<div class="card">
                          <div class="body">
							<b style="font-size:20px;">${item.titulo}</b><br>
                            ${item.descricao}<br><br>
							<b>Data</b>: ${item.data}<br>
							<button type="button" onclick="irPara('detalhes')" class="btn btn-block btn-lg btn-info waves-effect">VER</button>
                        </div>
                      </div>`;
            });
            $("#divEventos").html(html).show();
        },
        failure: function (response) {            
            alert('fail');
        },
        error: function (response) {
             alert('error');
        }
    });
}
	