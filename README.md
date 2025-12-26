backenda-quatic-world/
├── src/
│   ├── server.js               # Punto de entrada (levanta Express)
│   ├── app.js                  # Configuración de middlewares y rutas
│
│   ├── config/
│   │   └── db.js               # Conexión con PostgreSQL (pool)
│
│   ├── routes/                 # Rutas separadas por recursos
│   │   ├── product.routes.js
│   │   ├── user.routes.js
│   │   └── order.routes.js
│
│   ├── controllers/            # Lógica que responde a cada ruta
│   │   ├── product.controller.js
│   │   ├── user.controller.js
│   │   └── order.controller.js
│
│   ├── models/                 # Consultas SQL a la BD
│   │   ├── product.model.js
│   │   ├── user.model.js
│   │   └── order.model.js
│
│   ├── middlewares/
│   │   └── auth.middleware.js  # JWT, validaciones, etc
│
│   ├── utils/                  # helpers, funciones reutilizables
│   │   └── fileSystem.js
│
│   ├── public/                 # imágenes, uploads, estáticos
│   └── uploads/                # para recibo de archivos
│
├── .env                        # credenciales DB, puerto, keys
├── package.json
├── README.md
└── nodemon.json                # (opcional) configuración nodemon


server.js → app.js → routes → controllers → models → base de datos
