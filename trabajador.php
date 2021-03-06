<?php include("includes/headerTrabajador.php") ?>

<main class="container mx-auto">
	<div class="row">
		<section class="col-12 col-md-9 order-1 order-md-0">
			<div id="publicaciones" class="mt-4">

			</div>
		</section>

		<aside class="col-12 col-md-3 mt-4">
			<div class="card">
				<div class="card-header bg-dark">
					<h3>Buscar</h3>
				</div>
				<div class="card-body">
					<form id="formularioBuscar">
						<div class="form-group row">
							<input type="search" name="buscar" class="form-control col-8" id="buscar" placeholder="buscar">
							<button type="button" class="btn btn-primary col-4" id="iniciarBusqueda">Buscar</button>
						</div>
					</form>
				</div>
			</div>

			<div class="accordion" id="filtroCategoria">
				<div class="card">
					<div class="card-header bg-dark" id="categoriaHeader">
						<h2 class="mb-0">
							<button class="btn btn-link text-light" type="button" data-toggle="collapse" data-target="#categorias">Categorias</button>
						</h2>
					</div>

					<div id="categorias" class="collapse" data-parent="#filtroCategoria">
						<div class="card-body text-break">
							
								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria1" name="chkCategoria" form="formularioBuscar" value="Administración">
 									<label class="custom-control-label" for="categoria1">Administración</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria2" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria2">Almacén</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria3" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria3">Atención al Cliente</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria4" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria4">Compras</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria5" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria5">Construcción</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria6" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria6">Contabilidad</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria7" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria7">Gerencia</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria8" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria8">Diseño</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria9" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria9">Enseñanza</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria10" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria10">Turismo</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria11" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria11">Informática</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria12" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria12">Ingeniería</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria13" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria13">Asesorias</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria14" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria14">Reparación</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria15" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria15">Publicidad</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria16" name="chkCategoria"  form="formularioBuscar">
 									<label class="custom-control-label" for="categoria16">Recursos Humanos</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="categoria17" name="chkCategoria"  form="formularioBuscar" value="Ventas">
 									<label class="custom-control-label" for="categoria17">Ventas</label>
								</div>


						</div>
					</div>
				</div>
			</div>

			<div class="accordion" id="filtroSueldo">
				<div class="card">
					<div class="card-header bg-dark" id="SueldoHeader">
						<h2 class="mb-0">
							<button class="btn btn-link text-light" type="button" data-toggle="collapse" data-target="#Sueldo">Sueldo</button>
						</h2>
					</div>

					<div id="Sueldo" class="collapse" data-parent="#filtroSueldo">
						<div class="card-body">
							
							<div class="custom-control custom-checkbox">
  								<input type="checkbox" class="custom-control-input" id="sueldo1" name="chkSueldo" form="formularioBuscar" value="1">
 								<label class="custom-control-label" for="sueldo1">0 - 50$</label>
							</div>

							<div class="custom-control custom-checkbox">
  								<input type="checkbox" class="custom-control-input" id="sueldo2" name="chkSueldo" form="formularioBuscar" value="2">
 								<label class="custom-control-label" for="sueldo2">50$ - 100$</label>
							</div>

							<div class="custom-control custom-checkbox">
  								<input type="checkbox" class="custom-control-input" id="sueldo3" name=chkSueldo form="formularioBuscar" value="3">
 								<label class="custom-control-label" for="sueldo3">> 100$</label>
							</div>

						</div>
					</div>
				</div>
			</div>

			<div class="accordion" id="filtroUbicacion">
				<div class="card">
					<div class="card-header bg-dark" id="ubicacionHeader">
						<h2 class="mb-0">
							<button class="btn btn-link text-light" type="button" data-toggle="collapse" data-target="#ubicacion">Ubicación</button>
						</h2>
					</div>

					<div id="ubicacion" class="collapse" data-parent="#filtroUbicacion">
						<div class="card-body">
							<form id="">
								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="ubicacion1" name="chkUbicacion" form="formularioBuscar" value="Maracaibo">
 									<label class="custom-control-label" for="ubicacion1" >Maracaibo</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="ubicacion2" name="chkUbicacion" form="formularioBuscar" value="Cabimas">
 									<label class="custom-control-label" for="ubicacion2" value="Cabimas">Cabimas</label>
								</div>

								<div class="custom-control custom-checkbox">
  									<input type="checkbox" class="custom-control-input" id="ubicacion3" name="chkUbicacion">
 									<label class="custom-control-label" for="ubicacion3">Maracay</label>
								</div>

							</form>
						</div>
					</div>
				</div>
			</div>
		</aside>
	</div>

</main>

<div id="paginacion"></div>
<?php include("includes/footer.php") ?>
<script src="js/mostrar.js"></script>
<!--<script src="js/busqueda.js"></script>-->
<script src="js/direcciones.js"></script>

