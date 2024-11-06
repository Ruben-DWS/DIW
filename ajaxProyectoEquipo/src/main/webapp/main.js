// main.js

import { fondoIniciarSesion, formularioInicioSesion } from "./iniciarSesion.js";
import { formularioRegistroClub, imgFondoRegistroClub} from "./registro.js";
import { contenidoPrincipal } from "./principal.js"; // Importar funciones de la API Mock;
import { eliminarFormularioClub, imgFondoEliminarClub } from "./eliminarClub.js";

const mainContenedor = document.querySelector('#contenedor');




function IniciarSesion() {
    mainContenedor.innerHTML = '';
    const fondo = fondoIniciarSesion();
    const formulario = formularioInicioSesion();

    mainContenedor.appendChild(fondo);
    mainContenedor.appendChild(formulario);

    // Añadir la lógica de inicio de sesión
    const loginForm = formulario.querySelector('#loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('alias').value;
        const password = document.getElementById('password').value;

        // Primero, comprobar si el alias existe
        fetch('http://localhost:3000/club')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la red');
                }
                return response.json();
            })
            .then(club => {
                let usuarioEncontrado = false;

                // Comprobar si el alias y la contraseña coinciden
                club.forEach(club => {
                    if (club.alias === username && club.password === password) {
                        usuarioEncontrado = true;
                    }
                });

                if (usuarioEncontrado) {
                    alert('Inicio de sesión exitoso.');
                    Principal(); // Llama a la función Principal para mostrar el contenido
                } else {
                    alert('Usuario o contraseña incorrectos.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al cargar los datos de usuarios.');
            });
    });
}

function Registro() {
    mainContenedor.innerHTML = '';
    const imgFondo = imgFondoRegistroClub();
    const formulario = formularioRegistroClub();

    mainContenedor.appendChild(imgFondo);
    mainContenedor.appendChild(formulario);

    // Añadir la lógica para el registro
    const registrationForm = formulario.querySelector('#registrationForm');
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const alias = document.getElementById('alias').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const data = {
            fullname,
            alias,
            password
        };

        // Hacer la solicitud a la API para registrar un nuevo usuario
        fetch('http://localhost:3000/club', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.id) { // Suponiendo que el ID se genera automáticamente por el servidor
                alert('Registro exitoso');
                 // Cambia a la vista de inicio de sesión
            } else {
                alert('Error en el registro: ' + result.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error en la solicitud');
        });
    });
}


function Principal() {
    mainContenedor.innerHTML = '';
    const contenido = contenidoPrincipal();
    mainContenedor.appendChild(contenido);
}

function EliminarClub() {
    mainContenedor.innerHTML = '';
    const imgFondo = imgFondoEliminarClub();
    const formulario = eliminarFormularioClub();

    mainContenedor.appendChild(imgFondo);
    mainContenedor.appendChild(formulario);

    // Añadir la lógica para eliminar el club
    const eliminationForm = formulario.querySelector('#deleteClubForm');
    eliminationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const alias = document.getElementById('alias').value;
        const password = document.getElementById('password').value;

        // Primero, comprobar si el alias y la contraseña son correctos
        fetch('http://localhost:3000/club')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar los clubes');
                }
                return response.json();
            })
            .then(clubes => {
                // Buscar el club que coincide con el alias y la contraseña
                const club = clubes.find(club => club.alias === alias && club.password === password);

                if (club) {
                    // Preguntar al usuario si está seguro de eliminar el club
                    const confirmation = window.confirm('¿Está seguro de que desea eliminar este club?');

                    if (confirmation) {
                        // Si el usuario confirma, proceder a eliminar el club
                        return fetch(`http://localhost:3000/club/${club.id}`, { // Asegúrate de que la URL sea correcta
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                    } else {
                        // Si el usuario cancela, simplemente salir de la función
                        alert('Operación cancelada.');
                        return Promise.reject('Operación cancelada.');
                    }
                } else {
                    alert('Alias o contraseña incorrectos.');
                    throw new Error('Alias o contraseña incorrectos.');
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al eliminar el club');
                }
                return response.json();
            })
            .then(data => {
                console.log('Club eliminado:', data);
                alert('Club eliminado exitosamente.');
                // Aquí puedes actualizar la interfaz de usuario o realizar otras acciones
            })
            .catch(error => {
                console.error('Hubo un problema con la solicitud:', error);
                alert('Error: ' + error.message);
            });
    });
}

window.Registro = Registro;
window.IniciarSesion = IniciarSesion;
window.Principal = Principal;
window.EliminarClub = EliminarClub;
