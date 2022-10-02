import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../WomenPage/WomenPage.css'
import { Pagination, Navigation } from 'swiper'
import { Link } from 'react-router-dom'


export const MenSlider = () => {
  const arr = [
    {
      img:
        'https://lmsin.net/cdn-cgi/image/w=1232,q=85,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner1-desktop-WMCOMMON-14JUNE2022.gif',
    },
    {
      img:
        'https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner2-desktop-Men-08JUNE2022.jpg',
    },
    {
      img:
        'https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner3-desktopp-Men-08JUNE2022.jpg',
    },
    {
      img:
        'https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner4-desktopp-Men-08JUNE2022.jpg',
    },
  ]
  console.log(arr)
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {arr.map((e) => {
          return (  <SwiperSlide>
            <Link to="/menproducts"className=" col ">
              <div
                style={{ position: 'relative', height: '100%', width: '100%' }}
              >
                <img
                  style={{ height: '100%', width: '100%' }}
                  src={e.img}
                  alt=""
                />
              </div>
            </Link>
          </SwiperSlide>)
         
        })}
      </Swiper>
    </>
  )
}
