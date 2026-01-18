
INSERT INTO materias (nombre) values 
('Física y fisiología del buceo avanzada'),
('Física y fisiología del buceo basica'),
('Teoría de la descompresión y tablas de descompresión'),
('Normativa marítima y de buceo profesional en Chile'),
('Procedimientos de seguridad y planificación de inmersiones'),
('Emergencias, protocolos de rescate y respuesta ante accidentes'),
('Técnicas de trabajo submarino avanzada '),
('Técnicas de trabajo submarino simple'),
('Primeros auxilios orientados al buceo'),
('RCP, soporte básico de vida'),
('Gestión de emergencias y enfermedad descompresiva'),
('Inmersiones de entrenamiento'),
('Ejercicios de tareas laborales'),;



/*insertar cursos de buceo */


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