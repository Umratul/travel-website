import React from 'react';
import { Carousel } from 'react-bootstrap';

import f1 from '../../../images/feedback/f1.jpg';
import f2 from '../../../images/feedback/f2.jpg';
import f3 from '../../../images/feedback/f3.jpg';

const Feedback = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={f1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>CLIENT FEEDBACK</h1>
                        <hr />
                        <p>Words From Our Happy Touriest</p>
                        <h3>"Friendly & Supportive"</h3>
                        <p>I have traveled with travel and tours many times. The experience with travel and tours has been smooth and amazing.</p>
                        <p>-Barbara</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={f2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1>CLIENT FEEDBACK</h1>
                        <hr />
                        <p>Words From Our Happy Touriest</p>
                        <h3>"Very Cooperative"</h3>
                        <p>The management is very cooperative providing best service to its clients. It's been our 3rd tour with TRAVELO</p>
                        <p>-Dolce Vita</p>
                      
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={f3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1>CLIENT FEEDBACK</h1>
                        <hr />
                        <p>Words From Our Happy Touriest</p>
                        <h3>"Lovely People & Supportive Teammates"</h3>
                        <p>Loved this trip! What amazing breadth and depth of wildlife we saw while in the Galapagos from marine lizards and giant tortoises to all sorts of birds.</p>
                        <p>-Edward</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Feedback;