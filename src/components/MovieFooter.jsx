import x from "../assets/x-twitter.svg";

const MovieFooter = () => {
    // Ex Link
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://unicons.iconscout.com/release/v4.0.0/css/line.css';
    document.head.appendChild(linkElement);

    // Year
    
    return (
        <div className="movie-footer flex">
            <footer class="footer flex">
            {/* <div class="footer_bg"> */}
                {/* <div class="footer_container container grid"> */}
                    <div class="footer_socials flex">
                        <a href="https://github.com/okikiareo" target="_blank" class="footer_social">
                            <i class="uil uil-github"></i>
                        </a>
                        <a href="https://twitter.com/ai_okiki" target="_blank" class="footer_social">
                            <img src={x} class="twitter"/>
                        </a>
                        <a href="https://wa.me/2348144991849" target="_blank" class="footer_social">
                            <i class="uil uil-whatsapp"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/okiki-areo/" target="_blank" class="footer_social">
                            <i class="uil uil-linkedin"></i>
                        </a>
                    </div>
                    {/* </div> */}
                <div class="footer_copy">
                 &copy; <span id="current-year">2024</span> MovieBox by Ai_Okiki
                </div>
            {/* </div> */}
        </footer>
        </div>
    );
}

export default MovieFooter;