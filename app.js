// ===== CONFIGURACIÓN GLOBAL =====
const CONFIG = {
    VERSION: '3.0.0',
    STORAGE_KEYS: {
        REGISTROS: 'registros_rosas',
        USUARIO: 'usuario_sesion',
        USUARIOS: 'usuarios_sistema',
        CONTENIDO: 'contenido_sistema',
        CONFIGURACION: 'configuracion_sistema',
        BACKUP_PREFIX: 'backup_rosas_'
    },
    ALERTAS: {
        PUNTOS_CRITICOS: 15,
        BOTRITYS_CRITICO: 3,
        OIDIO_CRITICO: 2,
        ACAROS_CRITICO: 2
    }
};

// ===== ENCABEZADO EXCEL =====
const ENCABEZADO_EXCEL = [
    "BLOQUE", "VARIEDAD", "NRO. CAMA", "CODIGO",
    "Botritys en el botón", "Oidio", "Clorosis", "Velloso",
    "Acaros", "Afidos", "Trips", "Gusano",
    "Bajeros sin descabezar", "Basales sin pinchar",
    "Basales en punto de corte", "Botritys en tocón",
    "Corte con yema hacia afuera", "Cuellos de ganso",
    "Flor abierta", "Mal desyeme", "Muñones", "Orquetas",
    "Patrones", "Piso sobre yema muerta", "Pisos muy cortos",
    "Pisos muy delgados", "Pisos muy grandes",
    "Presencia de palos secos", "Presencia de Yemas",
    "Tallos cortos sin descabezar", "Tallos delgados sin descabezar",
    "Tallos rotos", "Tallos sin encanastar", "Tallos torcidos",
    "Tocones de corte", "Tocones",
    "Alambre flojo y mal posicionados", "Camas secas",
    "Charcos en caminos", "Gotera", "Laterales sucios",
    "Mangueras de goteo colgadas", "Mangueras en mal estado",
    "Mangueras sueltas", "Material en descomposición",
    "Necesita alambre", "Pambil caído", "Pambil mal colocado",
    "Presencia de hierbas", "Tachos sucios", "TOTAL GENERAL"
];

// ===== CATEGORÍAS DE PROBLEMAS =====
const CATEGORIAS_PROBLEMAS = {
    "ENFERMEDADES": ENCABEZADO_EXCEL.slice(4, 8),
    "PLAGAS": ENCABEZADO_EXCEL.slice(8, 12),
    "MANEJO CULTURAL": ENCABEZADO_EXCEL.slice(12, 35),
    "MANTENIMIENTO": ENCABEZADO_EXCEL.slice(35, 49)
};

