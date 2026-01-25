/* CREATE DATABASE "aquatic-World"; */

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

INSERT INTO categorias (nombre) values 
('Aletas '),
('Botellas'),
('Botines'),
('Cascos'),
('Chalecos'),
('Consolas'),
('Manometros'),
('Reguladores'),
('Relojes'),
('Trajes'),
('visores'),
('Guantes');


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

INSERT INTO productos (nombre,descripcion,precio,img,stock,categoria_id) values 
('Aletas Cressi ','histórica italiana con aletas para todos los niveles',60000,'img/productos/aletas1.jpeg',20,1),
('Aletas TUSA ','japonesa con diseños cómodos y eficientes',40000,'img/productos/aletas2.jpeg',25,1),
('Aletas Oceanic ','con opciones populares para buceadores recreativos y viajeros',55000,'img/productos/aletas3.jpeg',25,1),
('Aletas XS Scuba ','aletas accesibles y confiables',30000,'img/productos/aletas4.jpeg',27,1),
('Aletas Sherwood ','aletas de buen rendimiento',45000,'img/productos/aletas5.jpeg',21,1),
('Aletas Genesis ','aletas versátiles para uso recreativo',52000,'img/productos/aletas6.jpg',23,1),
('Aletas Tilos ','aletas ligeras y de viaje',68000,'img/productos/aletas7.jpeg',28,1),
('Aletas Hollis ','apreciada sobre todo en buceo técnico por sus aletas robustas',85000,'img/productos/aletas8.jpeg',26,1),
('Aletas Apeks ','muy popular en el segmento técnico y de alto rendimiento',59000,'img/productos/aletas9.jpeg',20,1);

/* botellas */

INSERT INTO productos (nombre,descripcion,precio,img,stock,categoria_id) values 

('botella Luxfer','Una de las marcas más reconocidas mundialmente en cilindros de buceo, muy duraderos y con buena relación peso/aire; usados por buceadores recreativos y técnicos',167000,'img/productos/botella1.jpeg',16,2),

('botella Faber ','Fabricante italiano de cilindros de acero y aluminio, apreciado por su robustez y flotabilidad controlada (especialmente en acero)',149000,'img/productos/botella2.jpeg',14,2),

('botella Catalina ','Marca tradicional con cilindros de aluminio muy populares para buceo recreativo, fáciles de manejar y resistentes a la corrosión.',195000,'img/productos/botella3.jpeg',26,2),

('botella  Worthington Cylinders ','Famosa por sus cilindros de alta presión para buceo y aplicaciones industriales, confiables y con buena disponibilidad de repuestos.',220000,'img/productos/botella4.jpeg',11,2),

('botella PPI (Pressure Products Industries) ','Fabricante de cilindros de acero y aluminio con buena calidad y certificaciones internacionales, usados en buceo y otras industrias',205000,'img/productos/botella5.jpg',12,2),

('botella EMPIRE','Marca con cilindros de buceo de buena calidad para buceadores recreativos y profesionales, reconocida en varios mercados.o',192000,'img/productos/botella6.jpg',26,2),

('botella Dive Rite ','Aunque más conocida por su equipo técnico de buceo, también ofrece configuraciones de cilindros y sistemas completos para buceo técnico/traveler.',188000,'img/productos/botella7.jpg',14,2),

('botella Sherwood Scuba','Marca clásica con cilindros de acero y aluminio, populares entre buceadores recreativos por su fiabilidad y facilidad de uso',235000,'img/productos/botella8.jpeg',20,2);



/* botines */

INSERT INTO productos (nombre, descripcion, precio, img, stock,categoria_id) VALUES
('Botin Cressi',
 'Botín neopreno cómodo y resistente, ideal para buceo recreativo',
 42000,
 'img/productos/botines1.jpeg',
 12,3),

('Botin Mares',
 'Suela reforzada y buen agarre para entradas por roca o playa',
 48000,
 'img/productos/botines2.jpeg',
 10,3),

