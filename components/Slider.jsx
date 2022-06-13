/* eslint-disable @next/next/no-img-element */

import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
function Slider() {
    const [slider, setSlider] = useState([])
    useEffect(() => {
        fetch('https://guarded-garden-69209.herokuapp.com/slider')
            .then(res => res.json())
            .then(data => {
                setSlider(data)
            })
    }, [])
    return (
        <div>
            <Carousel>
                {
                    slider.map((pd) => {
                        return (
                            <Carousel.Item key={pd._id}>
                                <img
                                    className="d-block w-100"
                                    src={pd.img}
                                    alt="First slide"
                                    style={{ height: "400px" }}
                                />
                                <Carousel.Caption>
                                    <h5>{pd.title}</h5>
                                    <Typography>{pd.shortDescription}</Typography>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default Slider