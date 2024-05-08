import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeaturedCard({ title, description,button, size, styles, type}) {
  return (
    <Card
      className={` ${
        styles ? "w-[800px] h-[300px] m-4 justify-between flex" : "w-[450px]"
      }`}
    >
      <div className="w-60 h-44 ">img</div>
      <div className={` ${styles ? "flex-col flex   justify-between" : ""}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          {styles ? <CardDescription>content</CardDescription> : ""}
        </CardHeader>
        <CardFooter className="flex justify-between">
          {styles ? (
            <div>
              <h3>12 participants</h3>
              <Button>Join Now</Button>
            </div>
          ) : (
            <div>
              <Button className="mr-2" variant="outline">
                {button?button:"Blog"}
              </Button>
              <Button>View</Button>
            </div>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
