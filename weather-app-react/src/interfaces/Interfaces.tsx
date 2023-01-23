export interface weatherData {
  name: string;
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    deg: number;
    speed: number;
  };
  message: string;
  cod: number;
}
