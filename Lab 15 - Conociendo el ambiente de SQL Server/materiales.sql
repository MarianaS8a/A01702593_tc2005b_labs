BULK INSERT a1702593.a1702593.[Materiales]
   FROM 'e:\wwwroot\a1702593\materiales.csv'
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

BULK INSERT a1702593.a1702593.[Proyectos]
   FROM 'e:\wwwroot\a1702593\proyectos.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SET DATEFORMAT dmy

BULK INSERT a1702593.a1702593.[Entregan]
   FROM 'e:\wwwroot\a1702593\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT * FROM Proveedores