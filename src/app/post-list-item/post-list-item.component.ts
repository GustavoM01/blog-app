import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() 
  post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
