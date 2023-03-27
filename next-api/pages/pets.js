import Image from "next/image";
import mice from "../public/assets/images/mice.jpg";

export default function PetsPage() {
  return (
    <>
      <div key="cat-and-dog">
        <Image
          src="/assets/images/cat-and-dog.jpg"
          height="100"
          width={100}
          alt="cat and dog"
        />
      </div>
      <div key="confused-cat">
        <img
          src="/assets/images/confused-cat.jpg"
          height="100"
          alt="Confused cat"
        />
      </div>
      <div key="doggo-trio">
        <img
          src="/assets/images/doggo-trio.jpg"
          height="100"
          alt="Doggo trio"
        />
      </div>
      <div key="mice">
        <Image
          src={mice}
          placeholder="blur"
          height="280"
          width="420"
          alt="Mice"
        />
      </div>
      <div key="doggo">
        <img src="/assets/images/doggo.jpg" height="100" alt="Doggo" />
      </div>
    </>
  );
}
