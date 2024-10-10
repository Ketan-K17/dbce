<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Supervisor Dashboard</title>
        {% load static %}
    </head>
    <body>
        <h1>Supervisor Dashboard</h1>
        <p>Welcome to the supervisor dashboard.</p>

        <p id="loginStatus"></p>

        <button id="logoutButton">Logout</button>

        <h2>Create Vehicle Entry</h2>
        <form id="vehicleForm" method="POST">
            <label for="number_plate">Number Plate:</label>
            <input
                type="text"
                id="number_plate"
                name="number_plate"
                required
                maxlength="10"
            />

            <label for="start_location">Start Location:</label>
            <input
                type="text"
                id="start_location"
                name="start_location"
                required
            />

            <label for="destination">Destination:</label>
            <input
                type="text"
                id="destination"
                name="destination"

            />

            <button type="submit">Submit</button>
        </form>

        <h2>Delete Vehicle Entry</h2>
        <form id="deleteVehicleForm">
            <label for="delete_number_plate">Number Plate:</label>
            <input
                type="text"
                id="delete_number_plate"
                name="delete_number_plate"
                required
                maxlength="10"
            />
            <button type="submit">Delete</button>
        </form>

        <script src="{% static 'core/js/supervisor.js' %}"></script>
    </body>
</html>
