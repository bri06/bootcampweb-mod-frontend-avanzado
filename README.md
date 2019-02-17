# bootcampweb-mod-frontend-avanzado

Práctica de frontend avanzado del bootcamp web de keepCoding:

Historias de usuario a realizar:

1. Un usuario deberá acceder a una web pública desde cualquier dispositivo. Una gran parte
de los usuario lo hará desde un dispositivo móvil. (IMPORTANTE -> Tener en cuenta al
crear el proyecto)
2. Un usuario deberá ver listadas las cervezas que nuestro proveedor nos ofrece en un
listado.
3. El usuario en la página principal deberá filtrar por texto y limitar los resultados a 10 max.
Además de añadir otro filtro por fecha.
4. Para filtrar por texto, el cliente tiene como única especificación de diseño que el buscador
de texto este en un header con una imagen de fondo. (Dicha imagen tendrá que ser
adaptada como en el curso)
5. Un usuario podrá navegar al detalle de una cerveza. Dicho detalle tiene que tener más
información del API de nuestro proveedor que en el listado.
6. En dicho detalle el usuario tiene que tener la posibilidad de guardar un comentario acerca
de ese producto o añadir likes a dicho producto. El cliente para la primera fase quiere al
menos una de esas funcionalidades. Si es posible, tener ambas seria un plus para
nuestros usuarios.

Pasos a realizar:

```shell
npm install
```

Para desarrollo:
```shell
npm run start:dev
```

Para lanzarlo en producción:
```shell
npm run prod
```

Para ver la web en producción podemos lanzar el servidor http-server:
Para instalarlo:
```shell
npm install http-server -g
```

Para usarlo:
```shell
http-server dist
```