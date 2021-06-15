document.addEventListener("DOMContentLoaded", async () => {
    console.log("working")
    const response = await fetch("/data")
    const text = response.text()
    alert(text)
})

console.log("working")