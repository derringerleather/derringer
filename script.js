const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <header>
        <div class="logo">
            <a href="index.html">
            <img src="./images/derringer_leather.PNG" alt="">
            </a>
        </div>
        <nav>
            <a href="mens-jackets.html">Mens Jackets</a>
            <a href="ladies-jackets.html">Ladies Jackets</a>
            <a href="ladies-vests.html">Ladies Vests</a>
            <a href="ladies-chaps.html">Ladies Chaps</a>
            <a href="cowboy-hats.html">Cowboy Hats</a>
            <a href="crushable-hats.html">Crushable Hats</a>
            <a href="top-hats.html">Top Hats</a>
            <a href="ladies-bags.html">Ladies Bags</a>
        </nav>
    </header>
    `;
}

createHeader();

const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer>
        <h3>Derringer Leather</h3><br>
        <p>Since 1985, Derringer Leather has been a proud subsidiary of UNIK International, a renowned industry leader dedicated to serving the motorcycle community across North America and Europe. Leveraging decades of expertise in leather tanning and manufacturing, Derringer Leather epitomizes quality and craftsmanship in motorcycle apparel and accessories.</p><br>
        <a href="about.html"><p>View More</p><br></a>
        <p>50 Richboynton Rd Dover, NJ 07801</p><br>
        <p>Phone: 201-531-1777</p><br>
        <p>Fax: 973-343-6129</p><br><br>
    </footer>
    `;
}

createFooter();