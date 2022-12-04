import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title=""
  author=""
  description=""
  image=""
  publishingDate=""
  content=""

  readValues=()=>
  {
    let data:any={"title":this.title,"author":this.author,"description":this.description,"image":this.image,"publishingDate":this.publishingDate,"content":this.content}
  console.log(data)
  }

}
