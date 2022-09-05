import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GraphService } from 'src/app/service/graph.service';

import { ChartOptions, ChartType, ChartDataset, Chart, registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-do-graphs',
  templateUrl: './do-graphs.component.html',
  styleUrls: ['./do-graphs.component.css']
})
export class DoGraphsComponent implements OnInit {

  @ViewChild('lineCanvas') lineCanvas!: ElementRef;
  public lineChart: any;
  private voltage: any = [];
  private temperature: any = [];

  constructor(private graphService:GraphService) { 
    this.getDatos()
  }

  ngOnInit(): void {
  }

  public getDatos(): void{
    let graphs:any;
    this.graphService.getGraphs().subscribe(resp=>{
      let respuesta = resp;
      respuesta.forEach((elemento:any) =>{
        this.voltage.push(elemento.voltage);
        this.temperature.push(elemento.temperature);
      })
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: 'line',
          data: {
              labels: this.voltage,
              datasets: [{
                  label: 'Voltage vs Temperature',
                  data: this.temperature,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });    
      console.log(this.voltage);
      console.log(this.temperature);
    });
  }

}
