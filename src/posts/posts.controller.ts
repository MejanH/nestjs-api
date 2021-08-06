import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('posts')
export class PostsController {
  @Get()
  findAll(@Req() request: Request) {
    return {};
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `the requested post id is ${id}`;
  }

  @Post('create')
  createPost(@Req() request: Request) {
    return request.body;
  }
}
