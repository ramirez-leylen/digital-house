use playground;

insert into tipos_de_bloque(tipo) values ("texto");
insert into tipos_de_bloque(tipo) values ("video");
insert into tipos_de_bloque(tipo) values ("presentacion");
insert into tipos_de_bloque(tipo) values ("pdf");
insert into tipos_de_bloque(tipo) values ("archivo");

select * from tipos_de_bloque;

insert into categorias_de_usuario values (default, "estudiante");
insert into categorias_de_usuario values (default, "docente");
insert into categorias_de_usuario values (default, "editor");
insert into categorias_de_usuario values (default, "administrador");

select * from categorias_de_usuario;

insert into usuarios values (default, "julian", "hernandez", "julianhernandez@gmail.com", "wong", 1);
insert into usuarios values (default, "mario", "ramirez", "mario@gmail.com", "ada", 1);
insert into usuarios values (default, "fernando", "rauch", "rauch@gmail.com", "123", 1);
insert into usuarios values (default, "silvio", "sheider", "silvio@gmail.com", "badimbad", 1);
insert into usuarios values (default, "juliana", "marianez", "marianez@gmail.com", "imgood", 1);
insert into usuarios values (default, "silvina", "hernandez", "silvinahernandez@gmail.com", "god", 1);
insert into usuarios values (default, "paola", "argento", "paoargento@gmail.com", "lamesasemueve", 1);
insert into usuarios values (default, "coqui", null, "coqui@gmail.com", "papucho", 3);
insert into usuarios values (default, null, "fatiga", "guau@gmail.com", "guau", 4);

insert into usuarios values (default, "EL", "MOD", "elmodedediscrod@gmail.com", "elmod", 2);

select * from usuarios;

insert into cursos values (default, "desarrollo front-end", "front end", "front.png", "2024-01-02", "2025-03-04", 100);
insert into cursos values (default, "desarrollo back-end", "back end", "back.png", "2024-01-02", "2025-03-04", 100);
insert into cursos values (default, "ctd", "certified tech developer", "ctv.jpeg", "2024-03-05", "2025-11-12", 100);
insert into cursos values (default, "analisis de datos", "analisis de datos", "data.png", "2024-03-12", "2025-12-12", 100);
insert into cursos values (default, "hojas de calculo", "manejo de excel", "excel.png", "2024-12-13", "2025-12-02", 120);
insert into cursos values (default, "javascript 101", "de principiante a avanzado en javascript", "js.png", "2024-12-02", "2025-04-10", 150);
insert into cursos values (default, "inteligencia artificial", "python y redes neuronales", "python.png", "2024-12-30", "2025-11-10", 100);
insert into cursos values (default, "desarrollo web full stack", "desarrollo front-end y back-end", "full.jpeg", "2024-12-10", "2025-01-12", 100);
insert into cursos values (default, "sistemas", "c y c++", "c.png", "2024-12-02", "2025-02-04", 200);

select * from cursos;

insert into unidades values (default, "html", "html y sus cosas", "2024-02-03", 2);
insert into unidades values (default, "css", "css para que quede lindo", "2024-03-04", 2);
insert into unidades values (default, "javascript", "js para tocar botones", "2024-04-12", 2);
insert into unidades values (default, "animaciones", "botones de colores", "2024-04-30", 2);
insert into unidades values (default, "javacript", "js para cosas", "2024-01-23", 1);
insert into unidades values (default, "entry point", "app.js", "2024-02-02", 1);
insert into unidades values (default, "rutas", "sistema de ruteos", "2024-03-01", 1);
insert into unidades values (default, "introduccion", "introduccion a los temas a ver", "2024-02-03", 3);
insert into unidades values (default, "carpetas", "como navegar el computador", "2024-03-01", 3);
insert into unidades values (default, "python", "el mejor lenguaje de programacion", "2024-03-23", 3);
insert into unidades values (default, "introduccion", "nadie sabe que son los datos", "2024-01-23", 4);
insert into unidades values (default, "python", "vamos", "2024-01-29", 4);
insert into unidades values (default, "mas datos", "iu datos", "2024-02-03", 4);
insert into unidades values (default, "muchos mas datos", "iu datos", "2024-03-03", 4);
insert into unidades values (default, "introduccion", "que es una hoja de calculo", "2024-02-03", 5);
insert into unidades values (default, "excel o google sheets", "excel o google sheets", "2024-03-03", 5);
insert into unidades values (default, "por que js", "porque si", "2024-12-03", 6);

select * from unidades;

