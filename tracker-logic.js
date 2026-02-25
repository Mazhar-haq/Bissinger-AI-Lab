const f6List = [
    "MILK CHOCOLATE CARAMEL CHEESECAKE TRUFFLE",
    "WEDDING CAKE TRUFFLE",
    "BIRTHDAY CAKE TRUFFLE",
    "CHOCOLATE MILKSHAKE TRUFFLE",
    "MILK CHOCOLATE CHERRY CORDIALS",
    "DARK CHOCOLATE CHERRY CORDIALS",
    "STRAWBERRY TRUFFLE",
    "DARK CHOCOLATE RASPBERRY TRUFFLE",
    "DARK CHOCOLATE CHAMPAGNE TRUFFLE",
    "RASPBERRY CARAMEL JEWEL",
    "STRAWBERRY CHEESECAKE TRUFFLE",
    "IRISH CREME TRUFFLE",
    "CREME BRÛLÉE TRUFFLE",
    "TIRAMISU TRUFFLE",
    "DARK CHOCOLATE ITALIAN ESPRESSO TRUFFLE",
    "DARK CHOCOLATE CARAMEL MACCHIATO TRUFFLE",
    "RED VELVET CAKE TRUFFLE",
    "GERMAN CHOCOLATE TRUFFLE",
    "DARK CHOCOLATE SOUFFLÉ TRUFFLE",
    "PINEAPPLE UPSIDE DOWN CAKE TRUFFLE",
    "WHITE EURO TRUFFLE",
    "DARK CHOCOLATE FRENCH VANILLA TRUFFLE",
    "FRENCH VANILLA \"B\"",
    "MILK CHOCOLATE CARAMEL FUDGE BROWNIE TRUFFLE",
    "WHITE RUSSIAN TRUFFLE",
    "MILK SWISS CHOCOLATE TRUFFLE",
    "DARK SWISS CHOCOLATE TRUFFLE",
    "MILK SEA SALT CARAMEL",
    "DARK CHOCOLATE HIMALAYAN SEA SALT CARAMEL",
    "DARK CHOCOLATE CARAMEL",
    "MILK CHOCOLATE DOUBLE CHOCOLATE CARAMEL",
    "DARK SEA SALT CARAMEL TRUFFLE",
    "FRESH MINT TRUFFLE",
    "DARK CREME MINTS",
    "MILK CHOCOLATE MAPLE PECAN CREAM",
    "DARK CHOCOLATE MAPLE PECAN CREAM",
    "PISTACHIO CROWN TRUFFLE",
    "DARK CHOCOLATE FRENCH VANILLA DREAM",
    "MILK VANILLA DREAMS",
    "LEMON TEARDROP TRUFFLE",
    "MILK CHOCOLATE SWISS PECAN CREAM",
    "DARK CHOCOLATE RASPBERRY CREME",
    "MILK CHOCOLATE RASPBERRY CREME",
    "MILK ORANGE CREME",
    "DARK CHOCOLATE ORANGE CREME",
    "ROOT BEER FLOAT TRUFFLE",
    "MILK CHOCOLATE ENGLISH ALMOND TOFFEE",
    "DARK CINNAMON ALMOND CARAMEL",
    "MILK CHOCOLATE PECAN CARAMEL",
    "MILK CHOCOLATE PEANUT BUTTER TRUFFLE"
];

const f1List = [
    "MILK CHOCOLATE CARAMEL FUDGE BROWNIE TRUFFLE",
    "FRESH MINT TRUFFLE",
    "BIRTHDAY CAKE TRUFFLE",
    "MILK CHOCOLATE TIRAMISU TRUFFLE",
    "WHITE EURO TRUFFLE",
    "MILK CHOCOLATE STRAWBERRY TRUFFLE",
    "DARK CHOCOLATE RASPBERRY TRUFFLE",
    "IRISH CREAM TRUFFLE",
    "WEDDING CAKE TRUFFLE",
    "RASPBERRY CARAMEL JEWEL TRUFFLE",
    "MILK CHOCOLATE RED VELVET TRUFFLE",
    "DARK CHOCOLATE FRENCH VANILLA \"B\"",
    "MILK CHOCOLATE FRENCH SEA SALT CARAMEL",
    "DARK CHOCOLATE SEA SALT CARAMEL",
    "MILK CHOCOLATE SWISS PECAN CREAM",
    "PISTACHIO CROWN TRUFFLE"
];

