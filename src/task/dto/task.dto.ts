import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";

export class TaskDTO {
    // validaciones con class-validator
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    readonly description: string;

    // validaciones con class-validator
    @IsNotEmpty()
    @IsBoolean()
    readonly isDone: boolean;
}