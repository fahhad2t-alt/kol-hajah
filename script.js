const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = form.querySelector('input[type="text"]').value;
    const price = form.querySelector('input[type="number"]').value;
    const category = form.querySelector("select").value;
    const description = form.querySelector("textarea").value;
    const phone = form.querySelector('input[type="tel"]').value;

    const ad = {
        title: title,
        price: price,
        category: category,
        description: description,
        phone: phone
    };

    localStorage.setItem("myAd", JSON.stringify(ad));

    alert("تم نشر الإعلان بنجاح 🎉");

    form.reset();
});