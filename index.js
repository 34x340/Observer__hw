const imgs = document.querySelectorAll("img")
const onEntry = (entries, observer) => {
    console.log(observer)
    entries.forEach(entry => {
        entry.loading = 'lazyload'
    });
}
const observer = new IntersectionObserver(onEntry, {
    rootMargin: "50px",
    threshold: 0.5,
})

imgs.forEach(img => observer.observe(img))