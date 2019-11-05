$(function () {
  let editar = false;
  obtenerFotoPerfil();
  actualizar();
  insertarExp();
  mostrarExp();
  editarExperiencia();
  actualizarDescripcion();
  monstrarCurriculum();
  eliminarExperiencia();
  agregarFotoPerfil();

  //$('#subirFoto').modal('show');
  var archivoValidado = false;


 $('#archivoCurriculum').change(function(evento){
  let archivo = evento.target.files[0];
  if(archivo.size > 10485760){
    archivoValidado = false;
    alert('Tamaño del archivo:' + returnFileSize(archivo.size) +'\nEl archivo no puede superar los 10MB');
  }else{
    archivoValidado = true;
  }
  console.log(archivoValidado);
 });
 


  function actualizar() {
    $("#btnDatos").click(function (e) {
      
    var form;
    
    form = new FormData(document.getElementById("formularioTarea"));

    if(!archivoValidado){
      form.delete('curriculum');
    }

      if ($.trim(nombre).length > 0) {
        $.ajax({
          method: 'POST',
          url: 'includes/datosTrabajador.php',
          dataType: 'html',
          data: form,
          cache: false,
          contentType: false,
          processData: false,
          success: function (response) {
            console.log(response);
            if (response === 'exito') {
              alert({
                title: "Datos actualizados",
                text: "Sus datos han sido actualizados",
                icon: "success",
                button: "Continuar",
              });
            }
          }
        });
      }
    
    });
  }

  function insertarExp() {
    $("#guardar").click(function (e) {

      let form = $("#formularioExperiencia").serialize();
     
      console.log(form);
      if ($.trim(expEmpresa).length > 0 && $.trim(expPais).length > 0 && $.trim(expSector).length > 0 &&
        $.trim(expArea).length > 0 && $.trim(expLabor).length > 0 && $.trim(expFechaIni).length > 0 && $.trim(expFechaFin).length > 0) {
          let direccion = editar === false ? "includes/insertarExp.php" : "includes/actualizacionExperiencia.php";
          console.log(direccion)
        $.ajax({
          method: 'POST',
          url: direccion,
          data: form,
          success: function (response) {
            mostrarExp();
            console.log(response)
          }
        });
      }

      e.preventDefault();
      $("#formularioExperiencia").trigger("reset");
    });
  }

  function mostrarExp() {
    $.ajax
      ({
        url: "includes/mostrarExp.php",
        type: 'GET',
        success: function (response) {
          let experiencia = JSON.parse(response);
          let plantilla = "";
          experiencia.forEach
            (
              experiencia => {
                plantilla +=
                  //le asignamos un atributo para encontrar el ID
                  `
              
                <div class="card text-white bg-info mb-3 mx-auto mt-4" style="max-width: 18rem;">
                <div class="card-header">${experiencia.expEmpresa}</div>
                <div class="card-body">
                  <h5 class="card-title">${experiencia.expPais}</h5>
                  <h5 class="card-title">${experiencia.expSector}</h5>
                  <h5 class="card-title">${experiencia.expArea}</h5>
                  <p class="card-text">${experiencia.expLabor}.</p>
                  <div class="row">

                  <div class="col-md-6">
                  <button type="button" class="btn btn-light editar-experiencia" value="${experiencia.idexp}" data-toggle="modal" data-target="#exampleModal">
                  Modificar
                  </button>
                  </div>

                  <div class="col-md-6">
                  <button type="button" class="btn btn-danger eliminar-exp" value="${experiencia.idexp}">Eliminar</button>
                  </div>
                  </div>
                </div>
              </div>
                
                    `;
              }
            )
          $("#experiencia").html(plantilla);
        }
      });
  }

  function actualizarDescripcion()
  {
    $("#btnDescripcion").click(function(e)
    {
      let form = $("#formularioDescripcion").serialize();
      console.log(form);
      if($.trim(descripcion).length > 0 )
      {
        $.ajax(
          {
            url: 'includes/actualizarDescripcion.php',
            method: 'POST',
            data: form,
            success: function (response) {
              if (response === 'exito') {
                swal({
                  title: "Descripción actualizada",
                  text: "Su descripción ha sido actualizada",
                  icon: "success",
                  button: "Continuar",
                });
              }
            }   
          }
        )
      }
      e.preventDefault();
      
    }
    )
  }

  function eliminarExperiencia()
  {
    $(document).on("click", ".eliminar-exp", function()
    {
        //obtiene el boton que fue clickeado "eliminar-tarea"
        //el boton es un arreglo que esta en la posicion 0 por eso se selecciona
        let elemento = $(this);
          //encontramos el ID tareas para enviarlo al backend
          let id = $(elemento).attr("value")
          console.log(id);
  
          $.post("includes/eliminarExperiencia.php", {id}, function(response)
          {   
          //     //para que haga de nuevo la peticion al backend y no refresque la pagina
            mostrarExp();
            console.log(response)
          });
  
  
    });
  }

  function editarExperiencia()
    {
        $(document).on("click", ".editar-experiencia", function()
        {
            //obtiene el boton que fue clickeado "eliminar-tarea"
            //el boton es un arreglo que esta en la posicion 0 por eso se selecciona
            let elemento = $(this);
              //encontramos el ID tareas para enviarlo al backend
              let idexp = $(elemento).attr("value")
              console.log(idexp);
      
              $.post("includes/actExperiencia.php", {idexp}, function(response)
             {   
               const experiencia = JSON.parse(response);
               $("#expEmpresa").val(experiencia.expEmpresa);
               $("#expPais").val(experiencia.expPais);
               $("#expSector").val(experiencia.expSector);
               $("#expArea").val(experiencia.expArea);
               $("#expLabor").val(experiencia.expLabor);
               $("#expFechaIni").val(experiencia.expFechaIni);
               $("#expFechaFin").val(experiencia.expFechaFin);
               $("#experienciaID").val(experiencia.idexp)
               editar = true;
               console.log(response)
              
              });
      
      
        });  
    }



});