// ===== BASE DE DATOS COMPLETA =====
const BASE_DATOS = {
    "1": {
        "FREEDOM": {"1": "13", "2": "13", "3": "13", "4": "13", "5": "13", "6": "13", "7": "13", "8": "13", "9": "13", "10": "13", "11": "13", "12": "13", "13": "13", "14": "13", "15": "13", "16": "13", "17": "02", "18": "02", "19": "02", "20": "02", "21": "02", "22": "02", "23": "02", "24": "02", "25": "02", "26": "02", "27": "02", "28": "02", "29": "02", "30": "02", "31": "02", "32": "02", "33": "02", "34": "02", "35": "10", "36": "10", "37": "10", "38": "10", "39": "10", "40": "10", "41": "10", "42": "10"},
        "MAGIC TIME": {"43": "10", "44": "10", "45": "10", "46": "10", "47": "10", "48": "10"},
        "PALOMA": {"49": "10", "50": "10", "51": "10", "52": "10", "53": "10", "54": "10"},
        "SHOCKING BLUE": {"55": "11", "56": "11", "57": "11", "58": "11", "59": "11", "60": "11", "61": "11", "62": "11", "63": "11", "64": "11"},
        "GOTCHA": {"65": "11", "66": "11", "67": "11", "68": "11", "69": "11", "70": "12", "71": "12", "72": "12", "73": "12", "74": "12", "75": "12", "76": "12", "77": "12", "78": "12", "79": "12", "80": "12", "81": "12", "82": "12", "83": "12", "84": "12", "85": "12", "86": "12"}
    },
    "2": {
        "PRINCESS CROWN": {"1": "03", "2": "03", "3": "03", "4": "03", "5": "03", "6": "03", "7": "03", "8": "03", "9": "03", "10": "03", "11": "03", "12": "03"},
        "MANDARIN X-PRESSION": {"13": "03", "14": "03", "15": "03", "16": "03", "17": "03", "18": "03", "19": "03", "20": "03", "21": "03", "22": "03", "23": "03", "24": "03", "279": "04", "280": "04", "281": "04", "282": "04", "283": "04", "284": "04", "285": "04", "286": "04", "287": "04", "288": "04", "289": "04", "290": "04"},
        "PLAYA BLANCA": {"25": "03", "26": "03", "27": "03", "28": "03", "29": "03", "30": "03", "31": "03", "32": "03", "33": "03", "34": "03", "35": "03", "36": "03", "37": "03", "38": "03", "39": "03", "40": "03", "41": "03", "42": "03", "43": "08", "44": "08", "45": "08", "46": "08", "47": "08", "48": "08"},
        "COUNTRY BLUES": {"49": "08", "50": "08", "51": "08", "52": "08", "53": "08", "54": "08", "55": "08", "56": "08", "57": "08", "58": "08", "59": "08", "60": "08", "61": "08", "62": "08", "63": "08", "64": "08", "65": "08", "66": "08", "67": "08", "68": "08", "69": "08", "70": "08", "71": "08", "72": "08"},
        "PINK XPRESSION": {"73": "08", "75": "08", "77": "09", "79": "09", "81": "09", "83": "09", "85": "09", "87": "09", "89": "09", "91": "09", "93": "09", "95": "09", "97": "09", "99": "09", "101": "09", "103": "09", "105": "09", "107": "09"},
        "DEEP PURPLE": {"74": "09", "76": "09", "78": "09", "80": "09", "82": "09", "84": "09", "86": "09", "88": "09", "90": "09", "92": "09", "94": "09", "96": "09", "98": "09", "100": "09", "102": "09", "104": "09", "106": "09", "108": "09"},
        "BRIGHTON": {"109": "09", "110": "09", "111": "09", "112": "09", "113": "09", "114": "09", "115": "09", "116": "09", "117": "09", "118": "09", "119": "07", "120": "07", "121": "07", "122": "07", "123": "07", "124": "07", "125": "07", "126": "07", "127": "07", "128": "07"},
        "NOVIA": {"129": "07", "130": "07", "131": "07", "132": "07", "133": "07", "134": "07", "135": "07", "136": "07", "137": "07", "138": "07", "139": "07", "140": "07"},
        "MANDALA": {"141": "07", "142": "07", "143": "07", "144": "07", "145": "07", "146": "07", "147": "07", "148": "07", "149": "07", "150": "07", "151": "07", "152": "07"},
        "LUCIANO": {"153": "07", "154": "07", "155": "07", "156": "07", "157": "07", "158": "07", "159": "07", "160": "07", "161": "07", "162": "07", "163": "07", "164": "07"},
        "HERMOSA": {"165": "01", "166": "01", "167": "01", "168": "01", "169": "01", "170": "01", "171": "01", "172": "01", "173": "01", "174": "01", "175": "01", "176": "01"},
        "SAHARA": {"177": "01", "178": "01", "179": "01", "180": "01", "181": "01", "182": "01", "183": "01", "184": "01", "185": "01", "186": "01", "187": "01", "188": "01", "189": "01", "190": "01", "191": "01", "192": "01", "193": "01", "194": "01", "195": "01", "196": "01", "197": "01", "198": "01", "199": "01", "200": "01"},
        "QUICKSAND": {"201": "01", "202": "01", "203": "01", "204": "01", "205": "01", "206": "01", "207": "06", "208": "06", "209": "06", "210": "06", "211": "06", "212": "06", "213": "06", "214": "06", "215": "06", "216": "06", "217": "06", "218": "06", "219": "06", "220": "06", "221": "06", "222": "06"},
        "KAHALA": {"223": "06", "224": "06", "225": "06", "226": "06", "227": "06", "228": "06", "229": "06", "230": "06", "231": "06", "232": "06", "233": "06", "234": "06", "235": "06", "236": "06", "237": "06", "238": "06", "239": "05", "240": "05", "241": "05", "242": "05"},
        "FREE SPIRIT": {"243": "05", "244": "05", "245": "05", "246": "05", "247": "05", "248": "05", "249": "05", "250": "05", "251": "05", "252": "05", "253": "05", "254": "05"},
        "BE SWEET": {"255": "05", "256": "05", "257": "05", "258": "05", "259": "05", "260": "05", "261": "05", "262": "05", "263": "05", "264": "05", "265": "05", "266": "05"},
        "CANDELIGHT": {"267": "05", "268": "05", "269": "05", "270": "05", "271": "04", "272": "04", "273": "04", "274": "04", "275": "04", "276": "04", "277": "04", "278": "04"},
        "TIBET": {"291": "04", "292": "04", "293": "04", "294": "04", "295": "04", "296": "04", "297": "04", "298": "04", "299": "04", "300": "04", "301": "04", "302": "04"}
    },
    "3": {
        "BOULEVARD": {"1": "04"},
        "EXPLORER": {"2": "04", "3": "04", "4": "04", "5": "04", "6": "04", "7": "04", "8": "04", "9": "04", "10": "04", "11": "04", "12": "04", "13": "04", "14": "04", "15": "04", "16": "04", "17": "04", "18": "04", "19": "04", "20": "04", "21": "04", "22": "04", "23": "04", "24": "04", "25": "04", "26": "04", "27": "04", "28": "04", "29": "04", "30": "04", "31": "05", "32": "05", "33": "05", "34": "05", "35": "05", "36": "05", "37": "05", "38": "05", "39": "05", "40": "05", "41": "05", "42": "05", "43": "05", "44": "05", "45": "05", "46": "05", "47": "05", "48": "05", "49": "05", "50": "05", "51": "05"},
        "NOVIA": {"52": "05", "53": "05", "54": "05", "55": "05", "56": "05", "57": "05", "58": "05", "59": "05", "60": "05", "61": "06", "62": "06", "63": "06"},
        "ORANGE CRUSH": {"64": "06", "65": "06", "66": "06", "67": "06", "68": "06", "69": "06", "70": "06", "71": "06", "72": "06", "73": "06", "74": "06"},
        "ORANGE PARTY": {"75": "06"},
        "MONDIAL": {"76": "06", "77": "06", "78": "06", "79": "06", "80": "06", "81": "06", "82": "06", "83": "06", "84": "06", "85": "06", "86": "06", "87": "06", "88": "06", "89": "06", "90": "06", "91": "08", "92": "08", "93": "08", "94": "08", "95": "08", "96": "08", "97": "08", "98": "08", "99": "08", "100": "08", "101": "08", "102": "08", "103": "08", "104": "08", "105": "08", "106": "08"},
        "PINK FLOYD": {"107": "08", "108": "08", "109": "08", "110": "08", "111": "08", "112": "08", "113": "08", "114": "08", "115": "08", "116": "08", "117": "08", "118": "08", "119": "08", "120": "08", "121": "03", "122": "03", "123": "03", "124": "03", "125": "03", "126": "03", "127": "03", "128": "03", "129": "03", "130": "03", "131": "03", "132": "03", "133": "03", "134": "03", "135": "03", "136": "03", "137": "03", "138": "03", "139": "03", "140": "03"}
    },
    "4": {
        "FRUTTETO": {"1": "09", "2": "09", "3": "09", "4": "09"},
        "BE SWEET": {"5": "09", "6": "09", "7": "09", "8": "09", "9": "09", "10": "09", "11": "09", "12": "09", "13": "09", "14": "09"},
        "COTTON X-PRESSION": {"15": "09", "16": "09", "17": "09", "18": "09", "19": "01", "20": "01", "21": "01", "22": "01", "23": "01", "24": "01"},
        "TIFFANY": {"25": "01", "26": "01", "27": "01", "28": "01", "29": "01", "30": "01", "31": "01", "32": "01", "33": "01", "34": "01", "35": "01", "36": "01", "37": "07", "38": "07", "39": "07", "40": "07", "41": "07", "42": "07", "43": "07", "44": "07"},
        "PROUD": {"45": "07", "46": "07", "47": "07", "48": "07", "49": "07", "50": "07", "51": "07", "52": "07", "53": "07", "54": "07", "55": "13", "56": "13", "57": "13", "58": "13", "59": "13", "60": "13", "61": "13", "62": "13", "63": "13", "64": "13"},
        "MANDALA": {"65": "13", "66": "13", "67": "13", "68": "13", "69": "13", "70": "13", "71": "13", "72": "13", "73": "11", "74": "11"},
        "ESPERANCE": {"75": "11", "76": "11", "77": "11", "78": "11", "79": "11", "80": "11", "81": "11", "82": "11", "83": "11", "84": "11"},
        "COFFEE BREAK": {"85": "11", "86": "11", "87": "11", "88": "11", "89": "11", "90": "11", "91": "10", "92": "10", "93": "10", "94": "10", "95": "10", "96": "10", "97": "10", "98": "10", "99": "10", "100": "10", "101": "10", "102": "10", "103": "10", "104": "10"},
        "BOULEVARD": {"105": "10", "106": "10", "107": "10", "108": "10", "109": "02", "110": "02", "111": "02", "112": "02", "113": "02", "114": "02", "115": "02", "116": "02", "117": "02", "118": "02", "119": "02", "120": "02", "121": "02", "122": "02", "123": "02", "124": "02"},
        "LOLA": {"125": "02", "126": "02", "127": "12", "128": "12", "129": "12", "130": "12", "131": "12", "132": "12", "133": "12", "134": "12", "135": "12", "136": "12", "137": "12", "138": "12", "139": "12", "140": "12", "141": "12", "142": "12", "143": "12", "144": "12"}
    },
    "5": {
        "VENDELA": {"1": "12", "3": "12", "5": "12", "7": "12", "9": "12", "11": "12", "13": "12", "15": "12", "17": "12", "19": "12", "21": "12", "23": "02", "25": "02", "27": "02", "29": "02", "31": "02", "33": "02", "35": "02", "37": "02", "39": "02", "41": "02", "43": "02", "45": "02", "47": "10", "49": "10", "51": "10", "53": "10", "55": "10", "57": "10", "59": "10"},
        "HERMOSA": {"2": "12", "4": "12", "6": "12", "8": "12", "10": "12", "12": "12", "14": "12", "16": "12", "18": "12", "20": "12", "22": "12", "24": "02", "26": "02", "28": "02", "30": "02", "32": "02", "34": "02", "36": "02", "38": "02", "40": "02", "42": "02", "44": "02", "46": "02", "48": "10", "50": "10", "52": "10", "54": "10", "56": "10"},
        "MAGIC TIME": {"58": "10", "60": "10", "62": "10", "64": "10"},
        "MONDIAL": {"61": "10", "63": "10", "65": "10", "67": "10", "69": "10", "71": "11", "73": "11", "75": "11", "77": "11", "79": "11", "81": "11", "83": "11", "85": "11", "87": "11", "89": "11", "91": "11", "93": "11", "95": "13", "97": "13", "99": "13", "101": "13", "103": "13", "105": "13", "107": "13", "109": "13", "111": "13", "113": "13", "115": "13", "117": "13", "119": "13"},
        "PALOMA": {"66": "10", "68": "10", "70": "10"},
        "CARPE DIEM": {"72": "11", "74": "11", "76": "11", "78": "11", "80": "11", "82": "11", "84": "11", "86": "11", "88": "11", "90": "11", "92": "11", "94": "11", "96": "11", "98": "11", "100": "13"},
        "SILANTOI": {"102": "13", "104": "13", "106": "13", "108": "13", "110": "13", "112": "13", "114": "13", "116": "13", "118": "13", "120": "13", "121": "13", "122": "13"}
    }
};

