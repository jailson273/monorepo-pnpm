import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'
import { AppModule } from '@dentist/modules/app.module'

async function bootstrap() {
  const logger = new Logger('Bootstrap')
  const fastifyAdapter = new FastifyAdapter()
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter
  )
  app.enableCors()
  await app.listen(3100, '0.0.0.0')
  logger.log('server is running in host http://localhost:3100')
}
bootstrap()
