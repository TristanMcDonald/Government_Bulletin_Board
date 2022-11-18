import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  posts:{_id:string, subject:string, description:string, __v:string}[] = [];

  constructor(public postservice: PostServiceService) { }
  //https:stackoverflow
  private postsubscription!: Subscription;

  ngOnInit() {
    this.postservice.getpost_service();
    this.postsubscription = this.postservice.getUpdateListener()
    .subscribe((posts: any)=>
    {
      this.posts = posts;
    });
  }

  ngOnDestroy()
  {
    this.postsubscription.unsubscribe();
  }

  ondelete(postid: string) {
    this.postservice.deletepost_service(postid)
  }

}
