import Image from "next/image";
import photo from "./image.png";

export default function Experience() {
  return (
    <div>
      <h2 className="text-text-primary py-10 text-center">Comming Soon</h2>
      <Image
        src={photo}
        alt="Coming Soon"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
}
