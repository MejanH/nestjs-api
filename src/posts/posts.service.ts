import { Injectable } from '@nestjs/common';
import { PostType } from './interfaces/post';

@Injectable()
export class PostsService {
  private readonly posts: PostType[] = [];

  create(post: PostType) {
    this.posts.push(post);
  }
  findAll(): PostType[] {
    return this.posts;
  }
}
