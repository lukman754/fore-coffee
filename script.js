document.addEventListener("DOMContentLoaded", function () {
  let cart = [];

  // Fungsi untuk memformat angka ke dalam format Rupiah
  function formatRupiah(amount) {
    return amount.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  }

  function displayProducts(filter = "*") {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    // Get unique categories from products
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];

    // Category titles with emojis
    const categoryTitles = {
      AmericanoSeries: "🥃 Americano Series",
      Coffee: "☕ Coffee",
      NonCoffee: "🍵 Non Coffee",
      ForeDeli: "🥪 Fore Deli",
      ForeJunior: "🥤 Fore Junior",
      ForeSignature: "☕ Fore Signature",
      IceBlended: "🧋 Ice Blended",
      Refresher: "🍑 Refresher",
      Tea: "🍵 Tea",
      FOREveryone1L: "🍶 FOREveryone 1L",
    };

    categories.forEach((category) => {
      // Create category section
      const categoryHeader = document.createElement("h2");
      categoryHeader.innerText =
        category.charAt(0).toUpperCase() + category.slice(1);
      categoryHeader.className = "text-2xl font-bold text-coffee-800 mt-8 mb-4";
      productList.appendChild(categoryHeader);

      // Filter products for this category
      const filteredProducts = products.filter((product) => {
        return (
          product.category === category &&
          (filter === "*" || product.category === filter.replace(".", ""))
        );
      });

      // Create container for this category's products
      const categoryContainer = document.createElement("div");
      categoryContainer.classList.add("category-container", "space-y-4");

      let lastCategory = "";
      filteredProducts.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add(
          "product",
          product.category,
          "bg-white",
          "rounded-xl",
          "shadow-md",
          "overflow-hidden",
          "hover:shadow-lg",
          "transition-shadow",
          "duration-300"
        );

        // Determine price display (original vs discounted)
        const priceDisplay =
          product.price !== product.originalPrice
            ? `<p class="text-red-600 font-medium">
              <span class="line-through text-gray-400 mr-2">${formatRupiah(
                product.originalPrice
              )}</span> 
              ${formatRupiah(product.price)}
             </p>`
            : `<p class="text-red-600 font-medium">${formatRupiah(
                product.price
              )}</p>`;

        // Add category title if it's a new category
        if (product.category !== lastCategory) {
          const categoryTitleElement = document.createElement("h3");
          categoryTitleElement.classList.add(
            "category-title",
            "text-xl",
            "font-semibold",
            "mt-6",
            "mb-3",
            "text-coffee-700"
          );
          categoryTitleElement.innerHTML =
            categoryTitles[product.category] || product.category;
          categoryContainer.appendChild(categoryTitleElement);
          lastCategory = product.category;
        }

        // Create product element
        productElement.innerHTML = `
        <div class="flex items-center p-3">
          <div class="flex-shrink-0 w-20 h-20">
            <img src="${product.image}" alt="${
          product.name
        }" class="w-full h-full object-cover rounded-lg shadow-sm" />
          </div>
          <div class="ml-4 flex-grow">
            <h5 class="font-medium text-coffee-800">${product.name}</h5>
            ${priceDisplay}
            <div class="size-options mt-1 text-sm" style="${
              product.category === "FOREveryone1L" ||
              product.category === "ForeDeli"
                ? "display:none;"
                : ""
            }">
              <label class="flex items-center space-x-1 cursor-pointer">
                <input type="checkbox" class="form-checkbox text-coffee-600 rounded" name="size-${
                  product.id
                }" value="Large">
                <span>Large</span>
                <span class="text-green-600 ml-1">+Rp3.000</span>
              </label>
            </div>
          </div>
          <div class="ml-2">
            <button class="bg-coffee-600 hover:bg-coffee-700 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors" data-id="${
              product.id
            }">
              <i class="fas fa-plus text-sm"></i>
            </button>
          </div>
        </div>
      `;

        categoryContainer.appendChild(productElement);
      });

      productList.appendChild(categoryContainer);
    });

    // Add event listeners to buttons
    const buttons = document.querySelectorAll(".product button");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-id"));
        addToCart(productId);

        // Handle size changes and update price if needed
        const checkboxes = this.closest(".product").querySelectorAll(
          'input[type="checkbox"]'
        );
        checkboxes.forEach((checkbox) => {
          checkbox.addEventListener("change", function () {
            let adjustedPrice = products.find(
              (product) => product.id === productId
            ).price;
            if (this.checked) {
              adjustedPrice += 3000; // Add fee for Large size
            } else {
              adjustedPrice -= 3000; // Return to normal price if unchecked
            }
            console.log(
              `Price for ${this.value}: ${formatRupiah(adjustedPrice)}`
            );
          });
        });
      });
    });
  }

  function updateCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";
    let total = 0;
    let totalQuantity = 0;

    if (cart.length === 0) {
      cartDiv.innerHTML = `
      <div class="text-center py-6">
        <i class="fas fa-shopping-cart text-coffee-400 text-4xl mb-3"></i>
        <p class="text-coffee-300">Keranjang belanja kosong</p>
      </div>
    `;
    } else {
      // Calculate total product price
      cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        totalQuantity += item.quantity;

        // Display size in cart if "Large"
        const sizeLabel = item.size === "Large" ? " (L)" : "";

        cartDiv.innerHTML += `
        <div class="flex items-center justify-between py-2 border-b border-coffee-600 last:border-0">
          <div class="flex-grow">
            <p class="text-coffee-100 font-medium">${item.name}${sizeLabel}</p>
          </div>
          <div class="flex items-center space-x-3">
            <span class="text-coffee-200 text-sm">${item.quantity}x</span>
            <span class="text-coffee-100">${formatRupiah(itemTotal)}</span>
            <button class="remove-item text-red-400 hover:text-red-300 transition-colors" data-index="${index}">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      `;
      });
    }

    // Calculate 10% admin fee
    const adminFee = total * 0.1;
    const totalWithFee = total + adminFee;

    // Update total with admin fee
    document.getElementById("total").innerText = formatRupiah(totalWithFee);

    // Show product quantity in bubble
    document.getElementById("cart-count").innerText = totalQuantity;

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"));
        removeFromCart(index);
      });
    });

    // Display admin fee separately
    document.getElementById(
      "admin-fee"
    ).innerText = `Fee Admin (10%): ${formatRupiah(adminFee)}`;

    // Generate QRIS code if there are items in cart
    if (cart.length > 0 && typeof generateQRIS === "function") {
      const nominalInput = document.getElementById("nominalInput");
      if (nominalInput) {
        nominalInput.value = totalWithFee;
        try {
          generateQRIS();
        } catch (e) {
          console.log("QRIS generation failed: ", e);
        }
      }
    }
  }

  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);

    // Ambil ukuran yang dipilih
    const sizeOptions = document.querySelector(
      `input[name="size-${productId}"]:checked`
    );
    const selectedSize = sizeOptions ? sizeOptions.value : "Regular";

    // Hitung harga sesuai ukuran
    const price =
      selectedSize === "Large" && product.category !== "FOREveryone1L"
        ? product.price + 3000
        : product.price;

    // Cari produk di keranjang berdasarkan id dan ukuran
    const cartItem = cart.find(
      (item) => item.id === productId && item.size === selectedSize
    );

    if (cartItem) {
      // Jika produk dengan ukuran yang sama sudah ada di keranjang, tambahkan kuantitas
      cartItem.quantity += 1;
    } else {
      // Tambahkan produk baru ke keranjang dengan ukuran yang dipilih
      cart.push({
        ...product,
        quantity: 1,
        price: price,
        size: selectedSize, // Tambahkan ukuran ke objek produk di keranjang
      });
    }

    updateCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1); // Hapus item dari keranjang
    updateCart(); // Perbarui tampilan keranjang
  }

  document.querySelectorAll(".tag").forEach((tag) => {
    tag.addEventListener("click", function () {
      const tagText = this.innerText.toLowerCase().trim();
      const searchInput = document.getElementById("search");

      // Jika tag yang sama sudah aktif (di dalam input), hilangkan filter dan tampilkan semua produk
      if (searchInput.value === tagText) {
        searchInput.value = ""; // Kosongkan input search

        // Klik kategori "⭐ SEMUA" untuk menampilkan semua produk
        document.querySelector('.category[data-filter="*"]').click();

        // Tampilkan semua produk kembali
        document.querySelectorAll(".product").forEach((product) => {
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

          productList.forEach((product) => {
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

    productList.forEach((product) => {
      const isVisible = product.innerText.toLowerCase().includes(query);
      product.style.display = isVisible ? "block" : "none";
    });
  });

  const filterButtons = document.querySelectorAll(".filters button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");
      displayProducts(filterValue);
    });
  });

  function sendWhatsAppMessage(name, location) {
    const message = cart
      .map((item) => {
        // Tambahkan "(L)" jika ukuran produk adalah "Large"
        const sizeLabel = item.size === "Large" ? " (L)" : "";
        return `${item.name}${sizeLabel} - ${item.quantity}x ${formatRupiah(
          item.price
        )}`;
      })
      .join("%0A");

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const adminFee = total * 0.1;
    const totalWithFee = total + adminFee;
    const finalMessage = `Nama: ${name}%0ALokasi Fore: ${location}%0A%0A${message}%0A%0ATotal: ${formatRupiah(
      totalWithFee
    )}`;
    const phoneNumber = "6285156477250"; // Ganti dengan nomor WhatsApp yang dituju
    const url = `https://wa.me/${phoneNumber}?text=${finalMessage}`;
    window.open(url, "_blank");
  }

  document
    .getElementById("order-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Mencegah pengiriman form
      const name = document.getElementById("name").value;
      const location = document.getElementById("location").value;

      // Mengirim pesan ke WhatsApp
      sendWhatsAppMessage(name, location);

      // Mengosongkan keranjang tetapi tidak mereset input name dan location
      cart = [];
      updateCart();

      // Reset form kecuali input name dan location
      document.querySelectorAll("#order-form input").forEach((input) => {
        if (input.id !== "name" && input.id !== "location") {
          input.value = "";
        }
      });
    });

  // Menampilkan semua produk saat halaman dimuat
  displayProducts();
});
