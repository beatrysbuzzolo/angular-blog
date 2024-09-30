import { Component, OnInit } from '@angular/core';
import { F1ApiService } from '../services/f1-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultados-pagina',
  templateUrl: './resultados-pagina.component.html',
  styleUrls: ['./resultados-pagina.component.css']
})
export class ResultadosPaginaComponent implements OnInit {
raceResults: any[] = [];



  constructor(private f1ApiService: F1ApiService, private router: Router) { }

  ngOnInit(): void {
    this.f1ApiService.getAllRaceResults(2024).subscribe(
      (results) => {
        this.raceResults = results;
      },
      (error) => {
        console.error('Erro ao obter os resultados das corridas:', error);
      }
    );
  }

  voltarParaHome(): void {
    this.router.navigate(['/']);
  }
  
}