insert into clases values (default, "Introducción a Python", "Fundamentos básicos de programación en Python", "2024-05-10", 0, 5);
insert into clases values (default, "Desarrollo Web con HTML y CSS", "Aprende a crear sitios web estáticos", "2024-05-12", 1, 8);
insert into clases values (default, "JavaScript Avanzado", "Explorando conceptos avanzados de JavaScript", "2024-05-15", 0, 12);
insert into clases values (default, "Introducción a la Programación Orientada a Objetos", "Principios básicos de OOP con Python", "2024-05-18", 1, 7);
insert into clases values (default, "Desarrollo de Aplicaciones Móviles", "Creación de aplicaciones móviles con Flutter", "2024-05-20", 0, 10);
insert into clases values (default, "Diseño de Bases de Datos", "Modelado y diseño de bases de datos relacionales", "2024-05-25", 1, 15);
insert into clases values (default, "Machine Learning Fundamentals", "Conceptos básicos y aplicaciones de ML", "2024-05-28", 0, 9);
insert into clases values (default, "Desarrollo de Videojuegos con Unity", "Creación de videojuegos 2D y 3D", "2024-06-02", 1, 11);
insert into clases values (default, "Seguridad Informática", "Principios básicos de seguridad informática", "2024-06-05", 0, 6);
insert into clases values (default, "Análisis de Datos con Pandas", "Manipulación y análisis de datos con Pandas", "2024-06-08", 1, 14);
insert into clases values (default, "Introducción a la Inteligencia Artificial", "Conceptos básicos de IA y aplicaciones", "2024-06-12", 0, 4);
insert into clases values (default, "Desarrollo de Aplicaciones Web con Django", "Creación de aplicaciones web con el framework Django", "2024-06-15", 1, 16);
insert into clases values (default, "Ciberseguridad Avanzada", "Técnicas avanzadas de defensa cibernética", "2024-06-20", 0, 13);
insert into clases values (default, "Blockchain y Criptomonedas", "Principios y aplicaciones de la tecnología blockchain", "2024-06-25", 1, 17);
insert into clases values (default, "Desarrollo de Aplicaciones Empresariales", "Creación de software empresarial escalable", "2024-06-28", 0, 17);

insert into clases values (default, "Desarrollo de Aplicaciones Empresariales (parte 2)", "Creación de software empresarial escalable", "2024-06-28", 0, 17);
insert into clases values (default, "Machine Learning Fundamentals (parte 2)", "Conceptos básicos y aplicaciones de ML", "2024-06-28", 0, 9);
insert into clases values (default, "Machine Learning Fundamentals (parte 2)", "Conceptos básicos y aplicaciones de ML", "2024-06-28", 0, 7);
insert into clases values (default, "Machine Learning Fundamentals (parte 2)", "Conceptos básicos y aplicaciones de ML", "2024-06-28", 0, 3);
insert into clases values (default, "Machine Learning Fundamentals (parte 3)", "Conceptos básicos y aplicaciones de ML", "2024-06-28", 0, 3);

select * from clases;

insert into bloques values (default, "Introducción a Python - Bloque 1", 1, 3, "ejemplo.archivo", 1);
insert into bloques values (default, "Introducción a Python - Bloque 2", 0, 2, "documento.archivo", 1);
insert into bloques values (default, "Introducción a Python - Bloque 3", 1, 5, "video.archivo", 1);
insert into bloques values (default, "Introducción a Python - Bloque 4", 0, 4, "imagen.archivo", 1);
insert into bloques values (default, "Introducción a Python - Bloque 5", 1, 1, "archivo.archivo", 1);
insert into bloques values (default, "Introducción a Python - Bloque 6", 0, 3, "video.archivo", 1);
insert into bloques values (default, "Introducción a Python - Bloque 7", 1, 3, "video.archivo", 1);
insert into bloques values (default, "Introducción a Python - Bloque 8", 1, 5, "video.archivo", 1);
insert into bloques values (default, "Desarrollo Web con HTML y CSS - Bloque 1", 1, 3, "ejemplo.archivo", 2);
insert into bloques values (default, "Desarrollo Web con HTML y CSS - Bloque 2", 0, 2, "documento.archivo", 2);
insert into bloques values (default, "Desarrollo Web con HTML y CSS - Bloque 3", 1, 5, "video.archivo", 2);
insert into bloques values (default, "Desarrollo Web con HTML y CSS - Bloque 4", 0, 4, "imagen.archivo", 2);
insert into bloques values (default, "Desarrollo Web con HTML y CSS - Bloque 5", 1, 1, "archivo.archivo", 2);
insert into bloques values (default, "Desarrollo Web con HTML y CSS - Bloque 6", 0, 3, "video.archivo", 2);

select * from bloques;


insert into usuario_curso values (default, 1, 2);
insert into usuario_curso values (default, 1, 3);
insert into usuario_curso values (default, 1, 1);
insert into usuario_curso values (default, 1, 4);
insert into usuario_curso values (default, 1, 5);
insert into usuario_curso values (default, 2, 3);
insert into usuario_curso values (default, 2, 1);
insert into usuario_curso values (default, 2, 5);
insert into usuario_curso values (default, 3, 1);
insert into usuario_curso values (default, 3, 2);
insert into usuario_curso values (default, 4, 1);
insert into usuario_curso values (default, 1, 7);
insert into usuario_curso values (default, 2, 7);
insert into usuario_curso values (default, 3, 7);
insert into usuario_curso values (default, 3, 6);
insert into usuario_curso values (default, 3, 3);

insert into usuario_curso values (default, 4, 8);
insert into usuario_curso values (default, 4, 9);
insert into usuario_curso values (default, 4, 2);

insert into usuario_curso values (default, 5, 1);
insert into usuario_curso values (default, 9, 1);
insert into usuario_curso values (default, 8, 1);

select * from usuario_curso;