('Botin Scubapro',
 'Diseño térmico que mantiene el pie abrigado en aguas frías',
 59000,
 'img/productos/botines3.jpeg',
 8,3),

('Botin Aqualung',
 'Ligero y flexible, pensado para usar con aletas de talón abierto',
 45000,
 'img/productos/botines4.jpeg',
 15,3),

('Botin TUSA',
 'Neopreno de alta densidad con cremallera resistente y cómoda',
 52000,
 'img/productos/botines5.jpeg',
 9,3),

('Botin SEAC',
 'Modelo robusto con suela antideslizante para terrenos irregulares',
 47000,
 'img/productos/botines6.jpeg',
 11,3);

/* cascos */

INSERT INTO productos (nombre, descripcion, precio, img, stock,categoria_id) VALUES
('Casco Kirby Morgan SuperLite 27',
 'Casco profesional muy usado en buceo comercial por su seguridad y comodidad',
 3250000,
 'img/productos/cascos1.jpeg',
 3,4),

('Casco Kirby Morgan 37',
 'Modelo robusto con excelente protección y sistema de respiración eficiente',
 3480000,
 'img/productos/cascos2.jpeg',
 2,4),

('Casco DESCO Air Hat',
 'Casco clásico de acero, confiable y duradero para trabajos submarinos',
 2990000,
 'img/productos/cascos3.jpeg',
 2,4),

('Casco Miller 400',
 'Cascos reconocidos por su resistencia en faenas exigentes y largas jornadas',
 3120000,
 'img/productos/cascos4.jpeg',
 1,4),

('Casco Gorski G2000',
 'Casco moderno de alto rendimiento con gran visibilidad y confort',
 3650000,
 'img/productos/cascos5.jpeg',
 2,4);

/* chalecos */

INSERT INTO productos (nombre, descripcion, precio, img, stock,categoria_id) VALUES
('Chaleco Scubapro Glide',
 'Chaleco cómodo y estable, ideal para buceo recreativo',
 365000,
 'img/productos/chaleco1.jpeg',
 7,5),

('Chaleco Mares Prestige',
 'Diseño ligero con buen control de flotabilidad',
 329000,
 'img/productos/chaleco2.jpeg',
 9,5),

('Chaleco Aqualung Pro HD',
 'Robusto y confiable, pensado para uso frecuente',
 389000,
 'img/productos/chaleco3.jpeg',
 6,5),

('Chaleco Cressi Start Pro',
 'Modelo sencillo y durable para escuelas y principiantes',
 275000,
 'img/productos/chaleco4.jpeg',
 12,5),

('Chaleco TUSA Liberator',
 'Buen equilibrio entre comodidad y rendimiento',
 298000,
 'img/productos/chaleco5.jpeg',
 8,5),

('Chaleco Oceanic Biolite',
 'Ultraligero para viajes, fácil de guardar y transportar',
 345000,
 'img/productos/chaleco6.jpeg',
 5,5);


/* consolas de buceo */

INSERT INTO productos (nombre, descripcion, precio, img, stock,categoria_id) VALUES
('Consola Scubapro Compact',
 'Manómetro compacto y fácil de leer, ideal para buceo recreativo',
 165000,
 'img/productos/consola1.jpeg',
 10,6),

('Consola Mares Mission 2',
 'Incluye manómetro y profundímetro analógico, diseño robusto',
 198000,
 'img/productos/consola2.jpeg',
 7,6),

('Consola Cressi Mini Pressure',
 'Consola ligera con manómetro preciso y carcasa resistente',
 149000,
 'img/productos/consola3.jpeg',
 12,6),

('Consola Aqualung 3 Gauge',
 'Trae manómetro, profundímetro y compás en un solo módulo',
 235000,
 'img/productos/consola4.jpeg',
 5,6),

('Consola TUSA SCA-280',
 'Diseño ergonómico con indicadores claros y alta durabilidad',
 189000,
 'img/productos/consola5.jpeg',
 6,6);

/* manometros de buceo */

