CREATE DATABASE "prueba-aquatic";

CREATE TABLE usuarios (
  id UUID PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL
);


CREATE TABLE carritos (
    id SERIAL PRIMARY KEY,
    usuario_id UUID NOT NULL REFERENCES usuarios(id),
    activo BOOLEAN DEFAULT TRUE,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE carrito_productos (
    id SERIAL PRIMARY KEY,
    carrito_id INT REFERENCES carritos(id) ON DELETE CASCADE,
    producto_id INT REFERENCES productos(id),
    cantidad INT NOT NULL CHECK (cantidad > 0),
    UNIQUE (carrito_id, producto_id)
);



CREATE TABLE cursos(
    img TEXT,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion VARCHAR NOT NULL,
    valor INT NOT NULL,
    materias VARCHAR NOT NULL,
    duracion INT not null
    Foreign Key () REFERENCES ()

);  

CREATE TABLE bitacoras (

Foreign Key () REFERENCES ()

)