const f6HalfPlates = [
    "MILK CHOCOLATE CARAMEL CHEESECAKE TRUFFLE",
    "WEDDING CAKE TRUFFLE",
    "MILK CHOCOLATE CHERRY CORDIALS",
    "DARK CHOCOLATE CHERRY CORDIALS",
    "STRAWBERRY TRUFFLE",
    "DARK CHOCOLATE RASPBERRY TRUFFLE",
    "DARK CHOCOLATE CHAMPAGNE TRUFFLE",
    "RASPBERRY CARAMEL JEWEL",
    "DARK CHOCOLATE ITALIAN ESPRESSO TRUFFLE",
    "DARK CHOCOLATE CARAMEL MACCHIATO TRUFFLE",
    "RED VELVET CAKE TRUFFLE",
    "GERMAN CHOCOLATE TRUFFLE",
    "WHITE EURO TRUFFLE",
    "DARK CHOCOLATE FRENCH VANILLA TRUFFLE",
    "MILK CHOCOLATE CARAMEL FUDGE BROWNIE TRUFFLE",
    "WHITE RUSSIAN TRUFFLE",
    "MILK SWISS CHOCOLATE TRUFFLE",
    "DARK SWISS CHOCOLATE TRUFFLE",
    "MILK SEA SALT CARAMEL",
    "DARK CHOCOLATE HIMALAYAN SEA SALT CARAMEL",
    "DARK CHOCOLATE CARAMEL",
    "MILK CHOCOLATE DOUBLE CHOCOLATE CARAMEL",
    "FRESH MINT TRUFFLE",
    "DARK CREME MINTS",
    "MILK CHOCOLATE MAPLE PECAN CREAM",
    "DARK CHOCOLATE MAPLE PECAN CREAM",
    "DARK CHOCOLATE FRENCH VANILLA DREAM",
    "MILK VANILLA DREAMS",
    "DARK CHOCOLATE RASPBERRY CREME",
    "MILK CHOCOLATE RASPBERRY CREME",
    "MILK ORANGE CREME",
    "DARK CHOCOLATE ORANGE CREME",
    "ROOT BEER FLOAT TRUFFLE",
    "MILK CHOCOLATE ENGLISH ALMOND TOFFEE",
    "DARK CINNAMON ALMOND CARAMEL",
    "MILK CHOCOLATE PECAN CARAMEL"
];

const f1HalfPlates = [
    "MILK CHOCOLATE TIRAMISU TRUFFLE",
    "WHITE EURO TRUFFLE",
    "MILK CHOCOLATE FRENCH SEA SALT CARAMEL",
    "DARK CHOCOLATE SEA SALT CARAMEL",
    "MILK CHOCOLATE SWISS PECAN CREAM",
    "PISTACHIO CROWN TRUFFLE"
];

const f6SpecialHalfPlates = [
    "DARK CHOCOLATE FRENCH VANILLA DREAM",
    "MILK VANILLA DREAMS",
    "DARK CHOCOLATE RASPBERRY CREME",
    "MILK CHOCOLATE RASPBERRY CREME",
    "MILK CHOCOLATE ENGLISH ALMOND TOFFEE"
];

const f6SpecialHalfPlates2 = [
    "DARK CREME MINTS",
    "MILK CHOCOLATE MAPLE PECAN CREAM",
    "DARK CHOCOLATE MAPLE PECAN CREAM"
];

function init() {
    const dateInput = document.getElementById('trackingDate');
    if (!dateInput.value) {
        const now = new Date();
        dateInput.value = now.toISOString().split('T')[0];
    }
    updateDateDisplay();
    renderRows(f6List, 'f6Body', 'f6');
    renderRows(f1List, 'f1Body', 'f1');
    setupRowHighlighting();
    loadData();
}

function setupRowHighlighting() {
    const tables = [document.getElementById('f6Table'), document.getElementById('f1Table')];
    tables.forEach(table => {
        table.addEventListener('focusin', (e) => {
            if (e.target.tagName === 'INPUT') {
                const row = e.target.closest('tr');
                if (row) row.classList.add('highlight-row');
            }
        });
        table.addEventListener('focusout', (e) => {
            if (e.target.tagName === 'INPUT') {
                const row = e.target.closest('tr');
                if (row) row.classList.remove('highlight-row');
            }
        });
    });
}

function toggleGuide() {
    const g = document.getElementById('guide');
    g.style.display = g.style.display === 'none' ? 'block' : 'none';
}