// ===== USUARIOS POR DEFECTO =====
const USUARIOS_DEFAULT = {
    admin: { password: 'admin123', rol: 'admin', nombre: 'Administrador Principal' },
    supervisor: { password: 'super123', rol: 'supervisor', nombre: 'Supervisor General' },
    operario: { password: 'oper123', rol: 'operario', nombre: 'Operario de Campo' }
};

// ===== VARIABLES GLOBALES =====
let graficos = {};
let usuarioActual = null;

// ===== FUNCIONES DE INICIALIZACIÓN =====
window.onload = function() {
    inicializarSistema();
};

function inicializarSistema() {
    // Inicializar usuarios si no existen
    if (!localStorage.getItem(CONFIG.STORAGE_KEYS.USUARIOS)) {
        localStorage.setItem(CONFIG.STORAGE_KEYS.USUARIOS, JSON.stringify(USUARIOS_DEFAULT));
    }
    
    // Inicializar configuración si no existe
    if (!localStorage.getItem(CONFIG.STORAGE_KEYS.CONFIGURACION)) {
        localStorage.setItem(CONFIG.STORAGE_KEYS.CONFIGURACION, JSON.stringify({
            autoBackup: true,
            notificacionesEmail: false,
            //limiteRegistros: 25,
            modoOscuro: false
        }));
    }
    
    // Inicializar contenido si no existe
    if (!localStorage.getItem(CONFIG.STORAGE_KEYS.CONTENIDO)) {
        localStorage.setItem(CONFIG.STORAGE_KEYS.CONTENIDO, JSON.stringify([]));
    }
    
    // Configurar fecha actual
    const hoy = new Date().toISOString().split('T')[0];
    document.getElementById('fecha').value = hoy;
    
    // Configurar fechas por defecto para filtros
    const hace30Dias = new Date();
    hace30Dias.setDate(hace30Dias.getDate() - 30);
    document.getElementById('dashboard-fecha-inicio').value = hace30Dias.toISOString().split('T')[0];
    document.getElementById('dashboard-fecha-fin').value = hoy;
    
    // Inicializar componentes
    crearListasProblemas();
    actualizarResumen();
    actualizarTotalRegistros();
    
    // Configurar eventos
    configurarEventos();
    
    // Mostrar pantalla de login inicial
    mostrarLoginInicial();
    
    // Cargar configuración guardada
    cargarConfiguracionGuardada();
}

function configurarEventos() {
    // Eventos de teclado
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            guardarRegistro();
        }
        if (e.key === 'Escape') {
            cerrarModal();
            cerrarPanelAdmin();
        }
    });
    
    // Cerrar modales al hacer clic fuera
    window.onclick = function(event) {
        const modal = document.getElementById('modalRegistros');
        if (event.target === modal) {
            cerrarModal();
        }
        
        const adminPanel = document.getElementById('admin-panel');
        if (event.target === adminPanel) {
            cerrarPanelAdmin();
        }
    };
}

// ===== PANTALLA DE LOGIN INICIAL =====
function mostrarLoginInicial() {
    // Mostrar siempre la pantalla de login inicial al cargar
    document.getElementById('login-inicial').style.display = 'flex';
    document.getElementById('app-contenedor').style.display = 'none';
}

function verificarLoginInicial() {
    const usuario = document.getElementById('login-usuario').value;
    const password = document.getElementById('login-password').value;
    
    const usuarios = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.USUARIOS));
    
    if (usuarios[usuario] && usuarios[usuario].password === password) {
        // Login exitoso
        usuarioActual = {
            usuario: usuario,
            rol: usuarios[usuario].rol,
            nombre: usuarios[usuario].nombre,
            loginTime: new Date().getTime()
        };
        
        localStorage.setItem(CONFIG.STORAGE_KEYS.USUARIO, JSON.stringify(usuarioActual));
        
        // Ocultar login y mostrar aplicación
        document.getElementById('login-inicial').style.display = 'none';
        document.getElementById('app-contenedor').style.display = 'block';
        
        // Actualizar UI
        document.getElementById('usuario-actual').textContent = usuarios[usuario].nombre;
        mostrarNotificacion(`✅ Bienvenido ${usuarios[usuario].nombre}`, 'success');
        
        // Actualizar permisos según rol
        actualizarPermisos(usuarios[usuario].rol);
    } else {
        mostrarNotificacion('❌ Usuario o contraseña incorrectos', 'error');
        // Agitar el formulario para indicar error
        document.querySelector('.login-inicial-form').style.animation = 'shake 0.5s';
        setTimeout(() => {
            document.querySelector('.login-inicial-form').style.animation = '';
        }, 500);
    }
}

// ===== PANEL DE ADMINISTRACIÓN =====
function abrirPanelAdmin() {
    // Verificar que el usuario sea admin
    if (!usuarioActual || usuarioActual.rol !== 'admin') {
        mostrarNotificacion('❌ Solo administradores pueden acceder al panel', 'error');
        return;
    }
    
    document.getElementById('admin-panel').style.display = 'flex';
    cargarUsuariosEnPanel();
    cargarContenidoEnPanel();
    cargarConfiguracionEnPanel();
}

function cerrarPanelAdmin() {
    document.getElementById('admin-panel').style.display = 'none';
}

function cambiarAdminTab(tabId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.admin-seccion').forEach(sec => {
        sec.classList.remove('activa');
    });
    
    // Remover activa de todas las pestañas
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('activa');
    });
    
    // Activar la pestaña seleccionada
    const tabElement = document.querySelector(`[onclick="cambiarAdminTab('${tabId}')"]`);
    if (tabElement) {
        tabElement.classList.add('activa');
    }
    
    const seccionElement = document.getElementById(`admin-${tabId}`);
    if (seccionElement) {
        seccionElement.classList.add('activa');
    }
}

// Gestión de Usuarios
function cargarUsuariosEnPanel() {
    const usuarios = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.USUARIOS));
    const lista = document.getElementById('lista-usuarios');
    
    lista.innerHTML = '';
    
    Object.keys(usuarios).forEach(username => {
        const usuario = usuarios[username];
        
        const item = document.createElement('div');
        item.className = 'usuario-item';
        item.innerHTML = `
            <div class="usuario-info">
                <h5>${usuario.nombre} (${username})</h5>
                <p><strong>Rol:</strong> ${usuario.rol}</p>
            </div>
            <div class="usuario-acciones">
                <button class="btn-editar" onclick="editarUsuario('${username}')">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-eliminar" onclick="eliminarUsuario('${username}')">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        `;
        
        lista.appendChild(item);
    });
}

