# Catálogo de Productos

Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) versión 19.2.10.

Repositorio en GitHub: [https://github.com/franklin-salas/project-product-catalog.git](https://github.com/franklin-salas/project-product-catalog.git)

En este repositorio se encuentran las paractica-03, practica-04, practica-05 y practica-06
rama
main* - >practica-06
La practica-06 ya ya esta en el main, requiere configuracion de Environments ya que consume directo de una api 'https://fakestoreapi.com'.

## Requisitos previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión recomendada: 22.15.0 )
- [Angular CLI](https://angular.io/cli)

## Instalación

Clona el repositorio y navega al directorio del proyecto:

```bash
git clone https://github.com/franklin-salas/project-product-catalog.git
cd project-product-catalog

Para iniciar el servidor de desarrollo local, ejecuta:

npm install
ng serve

```

### Environments

```bash
ng generate environments

```
environment.ts
```ts
export const environment = {
  production: true,
  apiUrl: 'https://fakestoreapi.com'
};
```
environment.development.ts
```ts
export const environment = {
  production: false,
  apiUrl: 'https://fakestoreapi.com'
};
```


## Archivos de configuración de rutas

La configuración de rutas del proyecto está distribuida en los siguientes archivos:

- `src/app/app.routes.ts`
- `src/app/product-catalog/product-catalog.route.ts`
- `src/app/shopping-carts/shopping-carts.route.ts`

Este proyecto es una aplicación Angular que:

- Se conecta a una API para obtener productos.
- Muestra productos con paginación usando scroll infinito.
- Maneja errores de red usando interceptores y `SweetAlert`.

---

## 🚀 Funcionalidad

### 🔌 1. Conexión a una API

Se usa un servicio (`ProductService`) que hace una petición HTTP a la API de productos:

```ts
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>('https://fakestoreapi.com/products');
}
```
  Lista de productos
> ![api-productos](/preview/api-productos.png)

  Detalle de producto
> ![product-detail](/preview/product-detail.png)

  Carrito de Compras
> ![shopping-carts](/preview/shopping-carts.png)


---

### 🔄 2. Paginación con Scroll Infinito

La paginación se implementa usando el paquete `ngx-infinite-scroll`, mostrando productos conforme el usuario hace scroll hacia abajo.

#### Componente TypeScript

```ts
products: Product[] = [];
allProducts: Product[] = [];
page = 0;
itemsPerPage = 10;
loading = true;
error = false;

ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next: (data) => {
      this.allProducts = data;
      this.loadMore();
      this.loading = false;
    },
    error: () => {
      this.loading = false;
      this.error = true;
    }
  });
}

onScroll(): void {
  this.loadMore();
}

loadMore(): void {
  const next = this.allProducts.slice(this.page * this.itemsPerPage, (this.page + 1) * this.itemsPerPage);
  this.products = [...this.products, ...next];
  this.page++;
}
```
  Lista de productos de 8 en 8
>  ![scroll-infinito](/preview/scroll-infinito.png)

---

### ⚠️ 3. Manejo de Errores con Interceptor

Se usa un interceptor global (`HttpErrorInterceptor`) para detectar errores de red y mostrar alertas visuales con SweetAlert2.

#### Código del interceptor

```ts
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

export const HttpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      if (!navigator.onLine) {
        Swal.fire({
          icon: 'error',
          title: 'Sin conexión a internet',
          text: 'Por favor, revisa tu red.',
          confirmButtonText: 'Aceptar'
        });
      } else if (error.status === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Error de conexión',
          text: 'No se pudo conectar con el servidor.',
          confirmButtonText: 'Aceptar'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: `Error ${error.status}`,
          text: error.message,
          confirmButtonText: 'Aceptar'
        });
      }

      return throwError(() => error);
    })
  );
};
```
  Lista de productos
> ![network-error-list](/preview/network-error-list.png)

  Detalle de Producto
> ![network-error-product](/preview/network-error-product.png)

