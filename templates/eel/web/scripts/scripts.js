var VERSION;

function footer() {
    const footer = document.getElementsByTagName('body')[0].appendChild(document.createElement('footer'));
    const p = document.createElement('p');
    p.innerHTML = `&copy; Abels Enterprises; v.${VERSION}`;
    footer.appendChild(p);
}

export function fullScreen() {
    window.resizeTo(screen.width, screen.height);
}

function halfScreen() {
    window.resizeTo(screen.width / 2, screen.height);
}

function checkHealth() {
    if (eel._websocket && eel._websocket.readyState === WebSocket.OPEN) {
        eel.health()((response) => {
            console.log('Health check: ', response);
        });
    } else {
        console.error('WebSocket is already in CLOSING or CLOSED state.');
        alert('Connection to the server lost, the server will now close.');
        window.close();
    }
}

export function startup(...functions) {
    // Here are the functions that are called when the page is loaded
    eel.get_version()((version) => {
        console.log(`Version: ${version}`);
        VERSION = version;
        halfScreen();
        footer();
        functions.forEach((func) => func());
    })
}


setInterval(checkHealth, 10000);
