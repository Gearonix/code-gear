import { Logger } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"

import { AppModule } from "./app/app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const globalPrefix = "api"
  app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT ?? 6868
  await app.listen(port)
  Logger.log(`🚀 Server is running on port ${port}`)
}

bootstrap()
