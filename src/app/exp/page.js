'use client'

import Header from "../components/Header"
import ImageSlider from "../components/ImageSlider"
import data from '@/data/data.json'

export default function Home(){
    return(
        <>
        <Header />
        <ImageSlider 
        images={[
            "/lala/loli.jpg",
            "/lala/loli2.png",
            "/lala/pngwing.com(4).png",
            "/uploads/1741887767307_salat-cezar-klassicheskii-s-kuricei_1611309202_16_max.jpg",
            "/icon/banner_gl.png"
          ]}
        />
        </>
    )
}