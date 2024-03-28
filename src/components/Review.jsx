import p1 from "../../image";
import p2 from "../../";
import p3 from "../../";
import p4 from "../../";
import p5 from "../../";
import p6 from "../../";

const Review = () => {
    return (
        <div className="testimonials mb-10">
            <div className="inner">

                <div className="row">
                    <div className="col ">
                        <div className="testimonial ">
                            <img src={p1} alt="" />
                            <div className="name">Akash Mujumder</div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p>
                                Absolutely captivating! Couldnt put it down till the very last page. The authors storytelling prowess is unmatched, weaving a tale that grips your heart and mind simultaneously.
                            </p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="testimonial">
                            <img src={p2} alt="" />
                            <div className="name">June Libert</div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>

                            <p>
                                A mesmerizing journey into the depths of human emotion and psyche. The characters are so well-developed, you feel like you have known them your entire life. A definite must-read for anyone craving a literary adventure
                            </p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="testimonial">
                            <img src={p3} alt="" />
                            <div className="name">Anna Morrbis</div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>

                            <p>
                                Incredible narrative that keeps you hooked from start to finish. The authors attention to detail is commendable, painting vivid scenes that transport you to another world entirely. A true masterpiece!
                            </p>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="testimonial ">
                            <img src={p4} alt="" />
                            <div className="name">David Jones</div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p>
                                An absolute gem of a book! The prose is lyrical, the plot is intricate, and the themes resonate deeply. It is the kind of story that stays with you long after you have turned the final page
                            </p>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="testimonial ">
                            <img src={p5} alt="" />
                            <div className="name">Robert Taylo</div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p>
                                An unforgettable read! The characters leap off the page with authenticity, and the plot twists keep you guessing till the end. I was completely engrossed from the first chapter to the last.
                            </p>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="testimonial ">
                            <img src={p6} alt="" />
                            <div className="name">Daniel White</div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <p>
                                A literary triumph! This book challenges conventions and offers a fresh perspective on familiar themes. The writing is elegant yet accessible, making it a delight to read. Highly recommended for anyone seeking a thought-provoking experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;