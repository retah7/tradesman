export class MostActivePutsResponse {
  data: [];
  dateObj: any;
  id: number;
  time: string;

  constructor(response) {
    this.data = response.data;
    this.dateObj = new Date(response.time);
    this.id = new Date(response.time).getTime();
    this.time = response.time;
  }

}
