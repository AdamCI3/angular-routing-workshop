import { Component , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
constructor(private route: ActivatedRoute) { };
ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
}
id: number | null = Number(this.route.snapshot.paramMap.get('id'))

 
}