function renderRows(list, containerId, prefix) {
    const container = document.getElementById(containerId);
    const halfPlatesList = prefix === 'f6' ? f6HalfPlates : f1HalfPlates;
    
    list.forEach((name, i) => {
        const id = `${prefix}_${i}`;
        const tr = document.createElement('tr');
        
        const isHalfPlate = halfPlatesList.includes(name);
        const isSpecialHalfPlate = prefix === 'f6' && f6SpecialHalfPlates.includes(name);
        const isSpecialHalfPlate2 = prefix === 'f6' && f6SpecialHalfPlates2.includes(name);
        
        let badgeHtml = '';
        if (isSpecialHalfPlate2) {
            badgeHtml = '<span class="half-plate-badge-special2">Half Plate</span>';
        } else if (isSpecialHalfPlate) {
            badgeHtml = '<span class="half-plate-badge-special">Half Plate</span>';
        } else if (isHalfPlate) {
            badgeHtml = '<span class="half-plate-badge">Half Plate</span>';
        }

        tr.innerHTML = `
            <td>${name}${badgeHtml}</td>
            <td><input type="number" id="${id}_am" class="count-input" onkeydown="handleTab(event, '${prefix}', ${i}, 'am')" oninput="calc('${id}', 'am')"></td>
            <td><input type="number" id="${id}_refill" class="count-input" onkeydown="handleTab(event, '${prefix}', ${i}, 'refill')" oninput="calc('${id}', 'refill')"></td>
            <td><input type="number" id="${id}_pm" class="count-input" onkeydown="handleTab(event, '${prefix}', ${i}, 'pm')" oninput="calc('${id}', 'pm')"></td>
            <td id="${id}_sold" class="sold-text">0</td>
            <td id="${id}_end" class="end-text">0</td>
        `;
        container.appendChild(tr);
    });
}

function handleTab(event, prefix, index, col) {
    if (event.key === "Enter" || event.key === "Tab") {
        event.preventDefault();
        const list = prefix === 'f6' ? f6List : f1List;
        const nextIndex = index + 1;
        if (nextIndex < list.length) {
            const nextInput = document.getElementById(`${prefix}_${nextIndex}_${col}`);
            if (nextInput) nextInput.focus();
        }
    }
}

function calc(id, trigger) {
    const amIn = document.getElementById(`${id}_am`);
    const refIn = document.getElementById(`${id}_refill`);
    const pmIn = document.getElementById(`${id}_pm`);
    const soldEl = document.getElementById(`${id}_sold`);
    const endEl = document.getElementById(`${id}_end`);

    const am = parseInt(amIn.value) || 0;
    const ref = parseInt(refIn.value) || 0;
    const pm = parseInt(pmIn.value) || 0;

    const sold = Math.max(0, (am - pm) + ref);
    
    soldEl.textContent = sold;
    endEl.textContent = pm;

    const currentEnd = parseInt(endEl.textContent);
    if (currentEnd > 0 && currentEnd < 5) endEl.classList.add('low-stock');
    else endEl.classList.remove('low-stock');

    updateTotals();
    saveData();
}

function updateTotals() {
    const sum = (prefix, list) => list.reduce((acc, _, i) => {
        const el = document.getElementById(`${prefix}_${i}_end`);
        return acc + (el ? (parseInt(el.textContent) || 0) : 0);
    }, 0);
    const f6 = sum('f6', f6List);
    const f1 = sum('f1', f1List);
    document.getElementById('total-f6').textContent = f6;
    document.getElementById('total-f1').textContent = f1;
    document.getElementById('total-grand').textContent = f6 + f1;
    updateTopSellers();
}

function updateTopSellers() {
    const sales = {};
    const tally = (list, prefix) => list.forEach((name, i) => {
        const el = document.getElementById(`${prefix}_${i}_sold`);
        const s = el ? (parseInt(el.textContent) || 0) : 0;
        if (s > 0) sales[name] = (sales[name] || 0) + s;
    });
    tally(f6List, 'f6'); tally(f1List, 'f1');
    const sorted = Object.entries(sales).sort((a,b) => b[1]-a[1]).slice(0,5);
    document.getElementById('topSellersList').innerHTML = sorted.length ? sorted.map(([n,c],i) => `
        <div class="seller-badge"><span>#${i+1}</span> ${n} <span class="seller-count">${c}</span></div>
    `).join('') : '<div class="seller-badge" style="opacity: 0.5;">Waiting for sales data...</div>';
}

