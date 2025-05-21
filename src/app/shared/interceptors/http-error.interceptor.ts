import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
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
