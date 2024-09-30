import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class F1ApiService {

  private apiUrl = 'https://ergast.com/api/f1';

  constructor(private http: HttpClient) { }

  getTeams(year: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${year}/constructors.json`);
  }

  getPilotsByTeam(equipeId: string, year: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${year}/constructors/${equipeId}/drivers.json`);
  }

  getRaceResults(year: number, round: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${year}/${round}/results.json`);
  }

  getAllRaceResults(year: number): Observable<any[]> {
    const totalRounds = 18; 
    const raceResultsRequests: Observable<any>[] = [];

    
    for (let round = 1; round <= totalRounds; round++) {
      raceResultsRequests.push(this.getRaceResults(year, round));
    }

    return forkJoin(raceResultsRequests);
  }
}























