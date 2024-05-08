import Image from "next/image";
// export {DropdownMenuDemo} from '../components/navigation'
import { ButtonDemo } from "../components/button";
import NavigationMenu from "../components/navigation";
import  CarouselTop  from "../components/carousel";
import { Card, FeaturedCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// export function ButtonDemo() {
//   return <Button>Button</Button>
// }
let cardData = [
  { h: "Heat Stroke Amid rising temp", c: "POSTED ON APR 15 2024", b: "Blog" },
  { h: "Water Scarcity- Bengaluru", c: "POSTED ON APR 15 2024", b: "Discuss" },
  {
    h: "Water saving initiative ",
    c: "POSTED ON APR 15 2024",
    b: "Testimonial",
  },
];
let cardData2 = [
  { h: "The med talk", c: "POSTED ON APR 15 2024" },
  { h: "Healthy Brain", c: "POSTED ON APR 15 2024" },
];
let cardData3 = [
  { h: "Manipal hospital", c: "POSTED ON APR 15 2024" },
  { h: "Manipal hospital", c: "POSTED ON APR 15 2024" },
  { h: "Heat Stroke Amid rising temp", c: "POSTED ON APR 15 2024" },
];
let typeData = [
  "ALL SPECIALITIES",
  "INFORMATIVE MEDICAL",
  "INTERNAL MEDICINE",
  "CARDIOLOGY",
  "OBG",
  "ORTHOPEDIC",
  "NEUROLOGY",
  "View All",
];
export default function Home() {
  return (
    <main>
      {/* navbar */}

      <div className="flex mt-24 border-1 border-indigo-600 h-[400px] justify-center  ">
        {/* <CarouselTop /> */}
        <div className="h-60">CarouselTop</div>
      </div>
      {/* featured */}
      <div className="px-8 pb-10 bg-sky-700">
        <h1 className="font-bold	text-5xl text-white p-5 ">Featured</h1>
        <div className="flex justify-around">
          {cardData.map((ele) => (
            <FeaturedCard title={ele.h} description={ele.c} button={ele.b} />
          ))}
        </div>
      </div>

      {/* <div className="flex">
      {cardData.map((ele) => (
            <FeaturedCard width={50} />
          ))}
      </div> */}

      <div className="flex px-8 py-10">
        {typeData.map((item, index) => (
          <div
            key={index}
            className={`w-40 m-2 h-36 border-2 border-teal-400  rounded-md overflow-hidden ${
              item === "View All" ? "bg-white" : "bg-teal-500"
            }`}
          >
            <div
              className={`flex justify-center text-center   ${
                item === "View All" ? "text-black" : "text-white"
              } font-bold items-center h-full`}
            >
              <span>
                <Link href="/blog/hello-world">{item}</Link>
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Trending Discussions */}
      <div className="px-8 py-10 max-w-max ">
        <h1 className="font-bold	text-5xl text-black p-5 ">
          Trending Discussions
        </h1>
        <div>
          <div className="flex justify-around m-6">
            {cardData2.map((ele) => (
              <FeaturedCard title={ele.h} description={ele.c} styles="flex" />
            ))}
          </div>
          <div className="flex justify-around m-6">
            {cardData2.map((ele) => (
              <FeaturedCard title={ele.h} description={ele.c} styles="flex" />
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline">View All</Button>
          </div>
        </div>
      </div>
      {/* blog */}
      <div className="px-8 pb-10 bg-white">
        <h1 className="font-bold	text-5xl text-black p-5 ">Blogs</h1>
        <div className="flex justify-around">
          {cardData3.map((ele) => (
            <FeaturedCard title={ele.h} description={ele.c} type="blog" />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="outline">View All</Button>
        </div>
      </div>

      {/* medical tales */}
      <div className="px-8 py-10 max-w-max bg-teal-100 ">
        <h1 className="font-bold	text-5xl text-black p-5 ">Medical Tales</h1>
        <div>
          <div className="flex justify-around m-6">
            {cardData2.map((ele) => (
              <FeaturedCard title={ele.h} description={ele.c} styles="flex" />
            ))}
          </div>
          <div className="flex justify-around m-6">
            {cardData2.map((ele) => (
              <FeaturedCard title={ele.h} description={ele.c} styles="flex" />
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline">View All</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
