# Remote Awake Web 🔔

Aplicación web para gestión inteligente de alarmas vinculadas a eventos de calendario. Remote Awake sincroniza automáticamente tus reuniones y citas para crear alarmas personalizadas según el tipo de evento y horario.

## 🚀 Características

- **Sincronización de Calendarios**: Conecta con Outlook, Gmail o iCal
- **Alarmas Inteligentes**: Tres tipos de alarmas configurables
  - Alarma principal con respaldos
  - Alarma con Anti-snooze
  - Alarma normal
- **Configuración por Horario**: Define rangos horarios para cada tipo de alarma
- **Gestión de Favoritos**: Guarda y administra tus alarmas favoritas
- **Interfaz Material Design**: Diseño moderno con soporte para tema claro y oscuro

## 🔐 Credenciales de Acceso

**⚠️ IMPORTANTE: Para acceder a la aplicación, utiliza las siguientes credenciales:**

```
Usuario: admin
Contraseña: admin
```

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn
- Angular CLI 21.1.0

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd remote-awake-web
```

2. Instala las dependencias:
```bash
npm install
```

## 🏃 Ejecución en Desarrollo

Inicia el servidor de desarrollo:

```bash
ng serve
```

Abre tu navegador en `http://localhost:4200/`

**Credenciales de acceso:**
- Usuario: `admin`
- Contraseña: `admin`

## 🏗️ Compilación para Producción

Genera los archivos optimizados para producción:

```bash
ng build
```

Los archivos compilados se guardarán en el directorio `dist/`.

## 🧪 Pruebas

Ejecuta las pruebas unitarias:

```bash
ng test
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── login/              # Página de inicio de sesión
│   │   ├── select-calendar/    # Selección de calendario
│   │   ├── permitir-acceso/    # Permisos de acceso
│   │   ├── calendario/         # Importación de calendarios
│   │   ├── dashboard/          # Vista principal de alarmas
│   │   ├── configuracion/      # Configuración de alarmas
│   │   └── favoritos/          # Gestión de favoritos
│   ├── app.routes.ts           # Configuración de rutas
│   └── app.config.ts           # Configuración de la aplicación
├── styles.scss                 # Estilos globales y tema
└── index.html                  # Punto de entrada HTML
```

## 🎨 Tecnologías Utilizadas

- **Angular 21.1.0**: Framework principal
- **Angular Material**: Componentes UI
- **SCSS**: Preprocesador CSS
- **TypeScript**: Lenguaje de programación
- **Vitest**: Framework de pruebas
- **Material Design 3**: Sistema de diseño

## 🔄 Flujo de Navegación

1. **Login** → Ingresa con credenciales (admin/admin)
2. **Seleccionar Calendario** → Elige el proveedor de calendario
3. **Permitir Acceso** → Autoriza permisos de calendario y hora
4. **Importar Calendario** → Selecciona calendarios específicos
5. **Dashboard** → Visualiza alarmas programadas
6. **Configuración** → Personaliza tipos de alarmas y horarios
7. **Favoritos** → Administra alarmas guardadas

## 📝 Notas de Desarrollo

- La aplicación utiliza lazy loading para optimizar la carga de componentes
- Implementa Material Design 3 con variables CSS personalizadas
- Soporte completo para tema claro y oscuro automático
- Diseño responsive adaptado a diferentes tamaños de pantalla
