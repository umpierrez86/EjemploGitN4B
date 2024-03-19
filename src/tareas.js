// tareas.js en la rama principal

class GestorTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(tarea) {
        if (tarea.trim() !== '') {
            // Lógica para agregar una nueva tarea
        } else {
            console.error('La tarea no puede estar vacía');
        }
    }

    obtenerTareas() {
        return this.tareas;
    }
}