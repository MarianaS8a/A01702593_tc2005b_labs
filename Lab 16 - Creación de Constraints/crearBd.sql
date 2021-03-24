
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')
DROP TABLE Materiales

CREATE TABLE Materiales
(
  Clave numeric(5) not null,
  Descripcion varchar(50),
  Costo numeric (8,2)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')
DROP TABLE Proveedores

CREATE TABLE Proveedores
(
  RFC char(13) not null,
  RazonSocial varchar(50)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')
DROP TABLE Proyectos

CREATE TABLE Proyectos
(
  Numero numeric(5) not null,
  Denominacion varchar(50)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')
DROP TABLE llaveEntregan

CREATE TABLE Entregan
(
  Clave numeric(5) not null,
  RFC char(13) not null,
  Numero numeric(5) not null,
  Fecha DateTime not null,
  Cantidad numeric (8,2)
)

BULK INSERT a1702593.a1702593.[Materiales]
  FROM 'e:\wwwroot\a1702593\materiales.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

BULK INSERT a1702593.a1702593.[Proyectos]
  FROM 'e:\wwwroot\a1702593\proyectos.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

BULK INSERT a1702593.a1702593.[Proveedores]
  FROM 'e:\wwwroot\a1702593\proveedores.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

SET DATEFORMAT dmy -- especificar formato de la fecha

BULK INSERT a1702593.a1702593.[Entregan]
  FROM 'e:\wwwroot\a1702593\entregan.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

--INSERT INTO Materiales values(1000, 'xxx', 1000)

--SELECT * FROM Entregan

--Delete from Materiales where Clave = 1000 and Costo = 1000

ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)
ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC)
ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero)
ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY (Clave,RFC,Numero,Fecha)

--sp_helpconstraint Entregan

--INSERT INTO entregan values (0, 'xxx', 0, '1-jan-02', 0)

--Delete from Entregan where Clave = 0

ALTER TABLE entregan add constraint cfentreganclave
foreign key (clave) references materiales(clave);
ALTER TABLE entregan add constraint cfentreganRFC
foreign key (RFC) references proveedores(RFC);
ALTER TABLE entregan add constraint cfentreganNumero
foreign key (Numero) references Proyectos(Numero);

--sp_helpconstraint Entregan

--INSERT INTO entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);

--Delete from Entregan where Cantidad = 0

--ALTER TABLE Entregan add constraint cantidad check (cantidad > 0) ;
