import './about.css'

function About(){
    return(
        <>
       <div className='about-container'>
        <div className='about-image'>
            <img src='https://avatars.githubusercontent.com/u/'></img>
            <div className='about-text'>
                    <h1>About Us</h1>
            </div>
        </div>
        <div className='about-secondimage'>
            <img>hey there </img>
        </div>
        <div className='about-histroy'>
            <h2>About us</h2>
            <h3>See us</h3>
            <p>we are a </p>
            <div className='history-box'>
                <span class="fa fa-check"></span> A group of developers who love to
                code and learn new things everyday.
                <ul>
                    <li>
                        history
                    </li>
                    <li>
                        history
                    </li>
                    <li>
                        history
                    </li>
                    <li>
                        history
                    </li>
                </ul>
            </div>

        </div>
       </div>
        </>
    )

}

export default About; 