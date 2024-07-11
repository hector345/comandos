const commands = [
    { command: "git init", description: "Inicializa un nuevo repositorio Git en el directorio actual." },
    { command: "git clone <url>", description: "Clona un repositorio desde la URL especificada." },
    { command: "git status", description: "Muestra el estado de los cambios en el repositorio." },
    { command: "git add <archivo>", description: "Añade archivos al índice para ser confirmados." },
    { command: "git commit -m \"mensaje\"", description: "Confirma los cambios añadidos con un mensaje descriptivo." },
    { command: "git pull", description: "Actualiza el repositorio local con los cambios del repositorio remoto." },
    { command: "git pull origin <rama>", description: "Actualiza el repositorio local con los cambios de una rama específica del repositorio remoto." },
    { command: "git push", description: "Envía los cambios confirmados al repositorio remoto." },
    { command: "git branch", description: "Lista, crea o elimina ramas." },
    { command: "git checkout <rama>", description: "Cambia a otra rama." },
    { command: "git merge <rama>", description: "Fusiona la rama especificada con la rama actual." },
    { command: "git stash", description: "Almacena temporalmente los cambios no confirmados para limpiarlos del árbol de trabajo." },
    { command: "git log", description: "Muestra el historial de commits." },
    { command: "git remote -v", description: "Muestra las URLs de los repositorios remotos." },
    { command: "git remote add <nombre> <url>", description: "Añade un nuevo repositorio remoto con el nombre y la URL especificados." },
    { command: "git remote remove <nombre>", description: "Elimina un repositorio remoto especificado por su nombre." },
    { command: "git fetch <remote>", description: "Descarga objetos y refs desde otro repositorio." },
    { command: "git pull <remote> <branch>", description: "Descarga y fusiona cambios de una rama específica desde otro repositorio." },
    { command: "sudo apt update", description: "Actualiza la lista de paquetes disponibles." },
    { command: "sudo apt upgrade", description: "Actualiza los paquetes instalados a sus versiones más recientes." },
    { command: "sudo apt install <paquete>", description: "Instala el paquete especificado." },
    { command: "sudo systemctl start <servicio>", description: "Inicia un servicio." },
    { command: "sudo systemctl stop <servicio>", description: "Detiene un servicio." },
    { command: "sudo systemctl restart <servicio>", description: "Reinicia un servicio." },
    { command: "sudo systemctl reload <servicio>", description: "Recarga la configuración de un servicio sin interrumpirlo." },
    { command: "sudo systemctl enable <servicio>", description: "Habilita un servicio para que se inicie automáticamente al arrancar." },
    { command: "sudo systemctl disable <servicio>", description: "Deshabilita un servicio para que no se inicie automáticamente." },
    { command: "sudo systemctl status <servicio>", description: "Muestra el estado de un servicio." },
    { command: "sudo service <servicio> start", description: "Inicia un servicio (alternativa a systemctl)." },
    { command: "sudo service <servicio> stop", description: "Detiene un servicio (alternativa a systemctl)." },
    { command: "sudo service <servicio> restart", description: "Reinicia un servicio (alternativa a systemctl)." },
    { command: "sudo service <servicio> status", description: "Muestra el estado de un servicio (alternativa a systemctl)." },
    { command: "cd /ruta/al/directorio", description: "Cambia el directorio de trabajo." },
    { command: "ls -la", description: "Lista los archivos y directorios con detalles." },
    { command: "chmod +x <archivo>", description: "Cambia los permisos de un archivo para hacerlo ejecutable." },
    { command: "chown <usuario>:<grupo> <archivo>", description: "Cambia el propietario y el grupo de un archivo." },
    { command: "scp <archivo> <usuario>@<host>:<ruta>", description: "Copia un archivo a un servidor remoto mediante SCP." },
    { command: "rsync -avz <origen> <destino>", description: "Sincroniza archivos y directorios entre dos ubicaciones." },
    { command: "sudo systemctl start nginx", description: "Inicia el servicio Nginx." },
    { command: "sudo systemctl stop nginx", description: "Detiene el servicio Nginx." },
    { command: "sudo systemctl restart nginx", description: "Reinicia el servicio Nginx." },
    { command: "sudo systemctl reload nginx", description: "Recarga la configuración de Nginx sin interrumpir el servicio." },
    { command: "sudo systemctl enable nginx", description: "Habilita el servicio Nginx para que se inicie automáticamente al arrancar." },
    { command: "sudo systemctl disable nginx", description: "Deshabilita el servicio Nginx para que no se inicie automáticamente." },
    { command: "sudo nginx -t", description: "Prueba la configuración de Nginx por errores sintácticos." },
    { command: "sudo nginx -s reload", description: "Recarga la configuración de Nginx (alternativa a `systemctl reload nginx`)." },
    { command: "sudo systemctl status nginx", description: "Muestra el estado actual del servicio Nginx." },
    { command: "sudo journalctl -u nginx", description: "Muestra los registros (logs) del servicio Nginx." },
    { command: "sudo tail -f /var/log/nginx/error.log", description: "Muestra en tiempo real el archivo de log de errores de Nginx." },
    { command: "sudo tail -f /var/log/nginx/access.log", description: "Muestra en tiempo real el archivo de log de accesos de Nginx." }
    {command: "php artisan list", description: "Muestra una lista de todos los comandos disponibles de Artisan."},
    {command: "php artisan help <comando>", description: "Muestra ayuda para un comando específico de Artisan."},
    {command: "php artisan make:model <NombreModelo>", description: "Crea un nuevo modelo."},
    {command: "php artisan make:controller <NombreControlador>", description: "Crea un nuevo controlador."},
    {command: "php artisan make:migration <NombreMigration>", description: "Crea una nueva migración de base de datos."},
    {command: "php artisan migrate", description: "Ejecuta las migraciones pendientes de la base de datos."},
    {command: "php artisan migrate:rollback", description: "Revierte la última migración de base de datos."},
    {command: "php artisan db:seed", description: "Llena la base de datos con registros de prueba."},
    {command: "php artisan route:list", description: "Muestra una lista de todas las rutas registradas."},
    {command: "php artisan cache:clear", description: "Borra todas las entradas del caché."},
    {command: "php artisan config:cache", description: "Crea un archivo caché para acelerar la carga de configuración."},
    {command: "php artisan view:clear", description: "Borra todas las vistas compiladas."},
    {command: "php artisan storage:link", description: "Crea el enlace simbólico de almacenamiento para la carpeta 'public'."},
    {command: "php artisan key:generate", description: "Genera una nueva clave de aplicación."},
    {command: "php artisan serve", description: "Inicia el servidor de desarrollo de Laravel."},
    {command: "php artisan queue:work", description: "Escucha la cola de trabajos para ejecutarlos."},
    {command: "php artisan schedule:run", description: "Ejecuta los trabajos programados definidos en 'App\Console\Kernel'."},
    {command: "php artisan vendor:publish", description: "Publica cualquier recurso de un proveedor que no esté publicado todavía."},
    {command: "php artisan route:cache", description: "Crea un archivo caché para acelerar la registración de rutas."},
    {command: "php artisan route:clear", description: "Borra el archivo de caché de rutas."},
    {command: "php artisan event:generate", description: "Genera clases de evento para eventos y listeners."},
    {command: "php artisan make:middleware <NombreMiddleware>", description: "Crea un nuevo middleware."},
    {command: "php artisan optimize", description: "Optimiza la carga de clases para un mejor rendimiento."},
    {command: "php artisan down", description: "Pone la aplicación en modo de mantenimiento."},
    {command: "php artisan up", description: "Saca la aplicación del modo de mantenimiento."},
    {command: "php artisan tinker", description: "Inicia un REPL (Read-Eval-Print Loop) interactivo para Laravel."},
    {command: "php artisan make:policy <NombrePolitica>", description: "Crea una nueva política de autorización."},
    {command: "php artisan queue:failed", description: "Lista todos los trabajos de cola fallidos."},
    {command: "php artisan queue:retry <ID>", description: "Reintenta un trabajo de cola fallido por su ID."},
    {command: "php artisan queue:flush", description: "Borra todos los trabajos de cola fallidos."},
    {command: "php artisan queue:listen", description: "Escucha la cola de trabajos en segundo plano."},
    {command: "php artisan make:job <NombreTrabajo>", description: "Crea un nuevo trabajo de cola."},
    {command: "php artisan make:request <NombreSolicitud>", description: "Crea una nueva clase de solicitud."},
    {command: "php artisan make:factory <NombreFabrica>", description: "Crea una nueva fábrica de modelos de prueba."},
    {command: "php artisan serve --host=0.0.0.0 --port=8080", description: "Inicia el servidor de desarrollo de Laravel en una dirección IP específica y puerto."},
];

