import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post!: Post;

  constructor(
    private router:Router,
    private ActivatedRoute:ActivatedRoute,
    private postsService: PostsService) {

     }

  ngOnInit(): void {
    const postId: number = this.ActivatedRoute.snapshot.params["postId"];
    this.postsService.getPostById(postId).subscribe(
      result => {
        this.post = result;
      }
    )
  }

  sentHome(): void {
    this.router.navigate(["/posts"])
  }

}
