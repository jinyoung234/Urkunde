import { LocationWrapper } from "./style";

interface LocationProps {
  location: string;
}

export default function Location({ location }: LocationProps) {
  return <LocationWrapper>{location}</LocationWrapper>;
}
