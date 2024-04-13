import React from 'react'
import img2 from '@Assets/img2.jpg'
import img3 from '@Assets/img3.jpg'
import img4 from '@Assets/img4.jpg'
const Blocks = () => {
  return (
    <div className='d-flex rflex-column flex-md-row'>
        <div className='d-flex flex-column align-item-center text-break p-3 text-center'>
            <img
                src={img3}
                class="img-fluid rounded-top"
                alt=""
                style={{maxWidth: '40px', maxHeight: '40px'}}
            />
            <h3>
                search
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod, distinctio ea praesentium corporis quis, iusto eius repellat doloribus maxime provident aliquid facilis dolore? Error enim laudantium fuga vitae quam.
            </p>
        </div>
        <div className='d-flex flex-column align-item-center text-break p-3 text-center'>
            <img
                src={img2}
                class="img-fluid rounded-top"
                alt=""
                style={{maxWidth: '40px',maxHeight: '40px'}}
            />
            <h3>
                Book
            </h3>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur incidunt repellendus dolor numquam! Placeat excepturi aperiam, quae culpa sequi ex, blanditiis iste deleniti quo aliquid provident consequuntur molestias quidem ducimus.
            </p>
        </div>
        <div className='d-flex flex-column align-item-center text-break p-3 text-center'>
            <img
                src={img4}
                class="img-fluid rounded-top"
                alt=""
                style={{maxWidth: '40px', maxHeight:'40px'}}
            />
            <h3>
                Soemthing else
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, suscipit veritatis eligendi magnam, aspernatur harum nihil dolores doloribus totam porro recusandae voluptates nesciunt facere cum quaerat enim fugiat dolorem eius?
            </p>
        </div>
    </div>
  )
}

export default Blocks