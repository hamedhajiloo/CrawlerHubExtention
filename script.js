function connect() {
    // document.getElementById("demo").innerHTML = "Hello World";

    const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://test-hamedhajiloo.fandogh.cloud/myhub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

    async function start() {
        try {
            await connection.start();
            console.log("SignalR Connected.");
        } catch (err) {
            console.log(err);
            setTimeout(start, 5000);
        }
    };

connection.onclose(start);

// Start the connection.
start();
}

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btn');
    // onClick's logic below:
    btn.addEventListener('click', function() {
        connect();
    });
});