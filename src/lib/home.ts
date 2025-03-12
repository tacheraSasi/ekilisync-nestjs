export const homeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Backend API Documentation</title>
  <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
  <script src="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.js"></script>
</head>
<body class="bg-neutral-900 text-white font-sans leading-normal">

  <div class="text-center py-12">
    <!-- Header Section -->
    <h1 class="text-5xl font-extrabold mb-4 text-white">Backend API Documentation</h1>
    <p class="text-xl mb-8">Welcome to the API documentation for your awesome backend. Start building with ease!</p>
    
    <div class="space-x-4">
      <a href="#usage" class="text-lg text-neutral-400 hover:text-white transition">Usage</a>
      <a href="#endpoints" class="text-lg text-neutral-400 hover:text-white transition">API Endpoints</a>
    </div>
  </div>

  <section id="usage" class="max-w-4xl mx-auto py-16 px-6">
    <h2 class="text-3xl font-semibold text-center mb-6">Usage</h2>
    <p class="text-lg text-neutral-300 mb-4">
      Our backend API is designed to handle all your needs with speed and ease. Here’s how to get started:
    </p>
    <pre class="bg-neutral-800 p-4 rounded-lg text-green-400 text-lg">
      <code>GET /users</code> - Fetches a list of users
    </pre>
    <p class="text-lg text-neutral-300 mt-4">
      Use the above endpoint to retrieve user information. For a list of all available endpoints, refer to the section below.
    </p>
  </section>

  <section id="endpoints" class="bg-neutral-800 text-white py-16 px-6">
    <h2 class="text-3xl font-semibold text-center mb-6">API Endpoints</h2>
    <div class="space-y-6">
      <!-- Endpoint 1 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">GET /users</h3>
        <p class="text-neutral-300">Fetches a list of users. Returns an array of user objects.</p>
      </div>
      <!-- Endpoint 2 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">POST /users</h3>
        <p class="text-neutral-300">Creates a new user. Requires a JSON body with user data.</p>
      </div>
      <!-- Endpoint 3 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">PUT /users/:id</h3>
        <p class="text-neutral-300">Updates an existing user by ID. Requires a JSON body with updated data.</p>
      </div>
      <!-- Endpoint 4 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">DELETE /users/:id</h3>
        <p class="text-neutral-300">Deletes a user by ID.</p>
      </div>
      <!-- Endpoint 5 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">POST /users/pair</h3>
        <p class="text-neutral-300">Pairs two users together. Requires a JSON body with user IDs.</p>
      </div>
      <!-- Endpoint 6 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">GET /users/:id/partner</h3>
        <p class="text-neutral-300">Fetches the partner of a user by ID.</p>
      </div>
      <!-- Endpoint 7 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">POST /tasks</h3>
        <p class="text-neutral-300">Creates a new task. Requires a JSON body with task data.</p>
      </div>
      <!-- Endpoint 8 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">PATCH /tasks/:id/complete</h3>
        <p class="text-neutral-300">Marks a task as complete by task ID.</p>
      </div>
      <!-- Endpoint 9 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">PATCH /tasks/:id</h3>
        <p class="text-neutral-300">Updates a task by ID. Requires a JSON body with updated task data.</p>
      </div>
      <!-- Endpoint 10 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">GET /tasks/:userId</h3>
        <p class="text-neutral-300">Fetches all tasks for a user by their ID.</p>
      </div>
      <!-- Endpoint 11 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">GET /tasks/:userId/completed</h3>
        <p class="text-neutral-300">Fetches completed tasks for a user by their ID.</p>
      </div>
      <!-- Endpoint 12 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">GET /tasks/:userId/incomplete</h3>
        <p class="text-neutral-300">Fetches incomplete tasks for a user by their ID.</p>
      </div>
      <!-- Endpoint 13 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">GET /tasks/:userId/count</h3>
        <p class="text-neutral-300">Fetches the task count for a user by their ID.</p>
      </div>
      <!-- Endpoint 14 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">GET /tasks/:taskId</h3>
        <p class="text-neutral-300">Fetches a task by its ID.</p>
      </div>
      <!-- Endpoint 15 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">DELETE /tasks/:id</h3>
        <p class="text-neutral-300">Deletes a task by ID.</p>
      </div>
      <!-- Endpoint 16 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">POST /send-email</h3>
        <p class="text-neutral-300">Sends an email. Requires a JSON body with email data.</p>
      </div>
      <!-- Endpoint 17 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">GET /send-email</h3>
        <p class="text-neutral-300">Fetches all sent emails.</p>
      </div>
      <!-- Endpoint 18 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">GET /send-email/:id</h3>
        <p class="text-neutral-300">Fetches a sent email by its ID.</p>
      </div>
      <!-- Endpoint 19 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">PATCH /send-email/:id</h3>
        <p class="text-neutral-300">Updates a sent email by its ID. Requires a JSON body with updated email data.</p>
      </div>
      <!-- Endpoint 20 -->
      <div class="bg-neutral-700 p-6 rounded-lg">
        <h3 class="text-xl font-semibold">DELETE /send-email/:id</h3>
        <p class="text-neutral-300">Deletes a sent email by its ID.</p>
      </div>
    </div>
  </section>

  

  <footer class="bg-neutral-900 text-center py-4 text-neutral-500">
    <p>"The best way to predict the future is to invent it." - Alan Kay</p>
  </footer>
  
</body>
</html>


`;
