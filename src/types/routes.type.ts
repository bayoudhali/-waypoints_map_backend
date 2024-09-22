export type Waypoint = {
  lat: number;
  lng: number;
};

export type Route = {
  id: number;
  name: string;
  waypoints: Waypoint[];
};