document.addEventListener('DOMContentLoaded', () => {
    const commandsBody = document.getElementById('commandsBody');

    commands.forEach(cmd => {
        const row = document.createElement('tr');

        const commandCell = document.createElement('td');
        commandCell.textContent = cmd.command;

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = cmd.description;

        const copyCell = document.createElement('td');
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copiar';
        copyButton.addEventListener('click', () => handleCopyButtonClick(cmd.command));
        copyCell.appendChild(copyButton);

        row.appendChild(commandCell);
        row.appendChild(descriptionCell);
        row.appendChild(copyCell);

        commandsBody.appendChild(row);
    });

    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none';
    });

    document.getElementById('copyWithParams').addEventListener('click', () => {
        const form = document.getElementById('paramForm');
        let filledCommand = form.getAttribute('data-command');

        form.querySelectorAll('input').forEach(input => {
            const param = input.getAttribute('data-param');
            filledCommand = filledCommand.replace(`<${param}>`, input.value);
        });

        navigator.clipboard.writeText(filledCommand).then(() => {
            alert('Comando copiado al portapapeles');
            document.getElementById('modal').style.display = 'none';
        });
    });

    function handleCopyButtonClick(command) {
        const modalContent = document.getElementById('modalContent');
        const paramForm = document.getElementById('paramForm');
        const modal = document.getElementById('modal');

        // Limpia el contenido anterior del formulario
        while (paramForm.firstChild) {
            paramForm.removeChild(paramForm.firstChild);
        }

        // Verifica si el comando tiene parámetros
        const params = command.match(/<\w+>/g);
        if (params && params.length > 0) {
            // Mostrar el modal y generar los campos de entrada para los parámetros
            modal.style.display = 'block';

            // Establecer el comando actual en el atributo de datos del formulario
            paramForm.setAttribute('data-command', command);

            params.forEach(param => {
                const paramName = param.replace(/<|>/g, '');
                const inputLabel = document.createElement('label');
                inputLabel.textContent = `${paramName}: `;
                const inputField = document.createElement('input');
                inputField.setAttribute('type', 'text');
                inputField.setAttribute('placeholder', `Ingrese ${paramName}`);
                inputField.setAttribute('data-param', paramName);
                paramForm.appendChild(inputLabel);
                paramForm.appendChild(inputField);
            });
        } else {
            // Si no hay parámetros, copia directamente el comando al portapapeles
            navigator.clipboard.writeText(command).then(() => {
                alert('Comando copiado al portapapeles');
            });
        }
    }
});