CREATE DATABASE "prueba-aquatic";

CREATE TABLE usuarios (
  id UUID PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL
);


CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    precio NUMERIC(10,2) NOT NULL CHECK (precio >= 0),
    img TEXT,
    stock INT NOT NULL DEFAULT 0 CHECK (stock >= 0),
    categoria_id INT REFERENCES categorias(id),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE carritos (
    id SERIAL PRIMARY KEY,
    usuario_id UUID NOT NULL REFERENCES usuarios(id),
    activo BOOLEAN DEFAULT TRUE,
    unique_usuario UNIQUE (usuario_id),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE carrito_productos (
    id SERIAL PRIMARY KEY,
    carrito_id INT REFERENCES carritos(id) ON DELETE CASCADE,
    producto_id INT REFERENCES productos(id),
    cantidad INT NOT NULL CHECK (cantidad > 0),
    UNIQUE (carrito_id, producto_id)
);



CREATE TABLE materias (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL UNIQUE,
    activo BOOLEAN DEFAULT TRUE,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    img TEXT,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT NOT NULL,
    valor NUMERIC(10,2) NOT NULL CHECK (valor >= 0),
    duracion INT NOT NULL,
    materia_id INT REFERENCES materias(id),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuarios_cursos (
    id SERIAL PRIMARY KEY,
    usuario_id UUID REFERENCES usuarios(id),
    curso_id INT REFERENCES cursos(id),
    fecha_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (usuario_id, curso_id)
);



CREATE TABLE bitacoras (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    edad INT CHECK (edad > 0),
    fecha_buceo DATE NOT NULL,
    lugar_buceo VARCHAR(100) NOT NULL,
    exp_ultimas24hr BOOLEAN DEFAULT FALSE,
    nuevo_buceo BOOLEAN DEFAULT FALSE,
    deja_sup TIME NOT NULL,
    llega_fondo TIME NOT NULL,
    deja_fondo TIME NOT NULL,
    profundidad NUMERIC(5,2) NOT NULL CHECK (profundidad >= 0),
    tipo_buceo TEXT NOT NULL,
    temperatura_agua NUMERIC(4,1) CHECK (temperatura_agua BETWEEN -5 AND 40),
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuario_bitacora (
    usuario_id UUID REFERENCES usuarios(id),
    bitacora_id INT REFERENCES bitacoras(id) ON DELETE CASCADE,
    PRIMARY KEY (usuario_id, bitacora_id)
);