function agregarUsuario() {
    const username = document.getElementById('nuevo-usuario').value;
    const password = document.getElementById('nueva-password').value;
    const rol = document.getElementById('nuevo-rol').value;
    const nombre = document.getElementById('nuevo-nombre').value;
    
    if (!username || !password || !nombre) {
        mostrarNotificacion('❌ Complete todos los campos', 'error');
        return;
    }
    
    const usuarios = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.USUARIOS));
    
    if (usuarios[username]) {
        mostrarNotificacion('❌ El usuario ya existe', 'error');
        return;
    }
    
    usuarios[username] = { password, rol, nombre };
    localStorage.setItem(CONFIG.STORAGE_KEYS.USUARIOS, JSON.stringify(usuarios));
    
    // Limpiar formulario
    document.getElementById('nuevo-usuario').value = '';
    document.getElementById('nueva-password').value = '';
    document.getElementById('nuevo-nombre').value = '';
    
    // Actualizar lista
    cargarUsuariosEnPanel();
    mostrarNotificacion('✅ Usuario agregado correctamente', 'success');
}

function editarUsuario(username) {
    const usuarios = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.USUARIOS));
    const usuario = usuarios[username];
    
    if (!usuario) return;
    
    // Rellenar formulario con datos del usuario
    document.getElementById('nuevo-usuario').value = username;
    document.getElementById('nuevo-usuario').readOnly = true;
    document.getElementById('nueva-password').value = usuario.password;
    document.getElementById('nuevo-rol').value = usuario.rol;
    document.getElementById('nuevo-nombre').value = usuario.nombre;
    
    // Cambiar texto del botón
    const btn = document.querySelector('#admin-usuarios .btn-admin');
    btn.innerHTML = '<i class="fas fa-save"></i> Actualizar Usuario';
    btn.onclick = function() { actualizarUsuario(username); };
}

function actualizarUsuario(username) {
    const password = document.getElementById('nueva-password').value;
    const rol = document.getElementById('nuevo-rol').value;
    const nombre = document.getElementById('nuevo-nombre').value;
    
    if (!password || !nombre) {
        mostrarNotificacion('❌ Complete todos los campos', 'error');
        return;
    }
    
    const usuarios = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.USUARIOS));
    
    usuarios[username] = { password, rol, nombre };
    localStorage.setItem(CONFIG.STORAGE_KEYS.USUARIOS, JSON.stringify(usuarios));
    
    // Restaurar formulario
    document.getElementById('nuevo-usuario').value = '';
    document.getElementById('nuevo-usuario').readOnly = false;
    document.getElementById('nueva-password').value = '';
    document.getElementById('nuevo-nombre').value = '';
    
    // Restaurar botón
    const btn = document.querySelector('#admin-usuarios .btn-admin');
    btn.innerHTML = '<i class="fas fa-plus"></i> Agregar Usuario';
    btn.onclick = agregarUsuario;
    
    // Actualizar lista
    cargarUsuariosEnPanel();
    mostrarNotificacion('✅ Usuario actualizado correctamente', 'success');
}

function eliminarUsuario(username) {
    if (username === usuarioActual.usuario) {
        mostrarNotificacion('❌ No puede eliminar su propio usuario', 'error');
        return;
    }
    
    if (!confirm(`¿Está seguro de eliminar al usuario ${username}?`)) {
        return;
    }
    
    const usuarios = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.USUARIOS));
    delete usuarios[username];
    localStorage.setItem(CONFIG.STORAGE_KEYS.USUARIOS, JSON.stringify(usuarios));
    
    cargarUsuariosEnPanel();
    mostrarNotificacion('✅ Usuario eliminado correctamente', 'success');
}

// Gestión de Contenido
function cargarContenidoEnPanel() {
    const contenido = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.CONTENIDO) || '[]');
    const lista = document.getElementById('lista-contenido');
    
    lista.innerHTML = '';
    
    contenido.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'contenido-item';
        div.innerHTML = `
            <div class="contenido-info">
                <h5>${item.titulo}</h5>
                <p><strong>Tipo:</strong> ${item.tipo}</p>
                <p>${item.descripcion.substring(0, 100)}${item.descripcion.length > 100 ? '...' : ''}</p>
            </div>
            <div class="contenido-acciones">
                <button class="btn-editar" onclick="editarContenido(${index})">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-eliminar" onclick="eliminarContenido(${index})">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        `;
        
        lista.appendChild(div);
    });
}

function agregarContenido() {
    const titulo = document.getElementById('titulo-contenido').value;
    const tipo = document.getElementById('tipo-contenido').value;
    const descripcion = document.getElementById('descripcion-contenido').value;
    
    if (!titulo || !descripcion) {
        mostrarNotificacion('❌ Complete todos los campos', 'error');
        return;
    }
    
    const contenido = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.CONTENIDO) || '[]');
    
    contenido.push({
        titulo,
        tipo,
        descripcion,
        fecha: new Date().toISOString(),
        autor: usuarioActual.nombre
    });
    
    localStorage.setItem(CONFIG.STORAGE_KEYS.CONTENIDO, JSON.stringify(contenido));
    
    // Limpiar formulario
    document.getElementById('titulo-contenido').value = '';
    document.getElementById('descripcion-contenido').value = '';
    
    // Actualizar lista
    cargarContenidoEnPanel();
    mostrarNotificacion('✅ Contenido agregado correctamente', 'success');
}

function editarContenido(index) {
    const contenido = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.CONTENIDO) || '[]');
    const item = contenido[index];
    
    if (!item) return;
    
    // Rellenar formulario
    document.getElementById('titulo-contenido').value = item.titulo;
    document.getElementById('tipo-contenido').value = item.tipo;
    document.getElementById('descripcion-contenido').value = item.descripcion;
    
    // Cambiar botón
    const btn = document.querySelector('#admin-contenido .btn-admin');
    btn.innerHTML = '<i class="fas fa-save"></i> Actualizar Contenido';
    btn.onclick = function() { actualizarContenido(index); };
}

function actualizarContenido(index) {
    const titulo = document.getElementById('titulo-contenido').value;
    const tipo = document.getElementById('tipo-contenido').value;
    const descripcion = document.getElementById('descripcion-contenido').value;
    
    if (!titulo || !descripcion) {
        mostrarNotificacion('❌ Complete todos los campos', 'error');
        return;
    }
    
    const contenido = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.CONTENIDO) || '[]');
    
    contenido[index] = {
        ...contenido[index],
        titulo,
        tipo,
        descripcion,
        fechaActualizacion: new Date().toISOString()
    };
    
    localStorage.setItem(CONFIG.STORAGE_KEYS.CONTENIDO, JSON.stringify(contenido));
    
    // Limpiar formulario
    document.getElementById('titulo-contenido').value = '';
    document.getElementById('descripcion-contenido').value = '';
    
    // Restaurar botón
    const btn = document.querySelector('#admin-contenido .btn-admin');
    btn.innerHTML = '<i class="fas fa-plus"></i> Agregar Contenido';
    btn.onclick = agregarContenido;
    
    // Actualizar lista
    cargarContenidoEnPanel();
    mostrarNotificacion('✅ Contenido actualizado correctamente', 'success');
}

