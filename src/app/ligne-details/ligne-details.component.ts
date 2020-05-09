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
          this.ligne = data;
          this.computeCoordonneesArrets(this.ligne);
        }, error => console.log(error));
    }

  list(){
    this.router.navigate(['lignes']);
  }

  public IsGareDepartOuTerminus(gareType:String) {
    return (gareType === 'D') || (gareType === 'T');
  }

  public computeCoordonneesArrets(ligne:LigneDTO) {
    /** Variabliser les intervalles en fonction du nombre de gares */
    var intervalle:number = 40;
    ligne.garesDto.forEach(element => {
      element.coordonnee = element.ordre * intervalle;      
    });
    ligne.intervalleArret = intervalle;
  }

}
