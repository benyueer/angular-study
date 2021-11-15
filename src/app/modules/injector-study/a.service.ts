import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MyAService {
  public data = 123
}

export class NumberService {
  num: number = 100
}

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  flower = '🌺'
}

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  flower = '🐳'
}