function eliminarContenido(index) {
    if (!confirm('¿Está seguro de eliminar este contenido?')) {
        return;
    }
    
    const contenido = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.CONTENIDO) || '[]');
    contenido.splice(index, 1);
    localStorage.setItem(CONFIG.STORAGE_KEYS.CONTENIDO, JSON.stringify(contenido));
    
    cargarContenidoEnPanel();
    mostrarNotificacion('✅ Contenido eliminado correctamente', 'success');
}

// Configuración del Sistema
function cargarConfiguracionEnPanel() {
    const config = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.CONFIGURACION) || '{}');
    
    document.getElementById('auto-backup').checked = config.autoBackup || true;
    document.getElementById('notificaciones-email').checked = config.notificacionesEmail || false;
    //document.getElementById('limite-registros').value = config.limiteRegistros || 25;
}

function guardarConfiguracion() {
    const config = {
        autoBackup: document.getElementById('auto-backup').checked,
        notificacionesEmail: document.getElementById('notificaciones-email').checked,
        //limiteRegistros: parseInt(document.getElementById('limite-registros').value),
        modoOscuro: document.body.classList.contains('modo-oscuro')
    };
    
    localStorage.setItem(CONFIG.STORAGE_KEYS.CONFIGURACION, JSON.stringify(config));
    mostrarNotificacion('✅ Configuración guardada correctamente', 'success');
}

function cargarConfiguracionGuardada() {
    const config = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.CONFIGURACION) || '{}');
    
    if (config.modoOscuro) {
        toggleModoOscuro();
    }
}

// ===== FUNCIONES PRINCIPALES DEL SISTEMA =====
function crearListasProblemas() {
    crearListaCategoria('enfermedades-lista', CATEGORIAS_PROBLEMAS.ENFERMEDADES);
    crearListaCategoria('plagas-lista', CATEGORIAS_PROBLEMAS.PLAGAS);
    crearListaCategoria('manejo-lista', CATEGORIAS_PROBLEMAS["MANEJO CULTURAL"]);
    crearListaCategoria('mantenimiento-lista', CATEGORIAS_PROBLEMAS.MANTENIMIENTO);
}

function crearListaCategoria(contenedorId, problemas) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = '';
    
    problemas.forEach(problema => {
        const div = document.createElement('div');
        div.className = 'item';
        const id = problema.toLowerCase().replace(/ /g, '_');
        
        div.innerHTML = `
            <div style="display: flex; align-items: center; flex: 1;">
                <input type="checkbox" id="chk_${id}" onchange="toggleSeveridad('${id}')">
                <label for="chk_${id}">${problema}</label>
            </div>
            <select id="sel_${id}" style="display: none; width: 70px;" onchange="actualizarResumen()">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        `;
        
        contenedor.appendChild(div);
    });
}

function toggleSeveridad(id) {
    const checkbox = document.getElementById(`chk_${id}`);
    const select = document.getElementById(`sel_${id}`);
    
    if (checkbox.checked) {
        select.style.display = 'inline-block';
        select.value = '1';
    } else {
        select.style.display = 'none';
        select.value = '0';
    }
    actualizarResumen();
}

function cargarVariedades() {
    const bloque = document.getElementById('bloque').value;
    const selectVariedad = document.getElementById('variedad');
    const selectCama = document.getElementById('nro_cama');
    const inputCodigo = document.getElementById('codigo');
    
    selectVariedad.innerHTML = '<option value="">Seleccione variedad</option>';
    selectCama.innerHTML = '<option value="">Seleccione variedad primero</option>';
    selectCama.disabled = true;
    inputCodigo.value = '';
    
    if (!bloque) {
        selectVariedad.disabled = true;
        return;
    }
    
    selectVariedad.disabled = false;
    const variedades = BASE_DATOS[bloque] ? Object.keys(BASE_DATOS[bloque]) : [];
    
    variedades.forEach(variedad => {
        const option = document.createElement('option');
        option.value = variedad;
        option.textContent = variedad;
        selectVariedad.appendChild(option);
    });
    
    actualizarResumen();
}

function cargarCamas() {
    const bloque = document.getElementById('bloque').value;
    const variedad = document.getElementById('variedad').value;
    const selectCama = document.getElementById('nro_cama');
    const inputCodigo = document.getElementById('codigo');
    
    selectCama.innerHTML = '<option value="">Seleccione cama</option>';
    inputCodigo.value = '';
    
    if (!bloque || !variedad) {
        selectCama.disabled = true;
        return;
    }
    
    selectCama.disabled = false;
    const camas = BASE_DATOS[bloque] && BASE_DATOS[bloque][variedad] ? Object.keys(BASE_DATOS[bloque][variedad]) : [];
    
    camas.sort((a, b) => parseInt(a) - parseInt(b)).forEach(cama => {
        const option = document.createElement('option');
        option.value = cama;
        option.textContent = `Cama ${cama}`;
        selectCama.appendChild(option);
    });
    
    actualizarResumen();
}

function cargarCodigo() {
    const bloque = document.getElementById('bloque').value;
    const variedad = document.getElementById('variedad').value;
    const cama = document.getElementById('nro_cama').value;
    const inputCodigo = document.getElementById('codigo');
    
    if (bloque && variedad && cama) {
        const codigo = BASE_DATOS[bloque] && BASE_DATOS[bloque][variedad] && BASE_DATOS[bloque][variedad][cama] 
            ? BASE_DATOS[bloque][variedad][cama] 
            : '';
        inputCodigo.value = codigo;
    } else {
        inputCodigo.value = '';
    }
    
    actualizarResumen();
}

function actualizarResumen() {
    const bloque = document.getElementById('bloque').value;
    const variedad = document.getElementById('variedad').value;
    const cama = document.getElementById('nro_cama').value;
    
    let seleccion = "No seleccionado";
    if (bloque && variedad && cama) {
        seleccion = `Bloque ${bloque} - ${variedad} - Cama ${cama}`;
    }
    document.getElementById('resumen-seleccion').textContent = seleccion;
    
    let puntosEstimados = 0;
    let totalProblemas = 0;
    
    for (let i = 4; i < ENCABEZADO_EXCEL.length - 1; i++) {
        const problema = ENCABEZADO_EXCEL[i];
        const id = problema.toLowerCase().replace(/ /g, '_');
        const checkbox = document.getElementById(`chk_${id}`);
        const select = document.getElementById(`sel_${id}`);
        
        if (checkbox && checkbox.checked) {
            totalProblemas++;
            puntosEstimados += parseInt(select.value) || 1;
        }
    }
    
    document.getElementById('puntos-totales').textContent = puntosEstimados;
    document.getElementById('total-problemas').textContent = totalProblemas;
}

