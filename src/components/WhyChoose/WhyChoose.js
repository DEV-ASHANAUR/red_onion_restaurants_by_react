import React from 'react';
import './WhyChoose.css';
import img1 from '../../assets/Image/adult-blur-blurred-background-687824.png';
import img3 from '../../assets/Image/architecture-building-city-2047397.png';
import img2 from '../../assets/Image/chef-cook-food-33614.png';
import icon from '../../assets/ICON/Group 204.png';
const WhyChoose = () => {
    return (
        <div className='container my-5'>
            <div className="section-header py-5">
                <h2 style={{fontWeight:'700'}}>Why You Choose Us</h2>
                <p style={{width:'40%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo fuga nobis perferendis culpa perspiciatis,</p>
            </div>
            <div className="feature">
                <div class="row row-cols-1 row-cols-md-3 g-5">
                    <div class="col">
                        <div class="card why-custom-card">
                            <img src={img1} class="card-img-top text-center" alt="..." />
                            <div class="card-body d-flex justify-content-around">
                                <div className="px-3">
                                    <img src={icon} alt="" />
                                </div>
                                <div className='pe-2'>
                                    <h4 class="card-title" style={{fontWeight:'700'}}>Card title</h4>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit at quos laborum asperiores..</p>
                                    <button className="btn-see-more d-flex">
                                        <span>see more</span>
                                        <span class="material-icons ps-2">
                                        arrow_right_alt
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card why-custom-card">
                            <img src={img2} class="card-img-top text-center" alt="..." />
                            <div class="card-body d-flex justify-content-around">
                                <div className="px-3">
                                    <img src={icon} alt="" />
                                </div>
                                <div className='pe-2'>
                                    <h4 class="card-title" style={{fontWeight:'700'}}>Card title</h4>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit at quos laborum asperiores..</p>
                                    <button className="btn-see-more d-flex">
                                        <span>see more</span>
                                        <span class="material-icons ps-2">
                                        arrow_right_alt
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card why-custom-card">
                            <img src={img3} class="card-img-top text-center" alt="..." />
                            <div class="card-body d-flex justify-content-around">
                                <div className="px-3">
                                    <img src={icon} alt="" />
                                </div>
                                <div className='pe-2'>
                                    <h4 class="card-title" style={{fontWeight:'700'}}>Card title</h4>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit at quos laborum asperiores..</p>
                                    <button className="btn-see-more d-flex">
                                        <span>see more</span>
                                        <span class="material-icons ps-2">
                                        arrow_right_alt
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;