$(function () {
   console.log("funcionando");
    $("#ingresar").click(function(e){

    
    
        var correo = $("#correo").val();
        var contrasena = $("#contrasena").val();
        datos = 
        {
            correo: correo,
            contrasena: contrasena
        };
    
        
    
        if($.trim(correo).length > 0 && $.trim(contrasena).length > 0)
        {
            $.ajax
            ({ 
                method: 'POST',
                url: 'includes/loginTrabajador.php',
                data: datos,
                success: function(response)
                {
                    $("#ingresar").val("Ingresar");
                    if(response=="1")
                     {
                       $(location).attr('href', 'panelControl.php');
                    }
                    else
                     {
                    $("#resultado")
                    .html
                    ('<div class="alert alert-dismissible alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>ERROR!</strong> Las credenciales son incorrectas.</div>');
                    }

                    console.log(response);
                }
    
            })
        }
       
    });
    
    
    });