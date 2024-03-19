// tareas.js

class GestorTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(tarea) {
        if (tarea.trim() !== '') {
            this.tareas.push({
                tarea: tarea,
                completada: false
            });
            console.log('Nueva tarea agregada:', tarea);
        } else {
            console.error('La tarea no puede estar vacía');
        }
    }

    obtenerTareas() {
        return this.tareas;
    }
}