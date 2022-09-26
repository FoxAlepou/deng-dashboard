
// Controller
const sideMenu = document.querySelector("aside");
const menuBar = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBar.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// View
// fill orders in table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'success' }">${order.shipping}</td>
                <td class="primary">Details</td>
                    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

Updates.forEach(update => {
    const div = document.createElement('div');
    const divContent = `
                    <div class="update">
                    <div class="profile-photo">
                    <img src="${update.profilePhoto}">
                    </div>
                    <div class="message">
                    <p><b>${update.profileName}</b> ${update.message}</p>
                    <small class="text-muted">${update.timestamp}</small>
                    </div>
                    </div>
                        `;
    div.innerHTML = divContent;
    let updateList = document.getElementById('recent-updates-list');
    updateList.appendChild(div);
})

Sales.forEach(sale => {
    const div = document.createElement('div');
    const divContent = `
                <div class="${sale.title === 'ONLINE ORDERS' ? 'item online' : sale.title === 'OFFLINE ORDERS' ? 'item offline' : 'item customers'}">
                <div class="icon">
                <span class="material-icons-sharp">${sale.icon}</span>
                </div>
                <div class="right">
                <div class="info">
                <h3>${sale.title}</h3>
                <small class="text-muted">${sale.timestamp}</small>
                </div>
                </div>
                <h5 class="${sale.status}">${sale.persents}</h5>
                <h3>${sale.amount}</h3>
                </div>
                        `;
    div.innerHTML = divContent;
    let saleList = document.getElementById('sales-list');
    saleList.appendChild(div);

})
