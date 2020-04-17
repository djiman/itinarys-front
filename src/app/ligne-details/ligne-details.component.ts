import { LigneDTO } from '../ligne';
import { Component, OnInit, Input } from '@angular/core';
import { LigneService } from '../ligne.service';
import { LigneListComponent } from '../ligne-list/ligne-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ligne-details',
  templateUrl: './ligne-details.component.html',
  styleUrls: ['./ligne-details.component.css']
})
export class LigneDetailsComponent implements OnInit {

  nomLigne: string;
  ligne: LigneDTO;

  constructor(private route: ActivatedRoute,private router: Router,
    private ligneService: LigneService) { }

    ngOnInit() {
      this.ligne = new LigneDTO();
  
      this.nomLigne = this.route.snapshot.params['nomLigne'];
      
      this.ligneService.getLigne(this.nomLigne)
        .subscribe(data => {
          console.info(data)
          this.ligne = data;
        }, error => console.log(error));
        console.info(this.ligne);
    }

  list(){
    this.router.navigate(['lignes']);
  }

}
