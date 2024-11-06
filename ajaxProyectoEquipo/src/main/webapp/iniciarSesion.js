// iniciarSesion.js
export function fondoIniciarSesion() {
    const divContenedor = document.createElement('div');
    divContenedor.classList.add('container-fluid', 'p-0');

    const divCol = document.createElement('div');
    divCol.className = 'col';

    divContenedor.appendChild(divCol);

    const img = imgFondo();
    divCol.appendChild(img);

    img.onload = function () {
        img.classList.add('img-loaded');
    };
    return divContenedor;
}

export function formularioInicioSesion() {
    const div = document.createElement('div');
    div.classList.add('container', 'd-flex', 'justify-content-center', 'align-items-center', 'vh-100');
    div.innerHTML = `
         <div class="card bg-dark text-light" style="width: 400px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);">
        <div class="card-body">
            <h2 class="card-title text-center mb-4">Iniciar Sesión club</h2>
            <form id="loginForm">
                <div class="mb-3">
                    <label for="username" class="form-label">Alias: </label>
                    <input type="text" id="alias" name="username" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña:</label>
                    <input type="password" id="password" name="password" class="form-control" required>
                </div>
                <button type="submit" class="btn w-100" style="background-color: #ffbd59; color: black; border-radius: 5px;">Iniciar Sesión</button>
            </form>                   
        </div>
    </div>
    `;



    return div;
}

function imgFondo() {
    const img = document.createElement('img');
    img.id = 'fondo';
    img.src = "./img/fondo registro.jpg";
    img.alt = "Foto sobre un motor de moto en blanco y negro";
    img.classList.add('img-fluid');

    return img;
}
