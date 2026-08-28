import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Navheader } from "../../components/navheader/navheader";

@Component({
  selector: 'app-home',
  imports: [RouterLink, Navheader],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

}
