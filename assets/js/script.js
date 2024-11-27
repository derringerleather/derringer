const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <header>
        <div class="logo">
            <a href="index.html">
            <img src="assets/images/logo.webp" alt="">
            </a>
        </div>
        <nav>
            <a href="collection.html?category=Mens%20Jackets">Mens Jackets</a>
            <a href="collection.html?category=Ladies%20Jackets">Ladies Jackets</a>
            <a href="collection.html?category=Ladies%20Vests">Ladies Vests</a>
            <a href="collection.html?category=Cowboy%20Hats">Cowboy Hats</a>
            <a href="collection.html?category=Top%20Hats">Top Hats</a>
            <a href="collection.html?category=Ladies%20Bags">Ladies Bags</a>
            <a href="collection.html?category=Vest%20Extenders">Vest Extenders</a>
            <a href="collection.html?category=Wallets">Wallets</a>
            <a href="collection.html?category=Biker%20Whips">Biker Whips</a>
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