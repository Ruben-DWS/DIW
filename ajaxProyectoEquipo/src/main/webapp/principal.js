export function contenidoPrincipal() {
    // Crea un elemento div para contener el contenido
    const elemento = document.createElement('div');

    const contenido = `
    <!-- Fondo -->
        <div class="container-fluid p-0">
            <div class="col">
                <img src="./img/harley-davidson.jpg" alt="Imagen de una moto de harley-davidson en blanco y negro"
                    class="img-fluid short-img">
            </div>
        </div>
        <!-- Carrusel -->
        <div id="carouselExample" class="carousel slide mt-4" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-12 col-md-3 col-lg-3">
                            <img src="./img/Dm 200.jpg" class="img-fluid" alt="Imagen 1">
                        </div>
                        <div class="col-12 col-md-3 col-lg-3">
                            <img src="./img/carrera.jpg" class="img-fluid" alt="Imagen 2">
                        </div>
                        <div class="col-12 col-md-3 col-lg-3">
                            <img src="./img/Motos.jpg" class="img-fluid" alt="Imagen 3">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-12 col-md-4 col-lg-3">
                            <img src="./img/biker.jpg" class="img-fluid" alt="Imagen 4">
                        </div>
                        <div class="col-12 col-md-4 col-lg-3">
                            <img src="./img/motorcycle-.jpg" class="img-fluid" alt="Imagen 5">
                        </div>
                        <div class="col-12 col-md-4 col-lg-3">
                            <img src="./img/vintague.jpg" class="img-fluid" alt="Imagen 6">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Indicadores -->
            <div class="carousel-indicators-container">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                </div>
            </div>
        </div>
    `;

    // Asigna el contenido HTML al elemento
    elemento.innerHTML = contenido;

    return elemento;
}
