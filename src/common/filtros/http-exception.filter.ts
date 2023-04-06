import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";

// clase para el manejo global de las excepciones en las peticiones http

@Catch()
export class AllExceptionFilter implements ExceptionFilter {

    private readonly logger = new Logger(AllExceptionFilter.name);

    catch(exception: any, host: ArgumentsHost) {
        
        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();

        const status = exception instanceof HttpException 
            ? exception.getStatus() 
            : HttpStatus.INTERNAL_SERVER_ERROR;

        const msg = exception instanceof HttpException ? exception.getResponse() : exception;

        // ese logger.error hace que se muestre el mensaje en rojo
        this.logger.error(`Status: ${ status }, Error: ${ JSON.stringify(msg) }`);

        response.status(status).json({
            time: new Date().toISOString(),
            path: request.url,
            error: msg
        });
    }

}