INSERT INTO productos (nombre, descripcion, precio, img, stock,categoria_id) VALUES
('Manómetro Subacqua Pro',
 'Manómetro analógico resistente, ideal para buceo recreativo y profesional',
 89990,
 'img/productos/manometros1.jpeg',
 15,7),

('Manómetro Compact Steel',
 'Diseño compacto con carcasa metálica reforzada y excelente precisión',
 75990,
 'img/productos/manometros2.jpeg',
 20,7),

('Manómetro Lumina Glow',
 'Esfera luminiscente para lecturas claras incluso con baja visibilidad',
 82990,
 'img/productos/manometros3.jpeg',
 18,7),

('Manómetro DeepGuard',
 'Protección de goma y conexión estándar compatible con la mayoría de reguladores',
 94990,
 'img/productos/manometros4.jpeg',
 12,7),

('Manómetro Tech Diver',
 'Alta precisión pensado para buceo avanzado y técnico',
 99990,
 'img/productos/manometros5.jpeg',
 10,7);

/* reguladores de buceo */

INSERT INTO productos (nombre, descripcion, precio, img, stock,categoria_id) VALUES
('Regulador OceanAir Pro',
 'Regulador balanceado, respiración suave y gran durabilidad bajo presión',
 289000,
 'img/productos/regulador1.jpeg',
 8,8),

('Regulador DeepWave 300',
 'Primera etapa de diafragma y segunda etapa ligera para mayor comodidad',
 259000,
 'img/productos/regulador2.jpeg',
 10,8),

('Regulador MarineTech XR',
 'Diseñado para buceo avanzado, excelente rendimiento en aguas frías',
 315000,
 'img/productos/regulador3.jpeg',
 6,8),

('Regulador AquaFlex Lite',
 'Modelo compacto ideal para buceo recreativo y viajes',
 219000,
 'img/productos/regulador4.jpeg',
 14,8),

('Regulador SteelCore Plus',
 'Construcción robusta con flujo constante incluso a gran profundidad',
 299000,
 'img/productos/regulador5.jpeg',
 9,8),

('Regulador BlueMotion Pro',
 'Ajuste de esfuerzo respiratorio y purga frontal ergonómica',
 275000,
 'img/productos/regulador6.jpeg',
 11,8),

('Regulador TechDive Dual',
 'Sistema de alta eficiencia con segunda etapa adicional de respaldo',
 339000,
 'img/productos/regulador7.jpeg',
 5,8);

/* relojes de buceo */

INSERT INTO productos (nombre, descripcion, precio, img, stock,categoria_id) VALUES
('Reloj Diver Chrono',
 'Reloj de buceo analógico con bisel giratorio y resistencia 200 m',
 159000,
 'img/productos/reloj1.jpeg',
 10,9),

('Reloj DeepTime Pro',
 'Pantalla clara, cronómetro y resistencia al agua hasta 300 m',
 198000,
 'img/productos/reloj2.jpeg',
 7,9),

('Reloj AquaMaster',
 'Diseño robusto con correa de silicona y luminosidad nocturna',
 175000,
 'img/productos/reloj3.jpeg',
 9,9),

('Reloj SubMarine X',
 'Movimiento preciso y cristal mineral reforzado para impacto',
 189000,
 'img/productos/reloj4.jpeg',
 8,9),

('Reloj OceanTech Digital',
 'Funciones de cuenta regresiva, profundidad y alarma',
 215000,
 'img/productos/reloj5.jpeg',
 6,9),

('Reloj MarineSport',
 'Resistente al agua 200 m, ideal para buceo recreativo',
 149000,
 'img/productos/reloj6.jpeg',
 12,9),

('Reloj TechDive Pro',
 'Diseñado para inmersiones largas, excelente lectura bajo el agua',
 239000,
 'img/productos/reloj7.jpeg',
 5,9),

('Reloj Tritón Steel',
 'Caja de acero inoxidable y bisel unidireccional',
 205000,
 'img/productos/reloj8.jpeg',
 7,9),

