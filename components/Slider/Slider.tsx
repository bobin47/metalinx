import Slider from "react-slick";
import "./Slider"
import Image from "next/image";
import styled from "styled-components";

const WrapperSliderStyle = styled(Slider)`
    padding-top: 25px;
    border-radius: 50px;
    & .slick-arrow.slick-prev {
        left: 12px;
        top: 50%;
        z-index: 10;
        &::before {
            font-size: 40px;
            color: #fff;
        }
    }
    & .slick-arrow.slick-next {
        right: 28px;
        top: 50%;
        z-index: 10;
        &::before {
            font-size: 40px;
            color: #fff;
        }
    }
    & .slick-dots {
        z-index: 10;
        bottom: -2px !important;
        li {
            button {
                &::before {
                    color: rgb(255, 255, 0.5);
                }
            }
        }
        li.active {
            button {
                &::before {
                    color: #fff;
                }
            }
        }
    }
`



export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <WrapperSliderStyle {...settings}>
            <div >
                <Image
                    style={{ borderRadius: "10px" }}
                    src="/slide.png"
                    width={1185}
                    height={450.96}
                    alt="Picture of the author" />
            </div>

            <div >
                <Image
                    style={{ borderRadius: "10px" }}
                    src="/slide.png"
                    width={1185}
                    height={450.96}
                    alt="Picture of the author" />
            </div>
            <div style={{ borderRadius: "10px" }}>
                <Image
                    style={{ borderRadius: "10px" }}
                    src="/slide.png"
                    width={1185}
                    height={450.96}
                    alt="Picture of the author" />
            </div>
        </WrapperSliderStyle>
    );
}