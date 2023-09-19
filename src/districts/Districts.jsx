import React from 'react'

export const Districts = () => {
    return (
        <div className='' style={{ marginTop: '' }}>

            <header style={{
                height: '50vh',
            }}>
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 text-center">
                            <h1 class="display-4 fw-bold">Explore J&K's Vibrant Districts</h1>
                            <p class="lead">Discover Love in Every Corner</p>
                        </div>
                    </div>
                </div>
            </header>

            <section class="pb-5">
                <div class="container text-center">
                    <div class="gallery-wrapper">
                        {/* <!-- Grid sizer --> */}
                        <div class="grid-sizer col-lg-4 col-md-6"></div>
                        {/* <!-- Grid item --> */}
                        <div className='row'>
                            {/* Jammu District */}
                            <a href="/profile/Jammu-District" class="col-lg-4 col-md-6 grid-item mb-4 btn">
                                <img class="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/34/98/37/lrm-export-31665251117501.jpg?w=500&h=-1&s=1" alt="Jammu District" />
                                <h2 class="h4">Jammu District</h2>
                                <p class="small text-muted font-italic">Jammu is known for its scenic beauty and historic temples. It is the winter capital of Jammu and Kashmir.</p>
                            </a>

                            {/* <!-- Srinagar District --> */}
                            <a href="/profile/Srinagar-District" class="col-lg-4 col-md-6 grid-item mb-4 btn">
                                <img class="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://facts.net/wp-content/uploads/2023/07/38-facts-about-srinagar-1688457299.jpeg" alt="Srinagar District" />
                                <h2 class="h4">Srinagar District</h2>
                                <p class="small text-muted font-italic">Srinagar is the summer capital of Jammu and Kashmir, famous for its beautiful Dal Lake and houseboats.</p>
                            </a>

                            {/* <!-- Leh District --> */}
                            <a href="/profile/Leh-District" class="col-lg-4 col-md-6 grid-item mb-4 btn">
                                <img class="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://content.r9cdn.net/rimg/dimg/7d/10/d91b782d-city-53277-17313d53696.jpg?width=1366&height=768&xhint=2312&yhint=1762&crop=true" alt="Leh District" />
                                <h2 class="h4">Leh District</h2>
                                <p class="small text-muted font-italic">Leh is a high-desert city known for its stunning landscapes, Buddhist monasteries, and adventure activities.</p>
                            </a>
                        </div>

                        <div className="row">
                            {/* <!-- Udhampur District --> */}
                            <a href="/profile/Udhampur-District" class="col-lg-4 col-md-6 grid-item mb-4 btn">
                                <img class="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Kirimachi_temple_complex.JPG" alt="Udhampur District" />
                                <h2 class="h4">Udhampur District</h2>
                                <p class="small text-muted font-italic">Udhampur is known for its picturesque landscapes, including lush green hills and historic shrines.</p>
                            </a>

                            {/* <!-- Anantnag District --> */}
                            <a href="/profile/Anantnag-District" class="col-lg-4 col-md-6 grid-item mb-4 btn">
                                <img class="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/4f/98/ac/bongblogger-sheshnag.jpg?w=700&h=-1&s=1" alt="Anantnag District" />
                                <h2 class="h4">Anantnag District</h2>
                                <p class="small text-muted font-italic">Anantnag is famous for its natural beauty, including meadows, rivers, and gardens.</p>
                            </a>

                            {/* <!-- Kargil District --> */}
                            <a href="/profile/Kargil-District" class="col-lg-4 col-md-6 grid-item mb-4 btn">
                                <img class="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Kargil_Town_Panorama.jpg" alt="Kargil District" />
                                <h2 class="h4">Kargil District</h2>
                                <p class="small text-muted font-italic">Kargil is known for its rugged terrain and is historically significant for the Kargil War.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
