import { LigneDTO } from '../ligne';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LigneService } from '../ligne.service';
import { LigneListComponent } from '../ligne-list/ligne-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; 

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
    var intervalle:number = 60;
    ligne.garesDto.forEach(element => {
      element.coordonnee = element.ordre * intervalle;      
    });
    ligne.intervalleArret = intervalle;
  }
  
  public downloadAsPDF() {
    
    const element = document.getElementById('ligneDiv'),
        options = {
            imageTimeout: 2000,
            background: "white",
            allowTaint : true,
            useCORS: false,
            height: element.clientHeight,
            width: element.clientWidth
       };
    
       html2canvas(element, options).then((canvas) => {
        let imgData = canvas.toDataURL('image/png');

        let imgWidth = 210,
            pageHeight = 295,
            imgHeight = canvas.height * imgWidth / canvas.width,
            heightLeft = imgHeight,
            doc = new jsPDF('l', 'mm'),
            position = 50;

        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        doc.save(this.nomLigne+'.pdf'); 
    });

}
}
