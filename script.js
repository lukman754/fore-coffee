document.addEventListener("DOMContentLoaded", function () {

    let cart = [];

    // Fungsi untuk memformat angka ke dalam format Rupiah
    function formatRupiah(amount) {
        return amount.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        });
    }

    function displayProducts(filter = "*") {
        const productList = document.getElementById("product-list");
        productList.innerHTML = "";

        const categories = [...new Set(products.map(product => product.category))];

        categories.forEach(category => {
            const categoryHeader = document.createElement("h2");
            categoryHeader.innerText = category.charAt(0).toUpperCase() + category.slice(1);
            productList.appendChild(categoryHeader);

            const filteredProducts = products.filter(product => {
                return product.category === category && (filter === "*" || product.category === filter.replace(".", ""));
            });

            const categoryContainer = document.createElement("div");
            categoryContainer.classList.add("category-container");

            const categoryTitles = {
                "AmericanoSeries": "🥃 Americano Series",
                "Coffee": "☕ Coffee",
                "NonCoffee": "🍵 Non Coffee",
                "ForeDeli": "🥪 Fore Deli",
                "ForeJunior": "🥤 Fore Junior",
                "ForeSignature": "☕ Fore Signature",
                "IceBlended": "🧋 Ice Blended",
                "Refresher": "🍑 Refresher",
                "Tea": "🍵 Tea",
                "FOREveryone1L": "🍶 FOREveryone 1L"
            };

            let lastCategory = "";
            filteredProducts.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product", product.category);

                // Tentukan apakah harga asli dan harga diskon ditampilkan
                const priceDisplay = product.price !== product.originalPrice ?
                    `<p class="fs-6 text-danger"><span style="text-decoration: line-through; color: gray;">${formatRupiah(product.originalPrice)}</span> ${formatRupiah(product.price)}</p>` :
                    `<p class="fs-6 text-danger">${formatRupiah(product.price)}</p>`;

                // Jika kategori produk berbeda dari kategori sebelumnya, tambahkan judul kategori
                if (product.category !== lastCategory) {
                    const categoryTitleElement = document.createElement("h3");
                    categoryTitleElement.classList.add("category-title", "mt-4", "mb-2");
                    categoryTitleElement.innerHTML = categoryTitles[product.category] || product.category;
                    categoryContainer.appendChild(categoryTitleElement);
                    lastCategory = product.category; // Perbarui kategori terakhir
                }

                // Buat elemen produk
                productElement.innerHTML = `
                <div class="row align-items-center mb-3">
                    <div class="col-3 col-lg-2">
                        <img src="${product.image}" alt="${product.name}" class="product-image rounded-2" style="width: 80px; height: 80px" />
                    </div>
                    <div class="col-7 col-lg-8">
                        <h5 class="pt-2">${product.name}</h5>
                        ${priceDisplay}
                        <div class="size-options" style="${(product.category === 'FOREveryone1L' || product.category === 'ForeDeli') ? 'display:none;' : ''}">
                          <label>
                            <input type="checkbox" class='pt-0 mt-0 small' name="size-${product.id}" value="Large"> Large <span class='text-success'>+Rp3.000</span>
                          </label>
                        </div>
                    </div>
                    <div class="col-2 d-flex justify-content-end align-items-end">
                        <button class="btn btn-primary rounded-pill btn-sm" data-id="${product.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;

                categoryContainer.appendChild(productElement);
            });

            productList.appendChild(categoryContainer);
        });

        // Tambahkan event listener setelah elemen produk ditambahkan
        const buttons = document.querySelectorAll(".product button");
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                const productId = parseInt(this.getAttribute("data-id"));
                addToCart(productId);

                // Menampilkan pilihan ukuran saat tombol diklik
                // const sizeOptions = this.closest('.product').querySelector('.size-options');
                // if (sizeOptions) {
                //    const checkbox = sizeOptions.querySelector('input[type="checkbox"]');
                //    if (checkbox) {
                //        checkbox.checked = !checkbox.checked; // Toggle checkbox saat tombol diklik
                //    }
                // }

                // Menangani perubahan ukuran dan memperbarui harga jika perlu
                const checkboxes = this.closest('.product').querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(checkbox => {
                    checkbox.addEventListener('change', function () {
                        let adjustedPrice = products.find(product => product.id === productId).price;
                        if (this.checked) {
                            adjustedPrice += 3000; // Tambahkan biaya untuk ukuran Large
                        } else {
                            adjustedPrice -= 3000; // Kembali ke harga normal jika unchecked
                        }
                        // Anda bisa menambahkan logika untuk memperbarui harga di tampilan produk jika diperlukan
                        console.log(`Harga untuk ${this.value}: ${formatRupiah(adjustedPrice)}`);
                    });
                });
            });
        });
    }







    function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    // Ambil ukuran yang dipilih
    const sizeOptions = document.querySelector(`input[name="size-${productId}"]:checked`);
    const selectedSize = sizeOptions ? sizeOptions.value : "Regular";

    // Hitung harga sesuai ukuran
    const price = (selectedSize === "Large" && product.category !== "FOREveryone1L") ? product.price + 6000 : product.price;
    
    // Cari produk di keranjang berdasarkan id dan ukuran
    const cartItem = cart.find(item => item.id === productId && item.size === selectedSize);

    if (cartItem) {
        // Jika produk dengan ukuran yang sama sudah ada di keranjang, tambahkan kuantitas
        cartItem.quantity += 1;
    } else {
        // Tambahkan produk baru ke keranjang dengan ukuran yang dipilih
        cart.push({
            ...product,
            quantity: 1,
            price: price,
            size: selectedSize // Tambahkan ukuran ke objek produk di keranjang
        });
    }

    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";
    let total = 0;
    let totalQuantity = 0;

    // Hitung total harga produk
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        totalQuantity += item.quantity;

        // Tampilkan ukuran di keranjang jika "Large"
        const sizeLabel = item.size === "Large" ? " (L)" : "";

        cartDiv.innerHTML += `
            <div class='row mb-1'>
                <div class='col-7'>${item.name}${sizeLabel}</div>
                <div class='col-1'>${item.quantity}x</div>
                <div class='col-2'>${formatRupiah(itemTotal)}</div>
                <div class='col-2 d-flex justify-content-end'>
                    <a class="remove-item text-danger rounded-pill btn-sm" data-index="${index}">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
            </div>`;
    });

    // Hitung fee admin 10%
    const adminFee = total * 0.10;
    const totalWithFee = total + adminFee;

    // Update total di elemen dengan fee admin
    document.getElementById("total").innerText = formatRupiah(totalWithFee);

    // Tampilkan jumlah produk di bubble
    document.getElementById("cart-count").innerText = totalQuantity;

    // Tambahkan event listener untuk tombol hapus
    const removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const index = parseInt(this.getAttribute("data-index"));
            removeFromCart(index);
        });
    });

    // Tampilkan fee admin secara terpisah jika diinginkan
    document.getElementById("admin-fee").innerText = `Fee Admin (10%): ${formatRupiah(adminFee)}`;
}

    function removeFromCart(index) {
        cart.splice(index, 1); // Hapus item dari keranjang
        updateCart(); // Perbarui tampilan keranjang
    }

    document.querySelectorAll(".tag").forEach(tag => {
        tag.addEventListener("click", function () {
            const tagText = this.innerText.toLowerCase().trim();
            const searchInput = document.getElementById("search");

            // Jika tag yang sama sudah aktif (di dalam input), hilangkan filter dan tampilkan semua produk
            if (searchInput.value === tagText) {
                searchInput.value = ""; // Kosongkan input search

                // Klik kategori "⭐ SEMUA" untuk menampilkan semua produk
                document.querySelector('.category[data-filter="*"]').click();

                // Tampilkan semua produk kembali
                document.querySelectorAll(".product").forEach(product => {
                    product.style.display = "block"; // Tampilkan kembali semua produk
                });

            } else {
                // Jika tag belum ada di dalam input, masukkan teks tag ke dalam input pencarian
                searchInput.value = tagText;

                // Simulasikan klik pada kategori "⭐ SEMUA" terlebih dahulu
                document.querySelector('.category[data-filter="*"]').click();

                // Tunda sedikit untuk menunggu semua produk ditampilkan
                setTimeout(() => {
                    // Filter produk yang sesuai dengan tag yang diklik
                    const query = tagText;
                    const productList = document.querySelectorAll(".product");

                    productList.forEach(product => {
                        const isVisible = product.innerText.toLowerCase().includes(query);
                        product.style.display = isVisible ? "block" : "none";
                    });
                }, 100); // Tunggu 100ms setelah klik kategori "SEMUA"
            }
        });
    });


    document.getElementById("search").addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const productList = document.querySelectorAll(".product");

        productList.forEach(product => {
            const isVisible = product.innerText.toLowerCase().includes(query);
            product.style.display = isVisible ? "block" : "none";
        });
    });

    const filterButtons = document.querySelectorAll(".filters button");
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filterValue = this.getAttribute("data-filter");
            displayProducts(filterValue);
        });
    });

    function sendWhatsAppMessage(name, location) {
        const message = cart.map(item => `${item.name} - ${item.quantity}x ${formatRupiah(item.price)}`).join('%0A');
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const adminFee = total * 0.10;
        const totalWithFee = total + adminFee;
        const finalMessage = `Nama: ${name}%0ALokasi Fore: ${location}%0A%0A${message}%0A%0ATotal: ${formatRupiah(totalWithFee)}`;
        const phoneNumber = "6285156477250"; // Ganti dengan nomor WhatsApp yang dituju
        const url = `https://wa.me/${phoneNumber}?text=${finalMessage}`;
        window.open(url, '_blank');
    }

    document.getElementById("order-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman form
        const name = document.getElementById("name").value;
        const location = document.getElementById("location").value;

        // Mengirim pesan ke WhatsApp
        sendWhatsAppMessage(name, location);

        // Mengosongkan keranjang tetapi tidak mereset input name dan location
        cart = [];
        updateCart();

        // Reset form kecuali input name dan location
        document.querySelectorAll("#order-form input").forEach(input => {
            if (input.id !== "name" && input.id !== "location") {
                input.value = '';
            }
        });
    });


    // Menampilkan semua produk saat halaman dimuat
    displayProducts();
});
