# Guardian Bot

Guardian es un bot de Discord diseñado para el servidor de Rain World en Español.

## Características

- **Moderación**: Herramientas para silenciar usuarios que rompan las reglas de un canal específico (actualmente soporta cadenas y canales wawa)
- **Economía**: (En progreso) Sistema de economía para el servidor

## Uso

1. Configura el archivo `.env` con tus credenciales de Discord.
2. Inicia el bot:
    ```bash
    node index.js
    ```

## Requisitos

Para este proyecto necesitarás:
- Node.js v18 o superiores
- npm

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tu-usuario/guardian-bot.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd guardian-bot
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Configuración

1. Inicia sesión en el [Discord Developer Portal](https://discord.com/developers/applications) y crea un bot haciendo clic en "New Application".
2. Llena los datos del archivo `.env`. Se proporcionó una base en el archivo `ENV_base.txt`. Al finalizar, renombra el archivo a `.env` para que funcione y elimina el comentario al principio.
3. En el apartado del bot, haz clic en "Reset Token" para generar una nueva llave, cópiala y pégala en el atributo `DISCORD_BOT_TOKEN={tu_token}` en el archivo `.env`.
4. En el apartado del bot, activa las opciones:
    - Presence Intent
    - Server Members Intent
    - Message Content Intent
5. Guarda los cambios.
6. En el apartado de instalación, en la sección de "OAuth2", selecciona las siguientes opciones:
    - Connect
    - Mute Members
    - Read Message History
    - Send Messages

## Instalación en el servidor

1. Copia el ID de los canales (para esto, haz clic derecho en el canal y selecciona "Copy Channel ID", esta opción aparece teniendo previamente activada la opción de desarrollador en configuración de Discord).
2. Copia el link de instalación en la sección de OAuth2 y pégalo en tu navegador, sigue los pasos para instalarlo.
3. En la consola, escribe:
    ```bash
    node index.js
    ```
4. El bot empezará a funcionar correctamente. ¡Ahora disfruta! :D

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Para más información, contáctame en Discord: sevenredsun_s

