<html>
    <style>
        div {
            width: 500px;
            height: 500px;
            border: 1px solid black;
        }
    </style>
    <body>
        <div id="hello">hello!</div>
        <script>
            const hello = document.getElementById("hello")
            hello.addEventListener("click", (event) => { alert(`${event.screenX}, ${event.screenY}`) })
            // hello.addEventListener("mouseenter", () => alert("entered!"))
            // hello.addEventListener("mouseleave", () => alert("leaved!"))

</script>
    </body>
</html>