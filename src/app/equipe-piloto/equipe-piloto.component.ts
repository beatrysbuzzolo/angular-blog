import { Component, OnInit } from '@angular/core';
import { F1ApiService } from '../services/f1-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-equipe-piloto',
  templateUrl: './equipe-piloto.component.html',
  styleUrls: ['./equipe-piloto.component.css']
})
export class EquipePilotoComponent implements OnInit {
  equipes: any[] = [];
  pilotos: any[] = [];
  equipeSelecionada: string | null = null;

  bandeirasImages: { [key: string]: string } = {
    'British': 'assets/img-bandeiras/gb.png',
    'Finnish': 'assets/img-bandeiras/fi.png',
    'Argentinian ': 'assets/img-bandeiras/ar.png',
    'French': 'assets/img-bandeiras/fr.png',
    'German': 'assets/img-bandeiras/de.png',
    'Monegasque': 'assets/img-bandeiras/mc.png',
    'Danish': 'assets/img-bandeiras/dk.png',
    'Australian': 'assets/img-bandeiras/au.png',
    'Mexican': 'assets/img-bandeiras/mx.png',
    'Japanese': 'assets/img-bandeiras/jp.png',
    'Dutch': 'assets/img-bandeiras/nl.png',
    'Chinese': 'assets/img-bandeiras/cn.png',
    'American': 'assets/img-bandeiras/us.png',
    'Canadian': 'assets/img-bandeiras/ca.png',
    'Spanish': 'assets/img-bandeiras/es.png',
    'Thai': 'assets/img-bandeiras/th.png',
  };

  

  driversImages: { [key: string]: string } = {
    
    "Alexander Albon": "assets/img-pilotos/Alexander-Albon.jpg",
    "Franco Colapinto": "assets/img-pilotos/Franco-Colapinto.jpg",
    "Pierre Gasly": "assets/img-pilotos/Pierre-Gasly.jpg",
    "Esteban Ocon": "assets/img-pilotos/Esteban-Ocon.jpg",
    "Fernando Alonso": "assets/img-pilotos/Fernando-Alonso.jpg",
    "Lance Stroll": "assets/img-pilotos/Lance-Stroll.jpg",
    "Oliver Bearman": "assets/img-pilotos/Oliver-Bearman.jpg",
    "Charles Leclerc": "assets/img-pilotos/Charles-Leclerc.jpg",
    "Carlos Sainz": "assets/img-pilotos/Carlos-Sainz.jpg",
    "Nico Hülkenberg": "assets/img-pilotos/Nico-Hulkenberg.jpg",
    "Kevin Magnussen": "assets/img-pilotos/Kevin-Magnussen.jpg",
    "Lando Norris": "assets/img-pilotos/Lando-Norris.jpg",
    "Oscar Piastri": "assets/img-pilotos/Oscar-Piastri.jpg",
    "Lewis Hamilton": "assets/img-pilotos/Lewis-Hamilton.jpg",
    "George Russell": "assets/img-pilotos/George-Russell.jpg",
    "Daniel Ricciardo": "assets/img-pilotos/Daniel-Ricciardo.jpg",
    "Yuki Tsunoda": "assets/img-pilotos/Yuki-Tsunoda.jpg",
    "Sergio Pérez": "assets/img-pilotos/Sergio-Perez.jpg",
    "Max Verstappen": "assets/img-pilotos/Max-Verstappen.jpg",
    "Valtteri Bottas": "assets/img-pilotos/Valtteri-Bottas.jpg",
    "Guanyu Zhou": "assets/img-pilotos/Guanyu-Zhou.jpg",
    "Logan Sargeant": "assets/img-pilotos/Logan-Sargeant.jpg",

    
    };
  
  

  constructor(private f1ApiService: F1ApiService, private router: Router) { }

  ngOnInit(): void {
    const anoAtual = 2024;
    this.f1ApiService.getTeams(anoAtual).subscribe(
      (data: any) => {
        this.equipes = data.MRData.ConstructorTable.Constructors;
      },
      error => {
        console.error('Erro ao carregar equipes:', error);
      }
    );
  }

  onTeamSelected(equipeId: string): void {
    this.equipeSelecionada = equipeId;
    this.f1ApiService.getPilotsByTeam(equipeId, 2024).subscribe(
      (data: any) => {
        this.pilotos = data.MRData.DriverTable.Drivers;
      },
      error => {
        console.error('Erro ao carregar pilotos:', error);
      }
    );
  }

  getBandeira(nacionalidade: string): string {
    return this.bandeirasImages[nacionalidade] || 'assets/bandeiras/default.png'; // Imagem padrão se não encontrar
  }

  voltarParaHome(): void {
    this.router.navigate(['/']);
  }
}

