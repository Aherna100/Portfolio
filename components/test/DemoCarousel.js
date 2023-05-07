import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
import { ContainerComponent } from "./ContainerComponent";

export const DemoCarousel = ({ data }) => {

    return (
        <Carousel showThumbs={false}>
            {data.map((item, index) => (
                <div key={index}>
                    <ContainerComponent item={item} />
                </div>
            ))}
        </Carousel>
    )
}