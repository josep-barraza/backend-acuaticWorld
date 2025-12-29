CREATE DATABASE "prueba-aquatic";

CREATE TABLE usuarios (
  id UUID PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE productos (
    img TEXT,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion VARCHAR NOT NULL,
    valor VARCHAR NOT NULL
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