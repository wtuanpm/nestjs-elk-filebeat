const ecsFormat = require('@elastic/ecs-winston-format')

import { WinstonModule } from "nest-winston";
import * as winston from "winston";

export const logger = WinstonModule.createLogger({
    format: ecsFormat(),
    transports:  [ 
        new winston.transports.Console({
          
        }),
        new winston.transports.File({
            filename:'./aaa.log'
        })
    ]
  });