('Reloj BlueShadow',
 'Estilo deportivo con excelente visibilidad en baja luz',
 169000,
 'img/productos/reloj9.jpeg',
 11,9);

/* trajes de buceo */

INSERT INTO productos (nombre, descripcion, precio, img, stock,categoria_id) VALUES
('Traje Cressi Med 3mm',
 'Traje de neopreno flexible ideal para aguas templadas',
 125000,
 'img/productos/traje1.jpeg',
 10,10),

('Traje Mares Reef 5mm',
 'Buen aislamiento térmico y resistencia al desgaste',
 189000,
 'img/productos/traje2.jpeg',
 8,10),

('Traje Aqualung Balance 7mm',
 'Diseñado para inmersiones en aguas frías con alta comodidad',
 249000,
 'img/productos/traje3.jpeg',
 6,10),

('Traje Scubapro Everflex',
 'Neopreno elástico premium que mejora el ajuste y movilidad',
 279000,
 'img/productos/traje4.jpeg',
 5,10),

('Traje TUSA Sport 3/2',
 'Modelo ligero y versátil para buceo recreativo y snorkel',
 118000,
 'img/productos/traje5.jpeg',
 12,10),

('Traje Oceanic Pioneer 5mm',
 'Excelente relación entre flexibilidad y protección térmica',
 199000,
 'img/productos/traje6.jpeg',
 7,10),

('Traje Beuchat Focea Comfort',
 'Con refuerzos en rodillas y hombros para mayor durabilidad',
 285000,
 'img/productos/traje7.jpeg',
 4,10),

('Traje Hollis Neotek',
 'Modelo semiseco con gran capacidad de retención de calor',
 325000,
 'img/productos/traje8.jpeg',
 3,10),

('Traje Cressi Comfort Lady',
 'Corte anatómico pensado para mayor ajuste en cuerpo femenino',
 215000,
 'img/productos/traje9.jpeg',
 6,10),

('Traje Apeks Thermiq',
 'Tecnología térmica avanzada y costuras selladas',
 339000,
 'img/productos/traje10.jpeg',
 4,10),

('Traje Bare Velocity Ultra',
 'Combinación de paneles elásticos que facilitan el movimiento',
 265000,
 'img/productos/traje11.jpeg',
 5,10);

/* visores de buceo */

INSERT INTO productos (nombre, descripcion, precio, img, stock,categoria_id) VALUES
('Visor Cressi Matrix',
 'Máscara de bajo volumen con excelente campo visual',
 89000,
 'img/productos/visores1.jpeg',
 10,11),

('Visor Mares X-Vision',
 'Diseño ergonómico que mejora el ajuste y la comodidad',
 115000,
 'img/productos/visores2.jpeg',
 8,11),

('Visor Aqualung Reveal',
 'Silicona suave y sistema de hebillas flexible para mejor sellado',
 132000,
 'img/productos/visores3.jpeg',
 6,11),

('Visor Scubapro Trinidad',
 'Ligero y de una sola lente para gran visibilidad frontal',
 99000,
 'img/productos/visores4.jpeg',
 9,11),

('Visor TUSA Freedom Elite',
 'Tecnología antifugas y gran confort en el contorno facial',
 125000,
 'img/productos/visores5.jpeg',
 7,11),

('Visor Beuchat Maxlux S',
 'Marco compacto ideal para fotografía submarina y apnea',
 108000,
 'img/productos/visores6.jpeg',
 11,11);

/* guantes de buceo */

INSERT INTO productos (nombre, descripcion, precio, img, stock,categoria_id) VALUES
('Guantes Cressi High Stretch 3mm',
 'Neopreno elástico que mantiene calor y buena sensibilidad táctil',
 45000,
 'img/productos/guante1.jpeg',
 12,12),

('Guantes Mares Flexa 5mm',
 'Excelente aislamiento para aguas frías con refuerzos en palma',
 62000,
 'img/productos/guante2.jpeg',
 8,12),

