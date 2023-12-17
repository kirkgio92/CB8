import './index.css'

const Hero = () => {
    return (
        <section className='Hero'>
            <div className='hero__img__wrapper'>
                <img className="hero_img" src="https://picsum.photos/600/300?97" alt="hero" />
            </div>
            <div className='hero__text__wrapper'>
                <h1 className='main__title'>Lorem, ipsum dolor sit amet.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ab suscipit velit perferendis cupiditate repudiandae.</p>
            </div>
        </section>
    )
}

export default Hero