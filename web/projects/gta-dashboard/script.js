let cash = 5000000;

let assets = [
  { name: "Nightclub", category: "Business", price: 1200000 },
  { name: "Agency", category: "Property", price: 800000 }
];

let upgrades = [
  { name: "Security Upgrade", cost: 200000 }
];

// CASH
function updateCash() {
  let val = document.getElementById("cashInput").value;
  if (!val) return;

  cash = parseInt(val);
  renderCash();

  document.getElementById("cashInput").value = "";
}

// ADD ASSET
function addAsset() {
  let name = document.getElementById("assetName").value;
  let category = document.getElementById("category").value;
  let price = document.getElementById("price").value;

  if (!name || !price) return;

  assets.push({ name, category, price: Number(price) });
  renderAssets();

  // clear inputs
  document.getElementById("assetName").value = "";
  document.getElementById("price").value = "";
}

// DELETE ASSET
function deleteAsset(index) {
  assets.splice(index, 1);
  renderAssets();
}

// ADD UPGRADE
function addUpgrade() {
  let name = document.getElementById("upgradeName").value;
  let cost = document.getElementById("upgradeCost").value;

  if (!name || !cost) return;

  upgrades.push({ name, cost: Number(cost) });
  renderUpgrades();

  // clear inputs
  document.getElementById("upgradeName").value = "";
  document.getElementById("upgradeCost").value = "";
}

// DELETE UPGRADE
function deleteUpgrade(index) {
  upgrades.splice(index, 1);
  renderUpgrades();
}

// RENDER CASH
function renderCash() {
  document.getElementById("cash").innerText =
    "$" + cash.toLocaleString();
}

// RENDER ASSETS
function renderAssets() {
  let table = document.getElementById("assetTable");
  table.innerHTML = "";

  let totalValue = 0;

  assets.forEach((a, i) => {
    totalValue += Number(a.price);

    table.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${a.name}</td>
        <td>${a.category}</td>
        <td>$${Number(a.price).toLocaleString()}</td>
        <td>
          <button onclick="deleteAsset(${i})" class="btn btn-sm btn-danger">X</button>
        </td>
      </tr>
    `;
  });

  // OPTIONAL: show total asset value in console (or add UI later)
  console.log("Total Asset Value:", totalValue);
}

// RENDER UPGRADES
function renderUpgrades() {
  let table = document.getElementById("upgradeTable");
  table.innerHTML = "";

  upgrades.forEach((u, i) => {
    table.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${u.name}</td>
        <td>$${Number(u.cost).toLocaleString()}</td>
        <td>
          <button onclick="deleteUpgrade(${i})" class="btn btn-sm btn-danger">X</button>
        </td>
      </tr>
    `;
  });
}

// INIT
renderCash();
renderAssets();
renderUpgrades();