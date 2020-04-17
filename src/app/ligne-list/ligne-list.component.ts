import { Observable } from "rxjs";
import { LigneService } from "../ligne.service";
import { LigneDTO } from "../ligne";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ligne-list',
  templateUrl: './ligne-list.component.html',
  styleUrls: ['./ligne-list.component.css']
})
export class LigneListComponent implements OnInit {
  lignes: Observable<LigneDTO[]>;
  constructor(private ligneService: LigneService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.lignes = this.ligneService.getLignes();
  }

  ligneDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
