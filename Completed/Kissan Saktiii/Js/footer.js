// Footer HTML content as a JavaScript string
const footerHTML = `
<footer class="footer">
    <div class="footer-container">
        <div class="footer-section about-section">
            <h4 data-lang-key="footer.aboutUsTitle">About Kisaan Saathi</h4>
            <p data-lang-key="footer.aboutMissionText" data-html="true">
                किसान Saathiii ):- Your Farming Partner. <br>
                Kisaan Saathi is designed to be a one-stop digital companion for every farmer. 
                It helps you navigate the complexities of agriculture by providing smart, 
                data-driven guidance on everything from crop planning to market sales.
            </p>
        </div>

        <div class="footer-section">
            <h4 data-lang-key="footer.quickLinksTitle">Quick Links</h4>
            <ul>
                <li><a href="index.html" data-lang-key="navbar.home">Home</a></li>
                <li><a href="weather.html" data-lang-key="navbar.weather">Weather</a></li>
                <li><a href="advisory.html" data-lang-key="navbar.advisory">Advisory</a></li>
                <li><a href="news.html" data-lang-key="navbar.news">News</a></li>
                <li><a href="about.html" data-lang-key="navbar.about">About</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h4 data-lang-key="footer.customerServicesTitle">Customer Services</h4>
            <ul>
                <li><a href="#" data-lang-key="footer.contactUs">Contact Us</a></li>
                <li><a href="#" data-lang-key="footer.faq">FAQ</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h4 data-lang-key="footer.followUsTitle">Follow Us</h4>
            <div class="social-links">
                <a href="https://facebook.com" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://linkedin.com" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>

    <div class="copyright">
        <p>&copy; 2025 Kisaan Saathi. All rights reserved.</p>
    </div>
</footer>
`;

// Inject the footer into the element with id="footer"
document.addEventListener("DOMContentLoaded", () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
});
