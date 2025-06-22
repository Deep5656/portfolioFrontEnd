import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'turncate'
})
export class TurncatePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        // console.log(args[0],args[1]);
        
       if(value.length> args[0]){     
           return value.substr(0, args[0]) + '...';
       }       
        return value;
    }

}