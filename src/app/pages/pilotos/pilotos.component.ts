import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { F1ApiService } from '../../services/f1-api.service';

@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css']
})
export class PilotosComponent implements OnInit {
  pilotos: any[] = [];
  equipeId!: string;

  constructor(private route: ActivatedRoute, private f1ApiService: F1ApiService) { }

  ngOnInit(): void {
    this.equipeId = this.route.snapshot.paramMap.get('id')!;
    const anoAtual = 2024;
    this.f1ApiService.getPilotsByTeam(this.equipeId, anoAtual).subscribe(
    (data:any) => {
        this.pilotos = data.MRData.DriverTable.Drivers; 
      },
      error => {
        console.error('Erro ao carregar pilotos:', error);
      }
    );
  }
}


