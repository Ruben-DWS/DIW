export function eliminarFormularioClub() {
    const div = document.createElement('div');
    div.classList.add('container', 'd-flex', 'justify-content-center', 'align-items-center', 'vh-100');

    const formulario = `
        <div class="card bg-dark text-light shadow-lg p-4" style="width: 600px; background-color: rgba(0, 0, 0, 0.7); border-radius: 10px;">
            <div class="card-body">
                <h2 class="card-title text-center mb-4" style="font-weight: bold; text-transform: uppercase; font-size: 1.5rem;">Eliminar Club</h2>
                <form id="deleteClubForm">
                    <div class="mb-3">
                        <label for="alias" class="form-label"><i class="fa-solid fa-id-card me-2"></i> Alias del Club:</label>
                        <input type="text" id="alias" name="alias" class="form-control bg-light text-dark" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label"><i class="fa-solid fa-lock me-2"></i> Contraseña:</label>
                        <input type="password" id="password" name="password" class="form-control bg-light text-dark" required>
                    </div>
                    <button type="submit" class="btn w-100 mt-3" style="background-color: #ffbd59; color: black; font-weight: bold;">Eliminar Club</button>
                </form>
            </div>
        </div>
    `;

    div.innerHTML = formulario;

    return div;
}
export function imgFondoEliminarClub() {
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

function imgFondo() {
    const img = document.createElement('img');
    img.id = 'fondo';
    img.src = "./img/harley-davidson.jpg";
    img.alt = "Foto sobre un motor de moto en blanco y negro";
    img.classList.add('img-fluid');

    return img;
}
