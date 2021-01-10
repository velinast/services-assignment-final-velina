import {UserService} from './UserService.service';

export class CounterService {
  toActiveCounter = 0;
  toInactiveCounter = 0;


  incrementtoActiveCounter(){
    this.toActiveCounter++;
    console.log('Status changed to Active ' + this.toActiveCounter);
  }

  incrementtoInactiveCounter(){
    this.toInactiveCounter++;
    console.log('Status changed to Inactive ' + this.toInactiveCounter);
  }
}
