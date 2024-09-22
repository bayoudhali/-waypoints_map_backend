export type Waypoint = {
  lat: number;
  lng: number;
};

export type Route = {
  id: string;
  name: string;
  waypoints: Waypoint[];
};
