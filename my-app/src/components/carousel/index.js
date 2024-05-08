import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

 function CarouselTop() {
  return (
<Carousel className="w-[400px] h-100px]">
  <CarouselContent className="">
    {Array.from({ length: 3 }).map((_, index) => (
      <CarouselItem key={index} className="w-5">
        <div className="p-1">
          <Card className="w-full ">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  )
}
export default CarouselTop