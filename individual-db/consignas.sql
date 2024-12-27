use playground;

-- 1. OBTENER LOS 5 CURSOS CON MAS UNIDADES orden descendente por el numero de unidades

select cursos.titulo as "CURSOS CON MAS UNIDADES", count(unidades.id_curso) as "NUMERO DE UNIDADES"
from unidades
inner join cursos on unidades.id_curso = cursos.id
group by id_curso
order by count(unidades.id_curso) DESC
limit 5;


-- 2. MEDIA DE UNIDADES POR CURSO? agrupados por el titulo del curso

select cursos.titulo as "CURSO", avg(unidades_p_curso) as "PROMEDIO DE UNIDADES P/CURSO" from (
	select count(unidades.id_curso) as unidades_p_curso, cursos.id as id_curso
	from cursos
	inner join unidades on cursos.id = unidades.id_curso
	group by cursos.id
) as promedio
inner join cursos on id_curso = cursos.id
group by cursos.id; 


-- 3. USUARIOS ASOCIADOS A MAS DE 3 CURSOS ordenados en orden ascendente por el nombre del usuario

select usuarios.nombre as "USUARIO", count(usuario_curso.id_usuario) as "CURSOS ASOCIADOS"
from usuario_curso
inner join usuarios on usuarios.id = usuario_curso.id_usuario
group by id_usuario
having count(usuario_curso.id_usuario) > 3
order by usuarios.nombre ASC;


-- 4. PRIMERAS 10 CLASES QUE COMIENZAN DESPUES DE UNA FECHA DETERMINADA orden ascendente por fecha de inicio

select titulo as "CLASE", inicio as "INICIO"
from clases
where inicio > "2024-05-17" -- fecha determinada
order by inicio ASC
limit 10;


-- 5. NUMERO DE BLOQUES POR TIPO PARA CLASE ESPECIFICA agrupados por tipo de bloque

select tipos_de_bloque.tipo as "TIPO DE BLOQUE", count(bloques.id_tipo) as "CANTIDAD"
from clases
inner join bloques on clases.id = bloques.id_clase
inner join tipos_de_bloque on bloques.id_tipo = tipos_de_bloque.id
where clases.id = 1 -- clase especifica
group by bloques.id_tipo;


-- 6. NOMBRE Y APELLIDO DE USUARIOS, SUSTITUYENDO NULOS POR CADENAS VACIAS

select coalesce(nombre, "") as "NOMBRE", coalesce(apellido, "") as "APELLIDO"
from usuarios;


-- 7. 3 CURSOS CON MAS USUARIOS orden descentente por numero de usuarios

select cursos.titulo as "CURSOS CON MAS USUARIOS", count(usuario_curso.id_usuario) as "CANTIDAD DE USUARIOS"
from cursos
inner join usuario_curso on cursos.id = usuario_curso.id_curso
group by id_curso
order by count(usuario_curso.id_usuario) desc
limit 3;


-- 8. PROMEDIO DE CLASES POR UNIDAD PAR CADA CURSO agrupados por el titulo del curso

select cursos.titulo as "CURSO", avg(clases_p_unidad) as "PROMEDIO DE CLASES P/UNIDAD" from (
	select count(clases.id_unidad) as clases_p_unidad, unidades.id_curso as id_curso
	from clases
	inner join unidades on clases.id_unidad = unidades.id
	group by unidades.id
) as promedio
inner join cursos on id_curso = cursos.id
group by cursos.id;


-- 9. USUARIOS CON MAS DE 2 CURSOS QUE COMIENZAN DESPUES DE FECHA DETERMINADA orden ascendente por nombre de usuario

select usuarios.nombre as "NOMBRE", usuarios.apellido as "APELLIDO", count(usuario_curso.id_usuario) as "CANT/CURSOS A LOS QUE ESTAN ANOTADOS QUE EMPIEZAN DESPUES DE LA FECHA"
from usuarios
inner join usuario_curso on usuario_curso.id_usuario = usuarios.id
inner join cursos on usuario_curso.id_curso = cursos.id
where cursos.inicio > "2024-01-01" -- fecha determinada
group by usuarios.id
having count(usuario_curso.id_usuario) > 2
order by usuarios.nombre asc;


-- 10. ULTIMAS 5 UNIDADES QUE COMIENZAN DESPUES DE FECHA DETERMINADA orden descendente por fecha de inicio

select titulo, inicio
from unidades
where inicio > "2024-03-01" -- fecha determinada
order by inicio desc
limit 5;


-- 11. NUMERO DE USUARIOS POR CATEGORIA PARA UN CURSO ESPECIFICO agrupado por categoria del usuario

select categorias_de_usuario.categorias as "CATEGORIAS", count(usuarios.id) as "CANTIDAD EN EL CURSO"
from categorias_de_usuario
inner join usuarios on usuarios.id_categoria = categorias_de_usuario.id
inner join usuario_curso on usuarios.id = usuario_curso.id_usuario
where usuario_curso.id_curso = 3 -- curso especifico
group by categorias_de_usuario.categorias;