<main class="container">
    <div class="header">
        <div>
            <h1>Task Dashboard</h1>
            <p>
                <span id="date"></span>
            </p>
        </div>

        <span class="badge">Personal Project</span>
    </div>

    <form id="task-form">
        <input type="text" id="task-input" placeholder="New Task..." required>

        <button type="submit">Add</button>
    </form>

    <ul id="task-list">
        <?php foreach ($tasks as $i => $task): ?>
            <li class="<?= $task['done'] ? 'done' : '' ?>" data-index="<?= $i ?>">
                <?= htmlspecialchars($task['text'] ?? $task['task'] ?? '') ?>
                <button type="button" class="toggle">✓</button>
                <button type="button" class="delete">✕</button>
            </li>
        <?php endforeach ?>
    </ul>

    <hr class="divider">

    <div class="stats">
    <!-- Stat card 1 -->
        <div class="stat-card">
            <div class="stat-label">Total</div>
            <div class="stat-value" id="stat-total"></div>
        </div>

        <!-- Stat card 2 -->
        <div class="stat-card">
            <div class="stat-label">Completed</div>
            <div class="stat-value" id="stat-done"></div>
        </div>

        <div class="stat-card">
            <div class="stat-label">Remaining</div>
            <div class="stat-value" id="stat-left"></div>
        </div>
    </div>



</main>