function switchFloor(f) {
    document.querySelectorAll('.floor-view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`${f}-view`).classList.add('active');
    document.getElementById(`btn-${f}`).classList.add('active');
}

function updateDateDisplay() {
    const val = document.getElementById('trackingDate').value;
    if (!val) return;
    const d = new Date(val + 'T00:00:00');
    document.getElementById('displayDate').textContent = d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function lockAM() {
    document.querySelectorAll('input[id$="_am"]').forEach(i => i.disabled = true);
    const b = document.getElementById('lockAmBtn');
    b.textContent = "AM Locked"; b.disabled = true; b.style.opacity = "0.5";
    saveData();
    showToast("Morning counts locked.");
}

function confirmReset() {
    if (window.confirm("Clear all data for today?")) {
        localStorage.removeItem('biss_truffle_full_v2');
        location.reload();
    }
}

function saveData() {
    const map = (list, prefix) => list.map((_, i) => ({
        am: document.getElementById(`${prefix}_${i}_am`)?.value || "",
        ref: document.getElementById(`${prefix}_${i}_refill`)?.value || "",
        pm: document.getElementById(`${prefix}_${i}_pm`)?.value || ""
    }));
    const data = {
        date: document.getElementById('trackingDate').value,
        oMod: document.getElementById('openingMod').value,
        cMod: document.getElementById('closingMod').value,
        amLocked: document.getElementById('lockAmBtn').disabled,
        f6: map(f6List, 'f6'),
        f1: map(f1List, 'f1')
    };
    localStorage.setItem('biss_truffle_full_v2', JSON.stringify(data));
}

function loadData() {
    const raw = localStorage.getItem('biss_truffle_full_v2');
    if (!raw) return;
    const d = JSON.parse(raw);
    document.getElementById('trackingDate').value = d.date;
    document.getElementById('openingMod').value = d.oMod;
    document.getElementById('closingMod').value = d.cMod;
    
    const fill = (list, prefix, arr) => list.forEach((_, i) => {
        const id = `${prefix}_${i}`;
        const amIn = document.getElementById(`${id}_am`);
        const refIn = document.getElementById(`${id}_refill`);
        const pmIn = document.getElementById(`${id}_pm`);
        
        if (arr && arr[i]) {
            if (amIn) amIn.value = arr[i].am;
            if (refIn) refIn.value = arr[i].ref;
            if (pmIn) pmIn.value = arr[i].pm;
        }
        if (d.amLocked && amIn) amIn.disabled = true;
        calc(id, 'init');
    });
    fill(f6List, 'f6', d.f6);
    fill(f1List, 'f1', d.f1);
    if (d.amLocked) {
        const b = document.getElementById('lockAmBtn');
        b.textContent = "AM Locked";
        b.disabled = true;
        b.style.opacity = "0.5";
    }
    updateDateDisplay();
}

function openReport() {
    document.getElementById('reportModal').style.display = 'flex';
}

function closeReport() {
    document.getElementById('reportModal').style.display = 'none';
}

function showToast(m) {
    const t = document.getElementById('toast');
    t.textContent = m;
    t.style.opacity = 1;
    setTimeout(() => (t.style.opacity = 0), 2500);
}

function generateReport(type) {
    const date = document.getElementById('displayDate').textContent;
    const mod = document.getElementById(type === 'am' ? 'openingMod' : 'closingMod').value || 'N/A';
    let report = `BISSINGER'S ${type.toUpperCase()} REPORT\nDate: ${date}\nMOD: ${mod}\n\n`;

    const section = (title, list, prefix) => {
        let sectionContent = `--- ${title} FLOOR ---\n`;
        let hasData = false;
        list.forEach((name, i) => {
            const id = `${prefix}_${i}`;
            const am = document.getElementById(`${id}_am`)?.value || 0;
            const pm = document.getElementById(`${id}_pm`)?.value || 0;
            const sold = document.getElementById(`${id}_sold`)?.textContent || 0;
            if (type === 'am' && am > 0) {
                sectionContent += `${name}: AM ${am}\n`;
                hasData = true;
            }
            if (type === 'pm' && (pm > 0 || sold > 0)) {
                sectionContent += `${name}: Sold ${sold} | End ${pm}\n`;
                hasData = true;
            }
        });
        if (hasData) report += sectionContent + `\n`;
    };

    section("6TH", f6List, "f6");
    section("1ST", f1List, "f1");
    
    const textArea = document.createElement("textarea");
    textArea.value = report;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand("copy");
        showToast("Report copied!");
    } catch (err) {
        console.error("Unable to copy", err);
    }
    document.body.removeChild(textArea);
    closeReport();
}

