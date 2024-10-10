document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const csrfToken = document.querySelector(
      "[name=csrfmiddlewaretoken]",
    ).value; // Get the CSRF token

    fetch("/auth/login/", {
      // Updated URL for login
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken, // Include CSRF token
      },

            // Redirect on successful login to the supervisor dashboard
            window.location.href = "/supervisor/dashboard/"; // Updated URL for supervisor dashboard

            errorContainer.classList.add("alert", "alert-danger");
            const errorList = document.createElement("ul");

            if (data.errors && data.errors.non_field_errors) {
              data.errors.non_field_errors.forEach((error) => {
                const listItem = document.createElement("li");
                listItem.textContent = error;
                errorList.appendChild(listItem);
              });
            } else {
              const listItem = document.createElement("li");
              listItem.textContent = "An unknown error occurred.";
              errorList.appendChild(listItem);
            }

            errorContainer.appendChild(errorList);
            document.body.prepend(errorContainer);
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
