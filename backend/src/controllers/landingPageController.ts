import {
  Controller,
  Get,
  Request as RequestDecorator,
  Response as ResponseDecorator
} from '@decorators/express'
import { Request, Response } from 'express'
import path from 'path'


@Controller('/')
export default class LandingPageController {
  @Get('/')
  public landingPage(
    @RequestDecorator() req: Request,
    @ResponseDecorator() res: Response
  ) {
    res.sendFile(path.resolve(__dirname, '../frontend/index.html'))
  }
}
