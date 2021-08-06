import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { PostType } from './interfaces/post';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get()
  async findAll(): Promise<PostType[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `the requested post id is ${id}`;
  }

  @Post('create')
  async create(@Body() body: CreatePostDto) {
    this.postsService.create(body);
  }
}