function guardarRegistro() {
    const fecha = document.getElementById('fecha').value;
    const bloque = document.getElementById('bloque').value;
    const variedad = document.getElementById('variedad').value;
    const cama = document.getElementById('nro_cama').value;
    const codigo = document.getElementById('codigo').value;
    
    if (!bloque || !variedad || !cama) {
        mostrarNotificacion('❌ Debe seleccionar Bloque, Variedad y Cama', 'error');
        return;
    }
    
    const registro = {
        fecha: fecha || new Date().toISOString().split('T')[0],
        bloque: bloque,
        variedad: variedad,
        nro_cama: cama,
        codigo: codigo,
        timestamp: new Date().getTime(),
        usuario: usuarioActual ? usuarioActual.nombre : 'Visitante'
    };
    
    let totalGeneral = 0;
    
    for (let i = 4; i < ENCABEZADO_EXCEL.length - 1; i++) {
        const problema = ENCABEZADO_EXCEL[i];
        const id = problema.toLowerCase().replace(/ /g, '_');
        const checkbox = document.getElementById(`chk_${id}`);
        const select = document.getElementById(`sel_${id}`);
        
        let valor = 0;
        if (checkbox && checkbox.checked) {
            valor = parseInt(select.value) || 1;
        }
        
        registro[problema] = valor;
        totalGeneral += valor;
    }
    
    registro["TOTAL GENERAL"] = totalGeneral;
    
    let registros = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.REGISTROS) || '[]');
    registros.push(registro);
    localStorage.setItem(CONFIG.STORAGE_KEYS.REGISTROS, JSON.stringify(registros));
    
    verificarAlertas(registro);
    
    const fechaFormato = new Date().toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    document.getElementById('ultimo-registro').textContent = 
        `${fechaFormato} - ${variedad} (Cama ${cama})`;
    
    actualizarTotalRegistros();
    
    mostrarNotificacion(`✅ Registro guardado: ${totalGeneral} puntos`, 'success');
    
    limpiarProblemas();
    
    if (document.querySelector('#pestana-dashboard').classList.contains('activa')) {
        actualizarDashboard();
    }
}

function actualizarTotalRegistros() {
    const registros = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.REGISTROS) || '[]');
    document.getElementById('total-registros-header').textContent = registros.length;
    
    if (registros.length > 0) {
        const ultimo = registros[registros.length - 1];
        const fecha = new Date(ultimo.timestamp);
        document.getElementById('ultima-sincronizacion').textContent = 
            fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    }
}

function limpiarProblemas() {
    for (let i = 4; i < ENCABEZADO_EXCEL.length - 1; i++) {
        const problema = ENCABEZADO_EXCEL[i];
        const id = problema.toLowerCase().replace(/ /g, '_');
        const checkbox = document.getElementById(`chk_${id}`);
        const select = document.getElementById(`sel_${id}`);
        
        if (checkbox) checkbox.checked = false;
        if (select) {
            select.style.display = 'none';
            select.value = '0';
        }
    }
    actualizarResumen();
}

function limpiarFormulario() {
    document.getElementById('bloque').selectedIndex = 0;
    document.getElementById('variedad').innerHTML = '<option value="">Primero seleccione bloque</option>';
    document.getElementById('variedad').disabled = true;
    document.getElementById('nro_cama').innerHTML = '<option value="">Primero seleccione variedad</option>';
    document.getElementById('nro_cama').disabled = true;
    document.getElementById('codigo').value = '';
    
    limpiarProblemas();
    mostrarNotificacion('✅ Formulario limpiado', 'info');
}

function exportarExcelPerfecto() {
    const registros = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.REGISTROS) || '[]');
    
    if (registros.length === 0) {
        mostrarNotificacion('📭 No hay registros para exportar', 'warning');
        return;
    }
    
    let csv = '';
    csv += ENCABEZADO_EXCEL.join(';') + '\n';
    
    registros.forEach(reg => {
        let fila = [];
        
        ENCABEZADO_EXCEL.forEach(columna => {
            let valor = '';
            
            if (columna === 'BLOQUE') {
                valor = reg.bloque || '';
            } else if (columna === 'VARIEDAD') {
                valor = reg.variedad || '';
            } else if (columna === 'NRO. CAMA') {
                valor = reg.nro_cama || '';
            } else if (columna === 'CODIGO') {
                valor = reg.codigo || '';
            } else if (columna === 'TOTAL GENERAL') {
                valor = reg["TOTAL GENERAL"] || 0;
            } else {
                valor = reg[columna] !== undefined ? reg[columna] : 0;
            }
            
            if (String(valor).includes(';')) {
                valor = `"${valor}"`;
            }
            
            fila.push(valor);
        });
        
        csv += fila.join(';') + '\n';
    });
    
    const blob = new Blob(['\ufeff' + csv], { 
        type: 'text/csv;charset=utf-8;' 
    });
    
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    const fechaExport = new Date().toISOString().split('T')[0];
    link.href = url;
    link.download = `MONITOREO_ROSAS_${fechaExport}.csv`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    mostrarNotificacion(`✅ Exportado ${registros.length} registros a Excel`, 'success');
}

// ===== ALERTAS =====
function verificarAlertas(registro) {
    const alertas = [];
    
    if (registro["TOTAL GENERAL"] > CONFIG.ALERTAS.PUNTOS_CRITICOS) {
        alertas.push({
            tipo: 'critica',
            mensaje: `⚠️ PUNTUACIÓN CRÍTICA: ${registro["TOTAL GENERAL"]} puntos`,
            recomendacion: 'Revisar inmediatamente el cultivo'
        });
    }
    
    if (registro["Botritys en el botón"] >= CONFIG.ALERTAS.BOTRITYS_CRITICO) {
        alertas.push({
            tipo: 'enfermedad',
            mensaje: '🚨 BOTRITYS CRÍTICO detectado',
            recomendacion: 'Aplicar fungicida sistémico inmediatamente'
        });
    }
    
    if (alertas.length > 0) {
        mostrarPanelRecomendaciones(alertas);
        alertas.forEach(alerta => {
            mostrarNotificacion(alerta.mensaje, alerta.tipo === 'critica' ? 'error' : 'warning');
        });
    }
}

function mostrarPanelRecomendaciones(alertas) {
    const panel = document.getElementById('panel-recomendaciones');
    const contenido = document.getElementById('recomendaciones-contenido');
    
    let html = '';
    alertas.forEach((alerta, index) => {
        html += `
            <div class="recomendacion-item ${alerta.tipo}">
                <strong>${alerta.mensaje}</strong>
                <p style="margin-top: 5px; font-size: 13px;">${alerta.recomendacion}</p>
            </div>
        `;
    });
    
    contenido.innerHTML = html;
    panel.style.display = 'block';
}

function cerrarRecomendaciones() {
    document.getElementById('panel-recomendaciones').style.display = 'none';
}

// ===== NOTIFICACIONES =====
function mostrarNotificacion(mensaje, tipo = 'info') {
    const container = document.getElementById('notificaciones');
    const id = 'notif-' + Date.now();
    
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion ${tipo}`;
    notificacion.id = id;
    
    const iconos = {
        error: 'fas fa-times-circle',
        warning: 'fas fa-exclamation-triangle',
        success: 'fas fa-check-circle',
        info: 'fas fa-info-circle'
    };
    
    notificacion.innerHTML = `
        <i class="${iconos[tipo]}"></i>
        <span>${mensaje}</span>
        <button onclick="cerrarNotificacion('${id}')" style="margin-left: auto; background: none; border: none; cursor: pointer;">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(notificacion);
    
    setTimeout(() => cerrarNotificacion(id), 5000);
}

function cerrarNotificacion(id) {
    const notificacion = document.getElementById(id);
    if (notificacion) {
        notificacion.style.transform = 'translateX(100%)';
        notificacion.style.opacity = '0';
        setTimeout(() => notificacion.remove(), 300);
    }
}

// ===== REGISTROS =====
function verRegistrosModal() {
    document.getElementById('modalRegistros').style.display = 'flex';
    cargarRegistrosEnModal();
}

function cerrarModal() {
    document.getElementById('modalRegistros').style.display = 'none';
}

