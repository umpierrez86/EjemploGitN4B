# Ejercicio de Branching en Git con Resolución de Conflictos

En este ejercicio, simularemos un flujo de trabajo normal utilizando ramificaciones en Git. Además, enfrentaremos y resolveremos conflictos durante la fusión de ramas.

## Paso 1: Crear una nueva rama

Primero, vamos a crear una nueva rama llamada "nueva-funcionalidad" desde la rama principal.

## Paso 2: Realizar cambios en la nueva rama

Ahora que estamos en la nueva rama, vamos a agregar una nueva característica a nuestra aplicación de gestión de tareas. En el archivo `tareas.js` dentro de la carpeta `src` implementaremos la lógica para agregar nuevas tareas.

```javascript
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
```

También actualizaremos el archivo `funcionalidades.md` para incluir información sobre esta nueva característica.

```markdown
# Aplicación de Gestión de Tareas

Esta es una aplicación simple para gestionar tus tareas diarias.

## Características

- Agregar nuevas tareas
- Marcar tareas como completadas
- Visualizar lista de tareas
```

## Paso 3: Confirmar los cambios en la nueva rama

Después de realizar los cambios, confirmaremos nuestras modificaciones en la nueva rama.

## Paso 4: Publicar la rama

Si estamos trabajando en un repositorio remoto, podemos publicar nuestra nueva rama.

## Paso 5: Cambiar a la rama principal

Volvamos a la rama principal para simular que otro desarrollador ha realizado cambios en el mismo archivo.

## Paso 6: Realizar cambios en la rama principal

Simulemos que otro desarrollador ha realizado cambios en el archivo `tareas.js`, agregando una validación adicional para las nuevas tareas.

```javascript
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
```

## Paso 7: Confirmar los cambios en la rama principal

Confirmaremos los cambios en la rama principal.

## Paso 8: Fusionar la nueva rama con la rama principal

Ahora, intentaremos fusionar la rama `nueva-funcionalidad` con la rama principal.

## Paso 9: Resolver conflictos

Durante la fusión, surgirá un conflicto debido a los cambios conflictivos en el mismo archivo `tareas.js`. Abriremos el archivo en conflicto y resolveremos manualmente el conflicto.

Después de resolver el conflicto, realizar el commit confirmando la fusión.

## Paso 10: Subir los cambios fusionados

Finalmente, subiremos los cambios fusionados a nuestro repositorio remoto.

---