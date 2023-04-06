import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, timeout } from "rxjs";

// @Injectable() indica que pude servir como provider y que puede ser inyectada en constructor
// via parametro de contructor del nestjs dependency injection
@Injectable()
export class TimeOutInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>
        ): Observable<any> | Promise<Observable<any>> {            
            // si a los 2 minutos no hemos recibido una excepcion, se activa este interceptor
            // envía un error 500 y un mensaje de timeout has ocurred
            return next.handle().pipe(timeout(120000));
    }

}