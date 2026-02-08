console.log("app.js loaded");

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const dateEl = document.getElementById("date");

if (!form || !input || !list) {
    console.error("Missing required elements:", {
        form: !!form,
        input: !!input,
        list: !!list,
        date: !!dateEl,
    });
    throw new Error("Fix your HTML IDs to match app.js");
}

// Date
if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

// Ensure TASKS exists
window.TASKS = window.TASKS || [];

function renderTasks() {
    // Empty state
    if (!window.TASKS.length) {
        list.innerHTML = `<li class="empty">No tasks yet. Add one above 👆</li>`;
    } else {
        list.innerHTML = "";

        window.TASKS.forEach((task, index) => {
            const li = document.createElement("li");
            li.className = `task ${task.done ? "done" : ""}`;

            li.innerHTML = `
        <div class="task-left">
          <input
            class="check toggle"
            type="checkbox"
            data-index="${index}"
            ${task.done ? "checked" : ""}
          >
          <div class="task-text">${task.text}</div>
          ${task.done ? `<span class="chip">Done</span>` : ``}
        </div>
        <div class="actions">
          <button type="button" class="icon-btn delete" data-index="${index}" aria-label="Delete task">✕</button>
        </div>
      `;

            list.appendChild(li);
        });
    }

    // Stats
    const total = window.TASKS.length;
    const done = window.TASKS.filter((t) => t.done).length;

    const totalEl = document.getElementById("stat-total");
    const doneEl = document.getElementById("stat-done");
    const leftEl = document.getElementById("stat-left");

    if (totalEl) totalEl.textContent = total;
    if (doneEl) doneEl.textContent = done;
    if (leftEl) leftEl.textContent = total - done;
}

renderTasks();

// Add task (no reload)
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    try {
        const res = await fetch("save_task.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });

        if (!res.ok) throw new Error(`save_task.php failed (${res.status})`);

        const newTask = await res.json();
        window.TASKS.push(newTask);

        input.value = "";
        input.focus();
        renderTasks();
    } catch (err) {
        console.error(err);
        alert("Could not save task. Check console for details.");
    }
});

// Toggle (checkbox change)
list.addEventListener("change", async (e) => {
    const cb = e.target;
    if (!cb.classList || !cb.classList.contains("toggle")) return;

    const index = Number(cb.dataset.index);
    if (Number.isNaN(index)) return;

    // optimistic UI
    window.TASKS[index].done = cb.checked;
    renderTasks();

    try {
        const res = await fetch("toggle_task.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ index }),
        });

        if (!res.ok) throw new Error(`toggle_task.php failed (${res.status})`);
    } catch (err) {
        console.error(err);
        alert("Could not toggle task. Check console for details.");
    }
});

// Delete (button click)
list.addEventListener("click", async (e) => {
    const btn = e.target.closest("button.delete");
    if (!btn) return;

    const index = Number(btn.dataset.index);
    if (Number.isNaN(index)) return;

    // optimistic UI
    window.TASKS.splice(index, 1);
    renderTasks();

    try {
        const res = await fetch("delete_task.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ index }),
        });

        if (!res.ok) throw new Error(`delete_task.php failed (${res.status})`);
    } catch (err) {
        console.error(err);
        alert("Could not delete task. Check console for details.");
    }
});
