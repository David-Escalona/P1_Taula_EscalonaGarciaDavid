console.log("hola")

const arrayPartidas = [
	{
		avatar: 'https://pbs.twimg.com/media/ELguppVWsAAsjV0.jpg',
		nick: 'Messi',
		puntos: 100,
		fecha: '20/4/2020'
	},
	{
		avatar: 'https://pbs.twimg.com/media/EO9LEfcWsAAJ0ia.jpg',
		nick: 'Cristiano',
		puntos: 1000,
		fecha: '20/4/2021'
	},
	{
		avatar: 'https://www.fpllefia.com/images/imagenes/profesores/foto2_carlos.jpg',
		nick: 'Neymar',
		puntos: 10000,
		fecha: '20/4/2022'
	}
]

function pintaTabla(arrayPartidas){

    let inyectarPartidas = `
    <h2 class="text-center text-light">Partidas</h2>
		<div class="input-group mb-3">
			<input
				type="text"
				class="form-control"
				placeholder="Buscador"
				aria-label="Buscador"
				aria-describedby="button-addon2"/>
			<button
				class="btn btn-outline-secondary"
				type="button"
				id="button-addon2">
				<i class="bi bi-x-lg"></i>
			</button>
		</div>
			<table class="table table-dark">
				<theader>
					<tr>
						<td></td>
						<td>Nick <i class="bi bi-arrow-up-square"></i></td>
						<td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
						<td>Fecha <i class="bi bi-arrow-up-square"></i></td>
					</tr>
				</theader>
				<tbody>
					`
					inyectarPartidas+= ``
					arrayPartidas.forEach(element => {
						inyectarPartidas+=`
						<tr>
							<td><img src="${element.avatar}" alt="Avatar"></td>
							<td>${element.nick}</td>
							<td>${element.puntos}</td>
							<td>${element.fecha}</td>
						</tr>
						`});

					inyectarPartidas+=`
				</tbody>
		<tfoot></tfoot>
	</table>
    `
    document.querySelector("#partidas").innerHTML = inyectarPartidas;
    console.log(inyectarPartidas)
}

function pintaRanking(arrayPartidas){

    const rankingjava = document.querySelector("#ranking")

    const inyectarRanking = `
    <h2 class="text-center text-light">Ranking</h2>
	<table class="table table-dark align-middle">
		<theader>
			<tr class="bg-dark">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</theader>
		<tbody>
			<tr>
				<td class="fs-2">1</td>
				<td><img src="" alt="avatar" /></td>
				<td>ANDER</td>
				<td>1255</td>
			</tr>
			<tr>
				<td class="fs-2">2</td>
				<td><img src="" alt="avatar" /></td>
				<td>ANDER</td>
				<td>1255</td>
			</tr>
			<tr>
				<td class="fs-2">3</td>
				<td><img src="" alt="avatar" /></td>
				<td>ANDER</td>
				<td>1255</td>
			</tr>
		</tbody>
		<tfoot></tfoot>
	</table>
    `

    inyectarRanking.innerHTML = pintaRanking;
    console.log(inyectarRanking)
}



console.log(arrayPartidas)

const datosEjemploPartidas = {
	avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPmwg9pnJ3qghB2udnPriIIavIKisV1rLSA&usqp=CAU',
	nick: 'Alfredito',
	puntos: 100,
	fecha: '20/4/2020'
}

function insertarNuevaPartida(arrayPartidas){
	console.log("Guardando Partidas")
	arrayPartidas.push(datosEjemploPartidas)
	console.log(datosEjemploPartidas)
}

function pintaDatosPartida(arrayPartidas){
	console.log("Recibiendo Partidas")
	arrayPartidas.innerHTML = pintaDatosPartida
	console.log(arrayPartidas)	
	
	if(confirm() == true){
		insertarNuevaPartida(arrayPartidas)
		pintaTabla(arrayPartidas)
	}else{
		pintaTabla(arrayPartidas)
	}

	const nuevoArray = []

	nuevoArray.push(arrayPartidas)

	console.log(nuevoArray)

}

pintaDatosPartida(arrayPartidas)
