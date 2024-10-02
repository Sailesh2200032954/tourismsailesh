document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurant = urlParams.get('restaurant');
    const hotel = urlParams.get('hotel');
    const name = document.getElementById('name');
    const description = document.getElementById('description');
    const items = document.getElementById('items');

    if (restaurant) {
        if (restaurant === 'A') {
            name.innerText = "Restaurant A";
            description.innerText = "Fine dining with a focus on local ingredients.";
            items.innerHTML = `
                <li>Chicken Biryani - $15</li>
                <li>Paneer Tikka - $10</li>
                <li>Grilled Salmon - $20</li>
                <li>Vegan Buddha Bowl - $12</li>
            `;
        } else if (restaurant === 'B') {
            name.innerText = "Restaurant B";
            description.innerText = "Casual dining experience with a vibrant atmosphere.";
            items.innerHTML = `
                <li>Margherita Pizza - $12</li>
                <li>Caesar Salad - $10</li>
                <li>Pasta Primavera - $14</li>
                <li>Chocolate Mousse - $7</li>
            `;
        } else if (restaurant === 'C') {
            name.innerText = "Restaurant C";
            description.innerText = "Exquisite dishes from around the world.";
            items.innerHTML = `
                <li>Falafel Wrap - $8</li>
                <li>Vegan Pad Thai - $13</li>
                <li>Stuffed Peppers - $10</li>
                <li>Raw Chocolate Cake - $6</li>
            `;
        } else if (restaurant === 'D') {
            name.innerText = "Restaurant D";
            description.innerText = "Family-friendly dining with a diverse menu.";
            items.innerHTML = `
                <li>Spaghetti Bolognese - $14</li>
                <li>Fish & Chips - $15</li>
                <li>Vegetable Stir Fry - $12</li>
                <li>Ice Cream Sundae - $5</li>
            `;
        }
    } else if (hotel) {
        if (hotel === 'A') {
            name.innerText = "Hotel A";
            description.innerText = "Luxury accommodation with top-notch amenities.";
            items.innerHTML = `
                <li>Free Wi-Fi</li>
                <li>24-hour Room Service</li>
                <li>Spa and Wellness Center</li>
                <li>Swimming Pool</li>
            `;
        } else if (hotel === 'B') {
            name.innerText = "Hotel B";
            description.innerText = "Cozy and affordable options in the heart of the city.";
            items.innerHTML = `
                <li>Free Breakfast</li>
                <li>Fitness Center</li>
                <li>Room Service</li>
                <li>Parking Available</li>
            `;
        } else if (hotel === 'C') {
            name.innerText = "Hotel C";
            description.innerText = "Modern hotel with a rooftop pool and stunning views.";
            items.innerHTML = `
                <li>Rooftop Pool</li>
                <li>Business Center</li>
                <li>Pet-Friendly Rooms</li>
                <li>Concierge Service</li>
            `;
        } else if (hotel === 'D') {
            name.innerText = "Hotel D";
            description.innerText = "Charming boutique hotel with personalized service.";
            items.innerHTML = `
                <li>Personalized Check-in</li>
                <li>Daily Housekeeping</li>
                <li>Complimentary Beverages</li>
                <li>Local Tours Arranged</li>
            `;
        } else if (hotel === 'E') {
            name.innerText = "Hotel E";
            description.innerText = "Elegant accommodations with a full-service spa.";
            items.innerHTML = `
                <li>Full-Service Spa</li>
                <li>Fine Dining Restaurant</li>
                <li>Luxury Suites</li>
                <li>Airport Shuttle</li>
            `;
        } else if (hotel === 'F') {
            name.innerText = "Hotel F";
            description.innerText = "Family-friendly hotel with various entertainment options.";
            items.innerHTML = `
                <li>Kids' Club</li>
                <li>Game Room</li>
                <li>Outdoor Activities</li>
                <li>Family Packages Available</li>
            `;
        }
    }
});
