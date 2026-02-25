const f6List = ["MILK CHOCOLATE CARAMEL CHEESECAKE TRUFFLE", "WEDDING CAKE TRUFFLE", "BIRTHDAY CAKE TRUFFLE", "CHOCOLATE MILKSHAKE TRUFFLE", "MILK CHOCOLATE CHERRY CORDIALS", "DARK CHOCOLATE CHERRY CORDIALS", "STRAWBERRY TRUFFLE", "DARK CHOCOLATE RASPBERRY TRUFFLE", "DARK CHOCOLATE CHAMPAGNE TRUFFLE", "RASPBERRY CARAMEL JEWEL", "STRAWBERRY CHEESECAKE TRUFFLE", "IRISH CREME TRUFFLE", "CREME BRULÉE TRUFFLE", "TIRAMISU TRUFFLE", "DARK CHOCOLATE ITALIAN ESPRESSO TRUFFLE", "DARK CHOCOLATE CARAMEL MACCHIATO TRUFFLE", "RED VELVET CAKE TRUFFLE", "GERMAN CHOCOLATE TRUFFLE", "DARK CHOCOLATE SOUFFLÉ TRUFFLE", "PINEAPPLE UPSIDE DOWN CAKE TRUFFLE", "WHITE EURO TRUFFLE", "DARK CHOCOLATE FRENCH VANILLA TRUFFLE", "FRENCH VANILLA \"B\"", "MILK CHOCOLATE CARAMEL FUDGE BROWNIE TRUFFLE", "WHITE RUSSIAN TRUFFLE", "MILK SWISS CHOCOLATE TRUFFLE", "DARK SWISS CHOCOLATE TRUFFLE", "MILK SEA SALT CARAMEL", "DARK CHOCOLATE HIMALAYAN SEA SALT CARAMEL", "DARK CHOCOLATE CARAMEL", "MILK CHOCOLATE DOUBLE CHOCOLATE CARAMEL", "DARK SEA SALT CARAMEL TRUFFLE", "FRESH MINT TRUFFLE", "DARK CREME MINTS", "MILK CHOCOLATE MAPLE PECAN CREAM", "DARK CHOCOLATE MAPLE PECAN CREAM", "PISTACHIO CROWN TRUFFLE", "DARK CHOCOLATE FRENCH VANILLA DREAM", "MILK VANILLA DREAMS", "LEMON TEARDROP TRUFFLE", "MILK CHOCOLATE SWISS PECAN CREAM", "DARK CHOCOLATE RASPBERRY CREME", "MILK CHOCOLATE RASPBERRY CREME", "MILK ORANGE CREME", "DARK CHOCOLATE ORANGE CREME", "ROOT BEER FLOAT TRUFFLE", "MILK CHOCOLATE ENGLISH ALMOND TOFFEE", "DARK CINNAMON ALMOND CARAMEL", "MILK CHOCOLATE PECAN CARAMEL", "MILK CHOCOLATE PEANUT BUTTER TRUFFLE"];
const f1List = ["MILK CHOCOLATE CARAMEL FUDGE BROWNIE TRUFFLE", "FRESH MINT TRUFFLE", "BIRTHDAY CAKE TRUFFLE", "MILK CHOCOLATE TIRAMISU TRUFFLE", "WHITE EURO TRUFFLE", "MILK CHOCOLATE STRAWBERRY TRUFFLE", "DARK CHOCOLATE RASPBERRY TRUFFLE", "IRISH CREAM TRUFFLE", "WEDDING CAKE TRUFFLE", "RASPBERRY CARAMEL JEWEL TRUFFLE", "MILK CHOCOLATE RED VELVET TRUFFLE", "DARK CHOCOLATE FRENCH VANILLA \"B\"", "MILK CHOCOLATE FRENCH SEA SALT CARAMEL", "DARK CHOCOLATE SEA SALT CARAMEL", "MILK CHOCOLATE SWISS PECAN CREAM", "PISTACHIO CROWN TRUFFLE"];

function init() {
    renderRows(f6List, 'f6Body', 'f6');
    renderRows(f1List, 'f1Body', 'f1');
    updateDateDisplay();
}

function renderRows(list, containerId, prefix) {
    const container = document.getElementById(containerId);
    list.forEach((name, i) => {
        const id = `${prefix}_${i}`;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${name}</td>
            <td><input type="number" id="${id}_am" class="count-input" oninput="calc('${id}')"></td>
            <td><input type="number" id="${id}_refill" class="count-input" oninput="calc('${id}')"></td>
            <td><input type="number" id="${id}_pm" class="count-input" oninput="calc('${id}')"></td>
            <td id="${id}_sold">0</td>
            <td id="${id}_end">0</td>`;
        container.appendChild(tr);
    });
}

function calc(id) {
    const am = parseInt(document.getElementById(`${id}_am`).value) || 0;
    const ref = parseInt(document.getElementById(`${id}_refill`).value) || 0;
    const pm = parseInt(document.getElementById(`${id}_pm`).value) || 0;
    document.getElementById(`${id}_sold`).textContent = Math.max(0, (am - pm) + ref);
    document.getElementById(`${id}_end`).textContent = pm;
}

function updateDateDisplay() {
    document.getElementById('displayDate').textContent = new Date().toLocaleDateString();
}

function toggleGuide() {
    const g = document.getElementById('guide');
    g.style.display = g.style.display === 'none' ? 'block' : 'none';
}

function switchFloor(f) {
    document.querySelectorAll('.floor-view').forEach(v => v.classList.remove('active'));
    document.getElementById(`${f}-view`).classList.add('active');
}
