// MOSTRAR ALERTAS

function mostrarAlerta(elemento, mensaje) {

    if (!elemento) return;

    elemento.textContent = mensaje;
    elemento.classList.add("show");

}


// OCULTAR ALERTAS

function ocultarAlerta(elemento) {

    if (!elemento) return;

    elemento.textContent = "";
    elemento.classList.remove("show");

}


// VALIDACIÓN DEL FORMULARIO DE REGISTRO

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formRegistro");

    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            const error = document.getElementById("mensajeError");
            const exito = document.getElementById("mensajeExito");

            ocultarAlerta(error);
            ocultarAlerta(exito);

            const nombre = document.getElementById("nombre").value.trim();
            const grupo = document.getElementById("grupo").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const telefono = document.getElementById("telefono").value.trim();

            if (!nombre || !grupo || !correo || !telefono) {

                mostrarAlerta(
                    error,
                    "Por favor, completa todos los campos antes de continuar."
                );

                return;

            }

            if (!formulario.checkValidity()) {

                mostrarAlerta(
                    error,
                    "Verifica que los datos ingresados sean correctos."
                );

                formulario.reportValidity();

                return;

            }

            const datos = {
                nombre: nombre,
                grupo: grupo,
                correo: correo,
                telefono: telefono
            };

            localStorage.setItem(
                "datosUsuario",
                JSON.stringify(datos)
            );

            mostrarAlerta(
                exito,
                "¡Registro exitoso! Redirigiendo..."
            );

            setTimeout(function () {

                window.location.href = "datos.html";

            }, 1500);

        });

    }


    // MOSTRAR DATOS DEL USUARIO

    const contenedorDatos = document.getElementById("informacionUsuario");

    if (contenedorDatos) {

        const datosGuardados = localStorage.getItem("datosUsuario");

        if (datosGuardados) {

            const usuario = JSON.parse(datosGuardados);

            document.getElementById("datoNombre").textContent = usuario.nombre;
            document.getElementById("datoGrupo").textContent = usuario.grupo;
            document.getElementById("datoCorreo").textContent = usuario.correo;
            document.getElementById("datoTelefono").textContent = usuario.telefono;

        } else {

            contenedorDatos.textContent =
                "No se encontraron datos registrados.";

        }

    }


    // FORMULARIO DE CALIFICACIÓN


const formularioCalificacion =
    document.getElementById("formCalificacion");

if (formularioCalificacion) {

    formularioCalificacion.addEventListener("submit", function (event) {

        event.preventDefault();

        const calificacion =
            document.getElementById("calificacion").value;

        const comentarios =
            document.getElementById("comentarios").value.trim();

        const error =
            document.getElementById("mensajeError");

        const exito =
            document.getElementById("mensajeExito");

        ocultarAlerta(error);
        ocultarAlerta(exito);

        if (!calificacion || !comentarios) {

            mostrarAlerta(
                error,
                "Completa todos los campos antes de enviar."
            );

            return;

        }

        const evaluacion = {
            calificacion: calificacion,
            comentarios: comentarios
        };

        localStorage.setItem(
            "evaluacionProyecto",
            JSON.stringify(evaluacion)
        );

        mostrarAlerta(
            exito,
            "¡Gracias! Tu evaluación se registró correctamente."
        );

        setTimeout(function () {

            window.location.href = "calificacion.html";

        }, 1500);

    });

}


// MOSTRAR CALIFICACIÓN FINAL

const resultadoCalificacion =
    document.getElementById("resultadoCalificacion");

if (resultadoCalificacion) {

    const evaluacionGuardada =
        localStorage.getItem("evaluacionProyecto");

    if (evaluacionGuardada) {

        const evaluacion = JSON.parse(evaluacionGuardada);

        resultadoCalificacion.textContent =
            evaluacion.calificacion + " / 10";

    } else {

        resultadoCalificacion.textContent =
            "Gracias por visitar nuestro proyecto.";

    }

});
