
--creaMaterial
IF EXISTS (SELECT name FROM sysobjects
    WHERE name = 'creaMaterial' AND type = 'P')
    DROP PROCEDURE creaMaterial
GO

CREATE PROCEDURE creaMaterial
    @uclave NUMERIC(5,0),
    @udescripcion VARCHAR(50),
    @ucosto NUMERIC(8,2),
    @uimpuesto NUMERIC(6,2)
AS
    INSERT INTO Materiales VALUES(@uclave, @udescripcion, @ucosto, @uimpuesto)
GO

EXECUTE creaMaterial 5000,'Martillos Acme',250,15

--modificaMaterial
IF EXISTS (SELECT name FROM sysobjects
    WHERE name = 'modificaMaterial' AND type = 'P')
    DROP PROCEDURE modificaMaterial
GO

CREATE PROCEDURE modificaMaterial
    @uclave NUMERIC(5,0),
    @udescripcion VARCHAR(50),
    @ucosto NUMERIC(8,2),
    @uimpuesto NUMERIC(6,2)
AS
    UPDATE Materiales 
	SET Descripcion = @udescripcion, costo = @ucosto, PorcentajeImpuesto = @uimpuesto
	WHERE Clave = @uclave
GO

EXECUTE modificaMaterial 1020, 'Varilla 700', 150, 5

--eliminaMaterial
IF EXISTS (SELECT name FROM sysobjects
    WHERE name = 'eliminaMaterial' AND type = 'P')
    DROP PROCEDURE eliminaMaterial
GO

CREATE PROCEDURE eliminaMaterial
    @uclave NUMERIC(5,0)
AS
	DELETE FROM Entregan
	WHERE Clave = @uclave
    DELETE FROM Materiales
	WHERE Clave = @uclave
GO

EXECUTE eliminaMaterial 1050
--SELECT * FROM Materiales

--Proyecto-------------------------------------------------------------------------------------------

--creaProyecto
IF EXISTS (SELECT name FROM sysobjects
    WHERE name = 'creaProyecto' AND type = 'P')
    DROP PROCEDURE creaProyecto
GO

CREATE PROCEDURE creaProyecto
    @uNumero NUMERIC(5),
    @uDenominacion VARCHAR(50)
AS
    INSERT INTO Proyectos VALUES(@uNumero, @uDenominacion)
GO

EXECUTE creaProyecto 5020,'MT Tijuana'

--modificaProyecto
IF EXISTS (SELECT name FROM sysobjects
    WHERE name = 'modificaProyecto' AND type = 'P')
    DROP PROCEDURE modificaProyecto
GO

CREATE PROCEDURE modificaProyecto
    @uNumero NUMERIC(5),
    @uDenominacion VARCHAR(50)
AS
    UPDATE Proyectos 
	SET Denominacion = @uDenominacion
	WHERE Numero = @uNumero
GO

EXECUTE modificaProyecto 5009, 'Chihuahua'

--eliminaProyecto
IF EXISTS (SELECT name FROM sysobjects
    WHERE name = 'eliminaProyecto' AND type = 'P')
    DROP PROCEDURE eliminaProyecto
GO

CREATE PROCEDURE eliminaProyecto
    @uNumero NUMERIC(5)
AS
	DELETE FROM Entregan
	WHERE Numero = @uNumero
    DELETE FROM Proyectos
	WHERE Numero = @uNumero
GO

EXECUTE eliminaProyecto 5013

--SELECT * FROM Proyectos
--Provedorees---------------------------------------------------------------------------------------------------

--creaProveedores
IF EXISTS (SELECT name FROM sysobjects
    WHERE name = 'creaProveedores' AND type = 'P')
    DROP PROCEDURE creaProveedores
GO

CREATE PROCEDURE creaProveedores
    @uRFC CHAR(13),
    @uRazonSocial VARCHAR(50)
AS
    INSERT INTO Proveedores VALUES(@uRFC, @uRazonSocial)
GO

EXECUTE creaProveedores 'IIII800101','Recon'

--modificaProveedores
IF EXISTS (SELECT name FROM sysobjects
    WHERE name = 'modificaProveedores' AND type = 'P')
    DROP PROCEDURE modificaProveedores
GO

CREATE PROCEDURE modificaProveedores
    @uRFC CHAR(13),
    @uRazonSocial VARCHAR(50)
AS
    UPDATE Proveedores 
	SET RazonSocial = @uRazonSocial
	WHERE RFC = @uRFC
GO

EXECUTE modificaProveedores 'CCCC800101', 'RECON2'

--eliminaProveedores
IF EXISTS (SELECT name FROM sysobjects
    WHERE name = 'eliminaProveedores' AND type = 'P')
    DROP PROCEDURE eliminaProveedores
GO

CREATE PROCEDURE eliminaProveedores
    @uRFC CHAR(13)
AS
	DELETE FROM Entregan
	WHERE RFC = @uRFC
    DELETE FROM Proveedores
	WHERE RFC = @uRFC
GO

EXECUTE eliminaProveedores 'AAAA800101'
--SELECT * FROM Proveedores

--Entregan-------------------------------------------------------------------------------------------------------

--creaEntregan
IF EXISTS (SELECT name FROM sysobjects
    WHERE name = 'creaEntregan' AND type = 'P')
    DROP PROCEDURE creaEntregan
GO

CREATE PROCEDURE creaEntregan
    @uClave NUMERIC(5),
    @uRFC CHAR(13),
    @uNumero NUMERIC(5),
    @uFecha DateTime,
    @uCantidad NUMERIC (8,2)
AS
    INSERT INTO Entregan VALUES(@uClave, @uRFC, @uNumero, @uFecha, @uCantidad)
GO

EXECUTE creaEntregan 1030, 'CCCC800101', 5015, '2000-08-06 00:00:00.000', 73.00

--modificaEntregan
IF EXISTS (SELECT name FROM sysobjects
    WHERE name = 'modificaEntregan' AND type = 'P')
    DROP PROCEDURE modificaEntregan
GO

CREATE PROCEDURE modificaEntregan
    @uClave NUMERIC(5),
    @uRFC CHAR(13),
    @uNumero NUMERIC(5),
    @uFecha DateTime,
    @uCantidad NUMERIC (8,2)
AS
    UPDATE Entregan 
	SET Cantidad = @uCantidad
	WHERE Clave = @uClave AND RFC = @uRFC AND Numero = @uNumero AND Fecha = @uFecha
GO

EXECUTE modificaEntregan 1030, 'CCCC800101', 5015, '2000-08-06 00:00:00.000', 120.00

--eliminaEntregan
IF EXISTS (SELECT name FROM sysobjects
    WHERE name = 'eliminaEntregan' AND type = 'P')
    DROP PROCEDURE eliminaEntregan
GO

CREATE PROCEDURE eliminaEntregan
    @uClave NUMERIC(5),
    @uRFC CHAR(13),
    @uNumero NUMERIC(5),
    @uFecha DateTime
AS
	DELETE FROM Entregan
	WHERE Clave = @uClave AND RFC = @uRFC AND Numero = @uNumero AND Fecha = @uFecha
GO

EXECUTE eliminaEntregan 1170, 'BBBB800101', 5017, '1998-02-04 00:00:00.000'
--SELECT * FROM Entregan