function monstrarCurriculum(){
  let curriculum = $("#curriculum");
  let direcion = curriculum.attr('direccion');

  curriculum.html(`
    <embed class='mostrar-curriculum' src="${direcion}"></embed>
    `);

}



function returnFileSize(number) {
  if(number < 1024) {
    return number + 'bytes';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + 'KB';
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + 'MB';
  }
}

function actualizarCurriculum(){
  let archivo = document.getElementById('archivoCurriculum');
  archivo.addEventListener('')
	
}

function agregarFotoPerfil(){
  let fotoPerfil = $('.contenedor-foto-perfil');
  agregarOpacidad(fotoPerfil);
  previsualizar();
  subirFoto();
}

function agregarOpacidad(fotoPerfil){

  let textEditar = $('.texto-editar');//div con el texto de Editar que se debe mostrar al colocar el cursor sobre la imagen

  fotoPerfil.hover(function(){
    $(this).css('opacity', 0.5);
    textEditar.css('visibility', 'visible');
  }, function(){
    $(this).css('opacity', 1);
    textEditar.css('visibility', 'hidden');
  });
}

function subirFoto(){
  let form = $('#formFotoPerfil').submit(function(){
    event.preventDefault();
    
    enviarFotoPerfil();
  });
}

function quitarModal(){
  $('#subirFoto').modal('hide');
  $('.modal-backdrop').remove();
}

function previsualizar(){
  $('#formFotoPerfil input[type=file]').change(function(){
    let botonGuardar = $('#botonGuardar');
    console.log(this.files.length);
    if(this.files.length !== 0){
      botonGuardar.prop('disabled', false);
      archivo = event.target.files[0];
    
      $('.visualizadorFotoPerfil').addClass('col-4');
      $('#datosFoto').html(`
        <div>
          Nombre: ${archivo.name}<br/>
          Tamaño: ${returnFileSize(archivo.size)}<br/>
        </div>
      `).addClass('col-8');
      let lector = new FileReader();
      lector.addEventListener('load', previsualizarFotoPerfil);
      lector.readAsDataURL(archivo);
    }else{
      botonGuardar.prop('disabled', true)
    }
  });
}

function previsualizarFotoPerfil(){
  let resultado = event.target.result;

  $('#visualizador').attr('src', resultado);
}

function enviarFotoPerfil(){
  let form = new FormData(document.getElementById('formFotoPerfil'));

  let ajax = $.ajax({
    method: 'POST',
    url: './includes/fotoPerfil.php',
    dataType: 'html',
    data: form,
    cache: false,
    contentType: false,
    processData: false
  });
  
  ajax.done(function(respuesta){
    console.log(respuesta);
    if(respuesta === 'exito'){
      obtenerFotoPerfil();
      quitarModal();
    }
  });

  ajax.fail(function(error){
    console.log(error);
  });

}

function obtenerFotoPerfil(){
  let ajax = $.ajax({
    url: './includes/fotoPerfil.php?obtenerFotoPerfil=true'});

  ajax.done(function(resultado){
    $('#fotoPerfil').attr({'src':resultado, height: '144px', width: '144px'});
  })
  ajax.fail(function(error){
    alert(error);
  })
}