function cargarRegistrosEnModal() {
    const container = document.getElementById('lista-registros-container');
    const registros = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.REGISTROS) || '[]');
    
    if (registros.length === 0) {
        container.innerHTML = '<div class="sin-registros">📭 No hay registros guardados</div>';
        return;
    }
    
    registros.sort((a, b) => b.timestamp - a.timestamp);
    
    let html = '';
    
    registros.forEach(registro => {
        const fecha = new Date(registro.timestamp).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        html += `
            <div class="registro-item">
                <div class="registro-info">
                    <div class="registro-fecha">${fecha}</div>
                    <div class="registro-detalle">Bloque ${registro.bloque} - ${registro.variedad}</div>
                    <div class="registro-detalle">Cama: ${registro.nro_cama} | Código: ${registro.codigo}</div>
                    <div class="registro-total">Total puntos: ${registro["TOTAL GENERAL"]}</div>
                    <div class="registro-detalle">Usuario: ${registro.usuario || 'Desconocido'}</div>
                </div>
                <div class="registro-acciones">
                    <button class="btn-eliminar" onclick="eliminarRegistroUnico(${registro.timestamp})">
                        🗑️ Eliminar
                    </button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function eliminarRegistroUnico(timestamp) {
    let registros = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.REGISTROS) || '[]');
    
    const registroEliminar = registros.find(r => r.timestamp == timestamp);
    if (!registroEliminar) return;
    
    const confirmacion = confirm(`¿Eliminar registro del ${registroEliminar.fecha}?\n${registroEliminar.variedad} - Cama ${registroEliminar.nro_cama}\nTotal: ${registroEliminar["TOTAL GENERAL"]} puntos`);
    
    if (confirmacion) {
        registros = registros.filter(r => r.timestamp != timestamp);
        localStorage.setItem(CONFIG.STORAGE_KEYS.REGISTROS, JSON.stringify(registros));
        
        actualizarTotalRegistros();
        cargarRegistrosEnModal();
        
        if (document.querySelector('#pestana-dashboard').classList.contains('activa')) {
            actualizarDashboard();
        }
        
        mostrarNotificacion('✅ Registro eliminado', 'success');
    }
}

function eliminarTodosRegistros() {
    const registros = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.REGISTROS) || '[]');
    
    if (registros.length === 0) {
        mostrarNotificacion('📭 No hay registros para eliminar', 'warning');
        return;
    }
    
    const confirmacion = confirm(`⚠️ ¿ESTÁ SEGURO DE ELIMINAR TODOS LOS REGISTROS?\n\nSe eliminarán ${registros.length} registros permanentemente.\n\nEsta acción NO se puede deshacer.`);
    
    if (confirmacion) {
        localStorage.removeItem(CONFIG.STORAGE_KEYS.REGISTROS);
        document.getElementById('ultimo-registro').textContent = 'Ninguno';
        actualizarTotalRegistros();
        mostrarNotificacion('✅ Todos los registros han sido eliminados', 'success');
        
        if (document.getElementById('modalRegistros').style.display === 'flex') {
            cargarRegistrosEnModal();
        }
        
        if (document.querySelector('#pestana-dashboard').classList.contains('activa')) {
            actualizarDashboard();
        }
    }
}

// ===== PERMISOS =====
function actualizarPermisos(rol) {
    const botonesAdmin = document.querySelectorAll('.btn-eliminar-todos');
    const btnAdminPanel = document.querySelector('[onclick="abrirPanelAdmin()"]');
    
    if (rol === 'operario') {
        botonesAdmin.forEach(btn => btn.style.display = 'none');
        if (btnAdminPanel) btnAdminPanel.style.display = 'none';
    } else if (rol === 'supervisor') {
        botonesAdmin.forEach(btn => btn.style.display = 'flex');
        if (btnAdminPanel) btnAdminPanel.style.display = 'none';
    } else if (rol === 'admin') {
        botonesAdmin.forEach(btn => btn.style.display = 'flex');
        if (btnAdminPanel) btnAdminPanel.style.display = 'flex';
    }
}

// ===== MODO OSCURO =====
function toggleModoOscuro() {
    document.body.classList.toggle('modo-oscuro');
    const boton = document.getElementById('toggle-modo');
    
    if (document.body.classList.contains('modo-oscuro')) {
        boton.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
        boton.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
    }
    
    // Guardar preferencia
    const config = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.CONFIGURACION) || '{}');
    config.modoOscuro = document.body.classList.contains('modo-oscuro');
    localStorage.setItem(CONFIG.STORAGE_KEYS.CONFIGURACION, JSON.stringify(config));
}

// ===== BACKUP =====
function realizarBackup() {
    const registros = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.REGISTROS) || '[]');
    
    if (registros.length === 0) {
        mostrarNotificacion('📭 No hay registros para respaldar', 'warning');
        return;
    }
    
    const backupKey = CONFIG.STORAGE_KEYS.BACKUP_PREFIX + new Date().getTime();
    localStorage.setItem(backupKey, JSON.stringify(registros));
    
    const blob = new Blob([JSON.stringify(registros, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_rosas_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    mostrarNotificacion(`✅ Backup realizado: ${registros.length} registros`, 'success');
}

// ===== WHATSAPP =====
function enviarReporteWhatsApp() {
    const registros = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.REGISTROS) || '[]');
    const hoy = new Date().toISOString().split('T')[0];
    const registrosHoy = registros.filter(r => r.fecha === hoy);
    
    const puntosTotales = registrosHoy.reduce((sum, r) => sum + (r["TOTAL GENERAL"] || 0), 0);
    const promedio = registrosHoy.length > 0 ? 
        (puntosTotales / registrosHoy.length).toFixed(1) : 0;
    
    const bloquesUnicos = [...new Set(registrosHoy.map(r => r.bloque))];
    
    const texto = `📊 REPORTE DIARIO ROSAS
Fecha: ${hoy}
Registros: ${registrosHoy.length}
Puntos totales: ${puntosTotales}
Promedio: ${promedio}
Bloques: ${bloquesUnicos.join(', ')}
Estado: ${puntosTotales > 100 ? '⚠️ Atención' : '✅ Normal'}

Sistema Monitoreo v${CONFIG.VERSION}`;
    
    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
    
    mostrarNotificacion('📱 Reporte listo para WhatsApp', 'info');
}

// ===== PESTAÑAS PRINCIPALES =====
function cambiarPestana(pestanaId) {
    document.querySelectorAll('.contenido-pestana').forEach(p => {
        p.classList.remove('activa');
    });
    
    document.querySelectorAll('.pestana').forEach(p => {
        p.classList.remove('activa');
    });
    
    const pestanaElement = document.querySelector(`[onclick="cambiarPestana('${pestanaId}')"]`);
    if (pestanaElement) {
        pestanaElement.classList.add('activa');
    }
    
    const contenidoElement = document.getElementById(`pestana-${pestanaId}`);
    if (contenidoElement) {
        contenidoElement.classList.add('activa');
        
        if (pestanaId === 'dashboard') {
            setTimeout(actualizarDashboard, 100);
        }
    }
}

// ===== DASHBOARD =====
function actualizarDashboard() {
    const registros = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.REGISTROS) || '[]');
    
    if (registros.length === 0) {
        document.getElementById('kpi-registros').textContent = '0';
        document.getElementById('kpi-puntos').textContent = '0';
        document.getElementById('kpi-problemas').textContent = '0';
        document.getElementById('kpi-promedio').textContent = '0';
        document.getElementById('dashboard-tabla-body').innerHTML = '';
        
        if (graficos.dashboardCategorias) graficos.dashboardCategorias.destroy();
        if (graficos.dashboardBloques) graficos.dashboardBloques.destroy();
        
        return;
    }
    
    let registrosFiltrados = aplicarFiltrosDashboard(registros);
    const estadisticas = calcularEstadisticasCompletas(registrosFiltrados);
    
    actualizarDashboardKPIs(estadisticas);
    crearGraficoDashboardCategorias(estadisticas);
    crearGraficoDashboardBloques(estadisticas);
    actualizarDashboardTabla(estadisticas);
}

function aplicarFiltrosDashboard(registros) {
    const fechaInicio = document.getElementById('dashboard-fecha-inicio').value;
    const fechaFin = document.getElementById('dashboard-fecha-fin').value;
    const bloqueFiltro = document.getElementById('dashboard-bloque').value;
    
    let filtrados = [...registros];
    
    if (fechaInicio) {
        const inicio = new Date(fechaInicio);
        filtrados = filtrados.filter(r => new Date(r.fecha) >= inicio);
    }
    
    if (fechaFin) {
        const fin = new Date(fechaFin);
        fin.setHours(23, 59, 59, 999);
        filtrados = filtrados.filter(r => new Date(r.fecha) <= fin);
    }
    
    if (bloqueFiltro) {
        filtrados = filtrados.filter(r => r.bloque === bloqueFiltro);
    }
    
    return filtrados;
}

function calcularEstadisticasCompletas(registros) {
    const estadisticas = {
        totalRegistros: registros.length,
        totalPuntos: 0,
        promedioPuntos: 0,
        porBloque: {},
        porCategoria: {
            "ENFERMEDADES": { puntos: 0, frecuencia: 0 },
            "PLAGAS": { puntos: 0, frecuencia: 0 },
            "MANEJO CULTURAL": { puntos: 0, frecuencia: 0 },
            "MANTENIMIENTO": { puntos: 0, frecuencia: 0 }
        },
        problemasDetectados: 0,
        ultimosRegistros: []
    };
    
    const problemasSet = new Set();
    
    registros.forEach(registro => {
        const puntos = registro["TOTAL GENERAL"] || 0;
        estadisticas.totalPuntos += puntos;
        
        if (!estadisticas.porBloque[registro.bloque]) {
            estadisticas.porBloque[registro.bloque] = {
                registros: 0,
                puntos: 0
            };
        }
        estadisticas.porBloque[registro.bloque].registros++;
        estadisticas.porBloque[registro.bloque].puntos += puntos;
        
        Object.keys(CATEGORIAS_PROBLEMAS).forEach(categoria => {
            CATEGORIAS_PROBLEMAS[categoria].forEach(problema => {
                const valor = registro[problema] || 0;
                if (valor > 0) {
                    estadisticas.porCategoria[categoria].puntos += valor;
                    estadisticas.porCategoria[categoria].frecuencia++;
                    problemasSet.add(problema);
                }
            });
        });
        
        estadisticas.ultimosRegistros.push({
            fecha: registro.fecha,
            bloque: registro.bloque,
            variedad: registro.variedad,
            puntos: puntos,
            problemas: Object.keys(registro).filter(k => 
                ENCABEZADO_EXCEL.slice(4, 49).includes(k) && registro[k] > 0
            ).length,
            severidadMax: Math.max(...ENCABEZADO_EXCEL.slice(4, 49).map(p => registro[p] || 0))
        });
    });
    
    estadisticas.promedioPuntos = estadisticas.totalRegistros > 0 ? 
        (estadisticas.totalPuntos / estadisticas.totalRegistros).toFixed(2) : 0;
    
    estadisticas.problemasDetectados = problemasSet.size;
    estadisticas.ultimosRegistros.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    estadisticas.ultimosRegistros = estadisticas.ultimosRegistros.slice(0, 10);
    
    return estadisticas;
}

function actualizarDashboardKPIs(estadisticas) {
    document.getElementById('kpi-registros').textContent = estadisticas.totalRegistros;
    document.getElementById('kpi-puntos').textContent = estadisticas.totalPuntos;
    document.getElementById('kpi-problemas').textContent = estadisticas.problemasDetectados;
    document.getElementById('kpi-promedio').textContent = estadisticas.promedioPuntos;
}

function crearGraficoDashboardCategorias(estadisticas) {
    const canvas = document.getElementById('dashboard-grafico-categorias');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (graficos.dashboardCategorias) {
        graficos.dashboardCategorias.destroy();
    }
    
    const data = {
        labels: Object.keys(estadisticas.porCategoria),
        datasets: [{
            data: Object.values(estadisticas.porCategoria).map(cat => cat.puntos),
            backgroundColor: ['#dc3545', '#fd7e14', '#20c997', '#0d6efd'],
            borderWidth: 2
        }]
    };
    
    graficos.dashboardCategorias = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function crearGraficoDashboardBloques(estadisticas) {
    const canvas = document.getElementById('dashboard-grafico-bloques');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (graficos.dashboardBloques) {
        graficos.dashboardBloques.destroy();
    }
    
    const bloquesOrdenados = Object.entries(estadisticas.porBloque)
        .sort((a, b) => b[1].puntos - a[1].puntos);
    
    const data = {
        labels: bloquesOrdenados.map(([bloque]) => `Bloque ${bloque}`),
        datasets: [{
            label: 'Puntos Totales',
            data: bloquesOrdenados.map(([_, datos]) => datos.puntos),
            backgroundColor: bloquesOrdenados.map(([bloque]) => 
                ['#dc3545', '#fd7e14', '#20c997', '#0d6efd', '#6f42c1'][bloque - 1] || '#6c757d'
            ),
            borderWidth: 1
        }]
    };
    
    graficos.dashboardBloques = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function actualizarDashboardTabla(estadisticas) {
    const tbody = document.getElementById('dashboard-tabla-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    estadisticas.ultimosRegistros.forEach(registro => {
        const fecha = new Date(registro.fecha);
        const fechaFormateada = fecha.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit'
        });
        
        let severidadClase = '';
        let severidadTexto = '';
        if (registro.severidadMax === 3) {
            severidadClase = 'badge-danger';
            severidadTexto = 'Alta';
        } else if (registro.severidadMax === 2) {
            severidadClase = 'badge-warning';
            severidadTexto = 'Media';
        } else {
            severidadClase = 'badge-success';
            severidadTexto = 'Baja';
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fechaFormateada}</td>
            <td>${registro.bloque}</td>
            <td>${registro.variedad}</td>
            <td>${registro.problemas}</td>
            <td><strong>${registro.puntos}</strong></td>
            <td><span class="badge ${severidadClase}">${severidadTexto}</span></td>
        `;
        
        tbody.appendChild(row);
    });
}

// ===== CERRAR SESIÓN =====
function cerrarSesion() {
    if (confirm('¿Está seguro de cerrar sesión?')) {
        localStorage.removeItem(CONFIG.STORAGE_KEYS.USUARIO);
        usuarioActual = null;
        
        document.getElementById('app-contenedor').style.display = 'none';
        document.getElementById('login-inicial').style.display = 'flex';
        
        mostrarNotificacion('👋 Sesión cerrada correctamente', 'info');
    }
}

// ===== ANIMACIONES CSS =====
document.head.insertAdjacentHTML('beforeend', `
<style>
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .badge {
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: bold;
        text-transform: uppercase;
    }
    
    .badge-success { background: #28a745; color: white; }
    .badge-warning { background: #ffc107; color: #212529; }
    .badge-danger { background: #dc3545; color: white; }
    .badge-info { background: #17a2b8; color: white; }
</style>
`);