('Guantes Scubapro Everflex',
 'Diseño anatómico que mejora agarre y comodidad bajo el agua',
 68900,
 'img/productos/guante3.jpeg',
 7,12),

('Guantes Aqualung Thermocline',
 'Material flexible con protección térmica intermedia',
 54000,
 'img/productos/guante4.jpeg',
 10,12),

('Guantes Beuchat Elaskin',
 'Gran ajuste y durabilidad para uso frecuente',
 57500,
 'img/productos/guante5.jpeg',
 9,12),

('Guantes TUSA Tropical',
 'Guantes ligeros con buen agarre para aguas templadas',
 39900,
 'img/productos/guante6.jpeg',
 11,12),

('Guantes Hollis NeoTek',
 'Alta resistencia al desgaste, ideales para buceo técnico',
 72000,
 'img/productos/guante7.jpeg',
 5,12),

('Guantes Oceanic Grip',
 'Palma antideslizante para mayor control del equipo',
 48500,
 'img/productos/guante8.jpeg',
 13,12);

CREATE TABLE carritos (
    id SERIAL PRIMARY KEY,
    usuario_id UUID NOT NULL REFERENCES usuarios(id),
    activo BOOLEAN DEFAULT TRUE,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_usuario UNIQUE (usuario_id)
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

INSERT INTO cursos (img, nombre, descripcion, valor, duracion)
VALUES (
  'img/cursos/comercial.png',
  'Buzo Comercial',
  'El buceo comercial combina habilidades técnicas y trabajo profesional bajo el agua. Los buzos realizan inspecciones, reparaciones, construcción y mantenimiento en entornos industriales como puertos, plataformas y embarcaciones. Es una disciplina exigente, segura y altamente especializada, ideal para quienes buscan una carrera desafiante y bien remunerada en el mundo submarino.',
  1450000,
  9
);

INSERT INTO cursos (img, nombre, descripcion, valor, duracion)
VALUES (
  'img/cursos/cientifico.png',
  'Buzo Científico',
  'El buceo científico se enfoca en la exploración y estudio del mundo submarino para fines de investigación. Los buzos participan en monitoreo ambiental, registro de especies, toma de muestras y documentación de ecosistemas marinos. Es una actividad segura y planificada, ideal para quienes desean contribuir al conocimiento y la conservación del océano.',
  850000,
  6
);

INSERT INTO cursos (img, nombre, descripcion, valor, duracion)
VALUES (
  'img/cursos/mariscador-basico.png',
  'Buzo Mariscador Básico',
  'Este curso introduce las técnicas esenciales para la recolección segura y responsable de recursos marinos. El alumno aprende sobre normativa, manejo de equipos, técnicas de buceo en baja profundidad y buenas prácticas de cuidado del ecosistema. Es el primer paso para quienes desean iniciarse profesionalmente en la actividad del marisqueo submarino.',
  650000,
  5
);

INSERT INTO cursos (img, nombre, descripcion, valor, duracion)
VALUES (
  'img/cursos/mariscador-intermedio.png',
  'Buzo Mariscador Intermedio',
  'Este curso profundiza en las técnicas de recolección y manejo bajo el agua, incorporando mayor planificación, seguridad y eficiencia en el trabajo. El alumno aprende a operar en mayores profundidades, optimizar tiempos de buceo y aplicar criterios de sustentabilidad y normativa vigente. Está pensado para quienes ya tienen experiencia básica y buscan profesionalizar su práctica.',
  950000,
  7
);

INSERT INTO cursos (img, nombre, descripcion, valor, duracion)
VALUES (
  'img/cursos/deportivo.png',
  'Buzo Deportivo',
  'El buceo deportivo está orientado a quienes desean disfrutar del mundo submarino de forma recreativa y segura. En este curso aprenderás técnicas básicas de flotabilidad, uso del equipo, comunicación bajo el agua y planificación de inmersiones. Es ideal para explorar nuevos paisajes marinos mientras desarrollas confianza y respeto por el océano.',
  450000,
  3
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
