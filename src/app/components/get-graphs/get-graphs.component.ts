import { Component, OnInit } from '@angular/core';
import { GraphService } from 'src/app/service/graph.service';

@Component({
  selector: 'app-get-graphs',
  templateUrl: './get-graphs.component.html',
  styleUrls: ['./get-graphs.component.css']
})
export class GetGraphsComponent implements OnInit {

  Graphs: any; 
  public page!: number;

  constructor(private graphservice:GraphService) { }

  ngOnInit(): void {
    this.graphservice.getGraphs().subscribe((response)=>{
      this.Graphs=response;
    })
  }

}
