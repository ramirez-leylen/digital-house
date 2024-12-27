CREATE TABLE `playground`.`tipos_de_bloque` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `playground`.`cursos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `imagen` mediumtext DEFAULT NULL,
  `inicio` date NOT NULL,
  `finalizacion` date NOT NULL,
  `cupo_maximo` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `playground`.`unidades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `inicio` date NOT NULL,
  `id_curso` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY  (`id_curso`) references cursos(id)
);

CREATE TABLE `playground`.`clases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `inicio` date NOT NULL,
  `visibilidad` bit(1) NOT NULL,
  `id_unidad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_unidad`) references unidades(id)
);

CREATE TABLE `playground`.`bloques` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `visibilidad` BIT(1) NOT NULL,
  `id_tipo` INT NOT NULL,
  `contenido` VARCHAR(300) NOT NULL,
  `id_clase` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_tipo`) references tipos_de_bloque(id),
  FOREIGN KEY (`id_clase`) references clases(id)
  );

CREATE TABLE `playground`.`categorias_de_usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `categorias` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
  );
  
CREATE TABLE `playground`.`usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `apellido` varchar(30) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `contraseña` varchar(20) NOT NULL,
  `id_categoria` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_categoria`) references categorias_de_usuario(id)
);

CREATE TABLE `playground`.`usuario_curso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `id_curso` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_usuario`) references usuarios(id),
  FOREIGN KEY (`id_curso`) references cursos(id)
);

