import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class AppService implements OnApplicationBootstrap{
  private logger = new Logger();
  onApplicationBootstrap() {
    let count = 0;
    setInterval(()=>  { 
        this.logger.log("message ==================> " + count++, 'app service')
    }, 1000)
  }
  getHello(): string {
    
    return 'Hello World!';
  }
}
